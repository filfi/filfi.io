import classNames from 'classnames';
import { useIntl } from '@umijs/max';
import { useEventListener } from 'ahooks';
import { Modal as BSModal } from 'bootstrap';
import React, { useCallback, useImperativeHandle, useRef } from 'react';

import * as U from '@/utils/utils';
import styles from './styles.less';
import SpinBtn from '@/components/SpinBtn';
import { mountPortal, unmountPortal } from '@/helpers/app';
import { ReactComponent as IconHelp } from '@/assets/icons/help.svg';
import { ReactComponent as IconInfo } from '@/assets/icons/info.svg';
import { ReactComponent as IconLock } from '@/assets/icons/lock.svg';
import { ReactComponent as IconWarn } from '@/assets/icons/warn.svg';
import { ReactComponent as IconSuccess } from '@/assets/icons/success.svg';

export type ModalProps = {
  icon?: 'help' | 'info' | 'lock' | 'warn' | 'success' | React.ReactNode;
  size?: 'sm' | 'lg' | 'xl';
  fade?: boolean;
  closable?: boolean;
  centered?: boolean;
  confirmLoading?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  showCancel?: boolean;
  showConfirm?: boolean;
  dialogClassName?: classNames.Argument;
  headerClassName?: classNames.Argument;
  bodyClassName?: classNames.Argument;
  footerClassName?: classNames.Argument;
  onHide?: () => void;
  onShow?: () => void;
  onShown?: () => void;
  onHidden?: () => void;
  onCancel?: () => void;
  onConfirm?: () => any;
};
export type ModalAction = 'cancel' | 'confirm';
export type AlertProps = Omit<
  ModalProps,
  'cancelText' | 'showCancel' | 'showConfirm' | 'onCancel'
>;
export type ConfirmProps = Omit<ModalProps, 'showCancel' | 'showConfirm'>;
export type AlertOptions = Omit<AlertProps, 'children'> & {
  content?: React.ReactNode;
};
export type ConfirmOptions = Omit<ConfirmProps, 'children'> & {
  content?: React.ReactNode;
};
export type ModalStatic = React.ForwardRefExoticComponent<
  ModalProps & React.RefAttributes<ModalAttrs>
> & {
  Alert: React.ForwardRefExoticComponent<
    AlertProps & React.RefAttributes<ModalAttrs>
  >;
  Confirm: React.ForwardRefExoticComponent<
    ConfirmProps & React.RefAttributes<ModalAttrs>
  >;
  alert: (msgOrOpts: string | AlertOptions) => ModalAttrs['hide'];
  confirm: (msgOrOpts: string | ConfirmOptions) => ModalAttrs['hide'];
};

function getModal(el: HTMLElement | React.RefObject<HTMLElement>) {
  const _el =
    (el as React.RefObject<HTMLElement>).current ?? (el as HTMLElement);
  if (_el) {
    let modal = BSModal.getInstance(_el);

    if (!modal) {
      modal = new BSModal(_el);
    }

    return modal;
  }
}

const ModalRender: React.ForwardRefRenderFunction<ModalAttrs, ModalProps> = (
  {
    size,
    title,
    children,
    confirmLoading,
    dialogClassName,
    bodyClassName,
    headerClassName,
    footerClassName,
    cancelText,
    confirmText,
    showCancel,
    fade = true,
    icon = 'info',
    centered = true,
    closable = true,
    showConfirm = true,
    onHide,
    onShow,
    onShown,
    onHidden,
    onCancel,
    onConfirm,
  },
  ref?: React.Ref<ModalAttrs> | null,
) => {
  const el = useRef<HTMLDivElement>(null);

  const { formatMessage } = useIntl();

  const handleHide = () => getModal(el)?.hide();
  const handleShow = () => getModal(el)?.show();
  const handleToggle = () => getModal(el)?.toggle();

  const handleCancel = useCallback(() => {
    onCancel?.();

    handleHide();
  }, [onCancel]);

  const handleConfirm = useCallback(async () => {
    let r = onConfirm?.();

    if (r instanceof Promise) {
      r = await r;
    }

    if (r === false) return;

    handleHide();
  }, [onConfirm]);

  const _onHide = useCallback(() => onHide?.(), [onHide]);
  const _onHidden = useCallback(() => onHidden?.(), [onHidden]);
  const _onShow = useCallback(() => onShow?.(), [onShow]);
  const _onShown = useCallback(() => onShown?.(), [onShown]);

  useImperativeHandle(
    ref,
    () => ({
      hide: handleHide,
      show: handleShow,
      toggle: handleToggle,
    }),
    [],
  );

  useEventListener('hide.bs.modal', _onHide, { target: el });
  useEventListener('hidden.bs.modal', _onHidden, { target: el });
  useEventListener('show.bs.modal', _onShow, { target: el });
  useEventListener('shown.bs.modal', _onShown, { target: el });

  const renderIcon = () => {
    switch (icon) {
      case 'help':
        return <IconHelp />;
      case 'info':
        return <IconInfo />;
      case 'lock':
        return <IconLock />;
      case 'warn':
        return <IconWarn />;
      case 'success':
        return <IconSuccess />;
      default:
        return icon ?? <IconInfo />;
    }
  };

  const renderBtns = () => {
    const btns: React.ReactNode[] = [];

    if (showCancel) {
      btns.push(
        <button
          key="cancel"
          className="btn btn-lg btn-light"
          type="button"
          onClick={handleCancel}
        >
          {cancelText ?? formatMessage({ id: 'actions.button.cancel' })}
        </button>,
      );
    }

    if (showConfirm) {
      btns.push(
        <SpinBtn
          key="confirm"
          loading={confirmLoading}
          className="btn btn-lg btn-primary"
          onClick={handleConfirm}
        >
          {confirmText ?? formatMessage({ id: 'actions.button.confirm' })}
        </SpinBtn>,
      );
    }

    return btns;
  };

  const btns = renderBtns();

  return (
    <div
      ref={el}
      className={classNames('modal', styles.modal, { fade })}
      aria-hidden="true"
      aria-labelledby="modal"
      tabIndex={-1}
    >
      <div
        className={classNames(
          'modal-dialog',
          {
            'modal-sm': size === 'sm',
            'modal-lg': size === 'lg',
            'modal-xl': size === 'xl',
            'modal-dialog-centered': centered,
          },
          dialogClassName,
        )}
      >
        <div className="modal-content">
          <div className={classNames('modal-header', headerClassName)}>
            <div className="modal-icon">{renderIcon()}</div>

            {U.isDef(title) &&
              (U.isStr(title) ? (
                <h1 className="modal-title text-center">{title}</h1>
              ) : (
                title
              ))}

            {closable && (
              <button
                type="button"
                className="btn-close position-absolute end-0 top-0 me-3 mt-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            )}
          </div>
          <div className={classNames('modal-body text-break', bodyClassName)}>
            {children}
          </div>
          <div
            className={classNames(
              'modal-footer',
              { 'flex-column': btns.length > 2 },
              footerClassName,
            )}
          >
            {btns}
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = React.forwardRef(ModalRender) as ModalStatic;
const AlertRender: React.ForwardRefRenderFunction<ModalAttrs, AlertProps> = (
  props,
  ref?: React.Ref<ModalAttrs> | null,
) => {
  const modal = useRef<ModalAttrs>(null);

  useImperativeHandle(
    ref,
    () => ({
      hide: () => modal.current?.hide(),
      show: () => modal.current?.show(),
      toggle: () => modal.current?.toggle(),
    }),
    [],
  );

  return <Modal ref={modal} {...props} />;
};
const ConfirmRender: React.ForwardRefRenderFunction<
  ModalAttrs,
  ConfirmProps
> = (props, ref?: React.Ref<ModalAttrs> | null) => {
  const modal = useRef<ModalAttrs>(null);

  useImperativeHandle(
    ref,
    () => ({
      hide: () => modal.current?.hide(),
      show: () => modal.current?.show(),
      toggle: () => modal.current?.toggle(),
    }),
    [],
  );

  return <Modal ref={modal} {...props} showCancel />;
};
const Alert = React.forwardRef(AlertRender);
const Confirm = React.forwardRef(ConfirmRender);

const alert: ModalStatic['alert'] = (msgOrOpts) => {
  let modal: ModalAttrs | null = null;

  const { content, ...opts } = U.isStr(msgOrOpts)
    ? { content: msgOrOpts }
    : msgOrOpts;
  const props: AlertProps = {
    bodyClassName: 'text-center',
    ...opts,
    children: content,
  };

  const onRef = (ref: ModalAttrs | null) => {
    modal = ref;

    modal?.show();
  };

  const onHidden = () => {
    props.onHidden?.();

    unmountPortal.current?.();
  };

  const node = React.createElement(Alert, { ...props, onHidden, ref: onRef });

  mountPortal.current?.(node);

  return () => modal?.hide();
};
const confirm: ModalStatic['confirm'] = (msgOrOpts) => {
  let modal: ModalAttrs | null = null;

  const { content, ...opts } = U.isStr(msgOrOpts)
    ? { content: msgOrOpts }
    : msgOrOpts;
  const props: ConfirmProps = {
    icon: 'warn',
    bodyClassName: 'text-center',
    ...opts,
    children: content,
  };

  const onRef = (ref: ModalAttrs | null) => {
    modal = ref;

    modal?.show();
  };

  const onHidden = () => {
    props.onHidden?.();

    unmountPortal.current?.();
  };

  const node = React.createElement(Confirm, { ...props, onHidden, ref: onRef });

  mountPortal.current?.(node);

  return () => modal?.hide();
};

Modal.Alert = Alert;
Modal.Confirm = Confirm;

Modal.alert = alert;
Modal.confirm = confirm;

export default Modal;

import classNames from 'classnames';
import { Collapse } from 'bootstrap';
import { useEffect, useMemo, useRef } from 'react';
import { FormattedMessage, Link, useLocation } from '@umijs/max';
import { useBoolean, useClickAway, useEventListener, useScroll } from 'ahooks';

import './styles.less';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { ReactComponent as IconBook } from '@/assets/icons/book-closed.svg';
import { ReactComponent as IconReports } from '@/assets/icons/icon-reports.svg';
import { ReactComponent as IconDashboard } from '@/assets/icons/icon-dashboard.svg';
import { ReactComponent as IconSegment } from '@/assets/icons/icon-segment.svg';
import { ReactComponent as IconAnalycits } from '@/assets/icons/icon-analycits.svg';
import { ReactComponent as IconDiscord } from '@/assets/icons/discord.svg';
import { ReactComponent as IconTelegram } from '@/assets/icons/telegram.svg';
import { ReactComponent as IconTwitter } from '@/assets/icons/twitter.svg';

const headerHeight = 80;

const Header: React.FC = () => {
  // refs
  const header = useRef<HTMLDivElement>(null);
  const collapse = useRef<HTMLDivElement>(null);

  // states
  const [expand, { setTrue, setFalse }] = useBoolean(false);

  // hooks
  const position = useScroll();
  const location = useLocation();

  const percent = useMemo(() => Math.min((position?.top ?? 0) / headerHeight, 1), [position]);

  const closeCollapse = () => {
    const instance = Collapse.getInstance(collapse.current);

    instance?.hide();
  };

  useClickAway(closeCollapse, header);
  useEffect(closeCollapse, [location.pathname]);
  useEventListener('show.bs.collapse', setTrue, { target: collapse });
  useEventListener('hidden.bs.collapse', setFalse, { target: collapse });

  return (
    <header
      ref={header}
      className={classNames('header fixed-top', { 'shadow': expand })}
      style={{
        backgroundColor: expand ? '#fff' : `rgba(255, 255, 255, ${percent})`,
        boxShadow: `0 3px 10px rgba(0, 0, 0, ${percent * 0.15})`,
      }}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Logo />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div ref={collapse} id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav me-lg-auto mb-3 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#staker">
                  <FormattedMessage id="menu.staker" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#minner">
                  <FormattedMessage id="menu.minner" />
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                  <span className="me-2">
                    <FormattedMessage id="menu.provider" />
                  </span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconBook />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="badge badge-outline float-end text-gray-light">coming soon</span>
                      <h5 className="mb-1">Borrow FIL</h5>
                      <p className="mb-0 text-gray">Collateralize storage power to smart contract and borrow more FIL to grow.</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconBook />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="badge badge-outline float-end text-gray-light">coming soon</span>
                      <h5 className="mb-1">Raise FIL</h5>
                      <p className="mb-0 text-gray">Raise pledged FIL  for new storage power and share the rewards with investors.</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconBook />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="badge badge-outline float-end text-gray-light">coming soon</span>
                      <h5 className="mb-1">SP Foundry</h5>
                      <p className="mb-0 text-gray">Teams with strong software and hardware technical expertise to help storage providers build or expand storage power.</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconBook />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="badge badge-outline float-end text-gray-light">coming soon</span>
                      <h5 className="mb-1">Sealing as service</h5>
                      <p className="mb-0 text-gray">Share your powerful sealing resource to help Storage Provider and profit from the service.</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconBook />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="badge badge-outline float-end text-gray-light">coming soon</span>
                      <h5 className="mb-1">Fil+ Market</h5>
                      <p className="mb-0 text-gray">Exchange real data and DataCap within the community to promote data decentralization.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                  <span className="me-2">
                    <FormattedMessage id="menu.governance" />
                  </span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconReports />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Interactive reports</h5>
                      <p className="mb-0 text-gray">Learn about your users.</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconDashboard />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Team dashboard</h5>
                      <p className="mb-0 text-gray">Monitor your metrics.</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconSegment />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Limitless segmentation</h5>
                      <p className="mb-0 text-gray">Surface hidden trends.</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconAnalycits />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Group analytics</h5>
                      <p className="mb-0 text-gray">Measure B2B account health.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                  <span className="me-2">
                    <FormattedMessage id="menu.community" />
                  </span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <div className="dropdown-menu">
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconDiscord />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Discord</h5>
                      <p className="mb-0 text-gray">Ask us question</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconTwitter />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Twitter</h5>
                      <p className="mb-0 text-gray">Follow us on @FilFi</p>
                    </div>
                  </div>
                  <div className="dropdown-item">
                    <div className="flex-shrink-0">
                      <IconTelegram />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-1">Telegram</h5>
                      <p className="mb-0 text-gray">Join disscution</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://docs.filfi.ifo" target="_blank" rel="noreferrer">
                  <FormattedMessage id="menu.documents" />
                </a>
              </li>
            </ul>

            <p className="mb-lg-0">
              <a className="btn btn-primary btn-join" href="#">
                <i className="bi bi-discord"></i>
                <span className="ms-2">Join Discord</span>
              </a>
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

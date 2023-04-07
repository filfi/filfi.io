import classNames from 'classnames';
import { Collapse } from 'bootstrap';
import { useEffect, useMemo, useRef } from 'react';
import { FormattedMessage, Link, useLocation } from '@umijs/max';
import { useBoolean, useClickAway, useEventListener, useScroll } from 'ahooks';

import './styles.less';
import { ReactComponent as Logo } from '@/assets/brand.svg';
import { ReactComponent as IconBook } from '@/assets/icons/book-closed.svg';
import { ReactComponent as IconDiscord } from '@/assets/icons/discord.svg';
import { ReactComponent as IconTelegram } from '@/assets/icons/telegram.svg';
import { ReactComponent as IconTwitter } from '@/assets/icons/twitter.svg';

const headerHeight = 80;

const providers = [
  {
    soon: true,
    title: 'Borrow FIL',
    desc: 'Collateralize storage power to smart contract and borrow more FIL to grow.',
  },
  {
    soon: true,
    title: 'Raise FIL',
    desc: 'Raise pledged FIL  for new storage power and share the rewards with investors.',
  },
  {
    soon: true,
    title: 'SP Foundry',
    desc: 'Teams with strong software and hardware technical expertise to help storage providers build or expand storage power.',
  },
  // {
  //   title: 'Sealing as service',
  //   desc: 'Share your powerful sealing resource to help Storage Provider and profit from the service.',
  // },
  // {
  //   title: 'Fil+ Market',
  //   desc: 'Exchange real data and DataCap within the community to promote data decentralization.',
  // },
];

const governances = [
  {
    soon: true,
    title: 'FiFiDAO guide',
    desc: 'How to participate FilFi DAO community',
  },
  {
    title: 'Ambassador',
    desc: 'Community ambassadors are being recruited!',
  },
  {
    soon: true,
    title: 'Governance process',
    desc: 'Governance process Explore how the decisions in Lido governance process are made',
  },
];

const socials = [
  {
    icon: IconDiscord,
    title: 'Discord',
    desc: 'Ask us question',
    url: 'https://discord.gg/tht348jhuy',
  },
  {
    icon: IconTwitter,
    title: 'Twitter',
    desc: 'Follow us on @FilFi',
    url: 'https://twitter.com/filfi_io',
  },
  {
    icon: IconTelegram,
    title: 'Telegram',
    desc: 'Join disscution',
    url: 'https://t.me/+eDw3nnwV7xQwZGM9',
  },
];

const Header: React.FC = () => {
  // refs
  const header = useRef<HTMLDivElement>(null);
  const collapse = useRef<HTMLDivElement>(null);

  // states
  const [expand, { setTrue, setFalse }] = useBoolean(false);

  // hooks
  const position = useScroll();
  const location = useLocation();

  const percent = useMemo(
    () => Math.min((position?.top ?? 0) / headerHeight, 1),
    [position],
  );

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
      className={classNames('header fixed-top', { shadow: expand })}
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

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbar-offcanvas"
            aria-controls="navbar-offcanvas"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="navbar-offcanvas"
            aria-labelledby="navbarOffcanvas"
          >
            <div className="offcanvas-header">
              <Logo />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="nav navbar-nav me-lg-auto mb-3 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#staker">
                    <FormattedMessage id="menu.staker" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#miner">
                    <FormattedMessage id="menu.miner" />
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    <span className="me-2">
                      <FormattedMessage id="menu.provider" />
                    </span>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <div className="dropdown-menu">
                    {providers.map((item, idx) => (
                      <div key={idx} className="dropdown-item">
                        <div className="flex-shrink-0">
                          <IconBook />
                        </div>
                        <div className="flex-grow-1 ms-2 ms-md-3">
                          {item.soon && (
                            <span className="badge badge-outline float-end text-gray-light ms-2">
                              coming soon
                            </span>
                          )}
                          <h5 className="mb-1">{item.title}</h5>
                          <p className="mb-0 text-gray">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    <span className="me-2">
                      <FormattedMessage id="menu.governance" />
                    </span>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <div className="dropdown-menu">
                    {governances.map((item, idx) => (
                      <div key={idx} className="dropdown-item">
                        <div className="flex-shrink-0">
                          <IconBook />
                        </div>
                        <div className="flex-grow-1 ms-2 ms-md-3">
                          {item.soon && (
                            <span className="badge badge-outline float-end text-gray-light ms-2">
                              coming soon
                            </span>
                          )}
                          <h5 className="mb-1">{item.title}</h5>
                          <p className="mb-0 text-gray">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="true"
                    aria-expanded="false"
                  >
                    <span className="me-2">
                      <FormattedMessage id="menu.community" />
                    </span>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <div className="dropdown-menu">
                    {socials.map((item, idx) => (
                      <a
                        key={idx}
                        className="dropdown-item"
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="flex-shrink-0">
                          <item.icon />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="mb-1">{item.title}</h5>
                          <p className="mb-0 text-gray">{item.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://docs.filfi.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage id="menu.documents" />
                  </a>
                </li>
              </ul>

              <p className="d-flex align-items-center mb-lg-0 ms-lg-2">
                <a
                  className="btn btn-primary btn-join"
                  href="https://discord.gg/tht348jhuy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-discord"></i>
                  <span className="ms-2">Join Discord</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

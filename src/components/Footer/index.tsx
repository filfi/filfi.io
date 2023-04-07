import styles from './styles.less';
import { ReactComponent as Logo } from '@/assets/brand.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 mb-5">
            <p className="mb-5">
              <Logo />
            </p>
            <p>Keep FIL flowing, never sleeping</p>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5">
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">FIL Holder</dt>
                  <dd>
                    <p>
                      <a href="#">Staker</a>
                    </p>
                    <p>
                      <a href="#">Minner</a>
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">Storage Provider</dt>
                  <dd className="d-flex flex-column">
                    <p>
                      <a href="#">Borrow FIL</a>
                    </p>
                    <p>
                      <a href="#">Raise FIL</a>
                    </p>
                    <p>
                      <a href="#">SP Foundry</a>
                    </p>
                    <p>
                      <a href="#">Sealing as service</a>
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">Governance</dt>
                  <dd className="d-flex flex-column">
                    <p>
                      <a href="#">DAO guide</a>
                    </p>
                    <p>
                      <a href="#">Ambassador</a>
                    </p>
                    <p>
                      <a href="#">Governance process</a>
                    </p>
                    <p>
                      <a href="#">Aragon Voting</a>
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">Community</dt>
                  <dd className="d-flex flex-column">
                    <p>
                      <a
                        href="https://twitter.com/filfi_io"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://discord.gg/tht348jhuy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Discord
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://t.me/+eDw3nnwV7xQwZGM9"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Telegram
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/filfi"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://medium.com/@filfi.io/lists"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Medium
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.youtube.com/channel/UC1vbhcLjkbtfzCro3-8FKgw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Youtube
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.facebook.com/profile.php?id=100090036369008"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
                      </a>
                    </p>
                  </dd>
                </dl>
              </div>
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">Document</dt>
                  <dd className="d-flex flex-column">
                    <p>
                      <a href="#">Tutorial</a>
                    </p>
                    <p>
                      <a href="#">Guide</a>
                    </p>
                    <p>
                      <a href="#">Whitepaper</a>
                    </p>
                    <p>
                      <a
                        href="https://lido.fi/privacy-notice"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Privacy
                      </a>
                    </p>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

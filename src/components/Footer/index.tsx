import styles from './styles.less';
import { ReactComponent as Logo } from '@/assets/logo-dark.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 mb-5">
            <p className="mb-5"><Logo /></p>
            <p>Keep FIL flowing, never sleeping</p>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">FIL Holder</dt>
                  <dd>
                    <p><a href="#">Staker</a></p>
                    <p><a href="#">Minner</a></p>
                  </dd>
                </dl>
              </div>
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">Storage Provider</dt>
                  <dd className="d-flex flex-column">
                    <p><a href="#">Borrow FIL</a></p>
                    <p><a href="#">Raise FIL</a></p>
                    <p><a href="#">SP Foundry</a></p>
                    <p><a href="#">Sealing as service</a></p>
                  </dd>
                </dl>
              </div>
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">Governance</dt>
                  <dd className="d-flex flex-column">
                    <p><a href="#">DAO guide</a></p>
                    <p><a href="#">Ambassador</a></p>
                    <p><a href="#">Governance process</a></p>
                    <p><a href="#">Aragon Voting</a></p>
                  </dd>
                </dl>
              </div>
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">Community</dt>
                  <dd className="d-flex flex-column">
                    <p><a href="#">Twitter</a></p>
                    <p><a href="#">Discord</a></p>
                    <p><a href="#">Telegram</a></p>
                    <p><a href="#">GitHub</a></p>
                    <p><a href="#">Medium</a></p>
                    <p><a href="#">Youtube</a></p>
                    <p><a href="#">Facebook</a></p>
                  </dd>
                </dl>
              </div>
              <div className="col">
                <dl className="fw-semibold">
                  <dt className="mb-3">Document</dt>
                  <dd className="d-flex flex-column">
                    <p><a href="#">Tutorial</a></p>
                    <p><a href="#">Guide</a></p>
                    <p><a href="#">Whitepaper</a></p>
                    <p><a href="https://lido.fi/privacy-notice" target="_blank" rel="noreferrer">Privacy</a></p>
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

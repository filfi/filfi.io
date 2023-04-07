import classNames from 'classnames';

import styles from './styles.less';
import Steps from '@/components/Steps';
import { ReactComponent as IconStaking } from './imgs/icon-staking.svg';
import { ReactComponent as IconMining } from './imgs/icon-mining.svg';
import { ReactComponent as IconTrading } from './imgs/icon-trading.svg';
import { ReactComponent as IconDeFi } from './imgs/icon-defi.svg';
import { ReactComponent as IconBorrow } from './imgs/icon-borrowing.svg';
import { ReactComponent as IconRaise } from './imgs/icon-raising.svg';
import { ReactComponent as IconToken } from './imgs/icon-tokenizing.svg';
import { ReactComponent as IconBuild } from './imgs/icon-building.svg';
import { ReactComponent as Dao1 } from './imgs/dao-01.svg';
import { ReactComponent as Dao2 } from './imgs/dao-02.svg';
import { ReactComponent as Dao3 } from './imgs/dao-03.svg';
import { ReactComponent as Dao4 } from './imgs/dao-04.svg';
import { ReactComponent as Dao5 } from './imgs/dao-05.svg';
import { ReactComponent as Dao6 } from './imgs/dao-06.svg';
import { ReactComponent as Ecos1 } from './imgs/ecos-1.svg';
import { ReactComponent as Ecos2 } from './imgs/ecos-2.svg';
import { ReactComponent as Ecos3 } from './imgs/ecos-3.svg';
import { ReactComponent as Ecos4 } from './imgs/ecos-4.svg';
import { ReactComponent as Ecos5 } from './imgs/ecos-5.svg';
import { ReactComponent as Ecos6 } from './imgs/ecos-6.svg';

export default function Home() {
  const goto = () => {
    const el = document.querySelector('#community');

    el?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Banner */}
      <section
        className={classNames(
          'd-flex flex-column justify-content-center',
          styles.banner,
          styles.bg,
        )}
      >
        <div className="container text-center">
          <p className="mb-4">
            <span className="badge rounded-pill">
              <span className="badge rounded-pill">Comming Soon</span>
              <span className="ms-2">Genesis Pool will open in May 2023!</span>
            </span>
          </p>
          <h2 className={styles.title}>Keep FIL Flowing</h2>
          <p className={styles.desc}>
            Staking, Earning, Mining, All Built on FVM!
          </p>
          <p className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <button
              className="btn btn-primary btn-lg order-md-2"
              type="button"
              onClick={goto}
            >
              Join Community
            </button>
            <a
              className="btn btn-light btn-lg order-md-1"
              href="https://docs.filfi.io/en/introduction.html"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </p>
        </div>
      </section>

      <section className={classNames(styles.section)}>
        <div className="container text-center">
          <div>
            <h3 className={styles.title}>How staking pool works?</h3>
            <p className="text-center my-4 my-lg-5">
              <img
                className="img-fluid"
                src={require('./imgs/workflow.png')}
                alt="workflow"
              />
            </p>
          </div>

          <div className="row row-cols-1 row-cols-lg-3">
            <div className="col">
              <div className="card h-100 border-0 border-top rounded-0 shadow-none">
                <div className="card-body">
                  <h4 className={classNames('mb-2 fw-600', styles.label)}>
                    Staker
                  </h4>
                  <p className="text-gray">
                    Staker deposit FIL to pool, return stFIL and start to
                    receive rewards in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 border-top rounded-0 shadow-none">
                <div className="card-body">
                  <h4 className={classNames('mb-2 fw-600', styles.label)}>
                    Pool
                  </h4>
                  <p className="text-gray">
                    Pools determine collateral ratio and interest rate in
                    accordance with risk management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 border-top rounded-0 shadow-none">
                <div className="card-body">
                  <h4 className={classNames('mb-2 fw-600', styles.label)}>
                    Storage Provider
                  </h4>
                  <p className="text-gray">
                    SP collateralize healthy power to pool and borrow FILs, the
                    future rewards is used for periodic repayments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="border-bottom"></div>
      </div>

      <section className={classNames(styles.section)}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <h3 className={styles.title}>Staking is not enough</h3>
              <p className={classNames('text-gray', styles.label)}>
                It&apos;s simple to stake and enjoy passive earning. But
                it&apos;s not enough because returns from staking pools on
                Filecoin are affected by changes in lending supply and demand.
                Sometimes we need to mine directly to optimize our portfolios.
                FilFi understands the market and offers more choices to invest.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-lg-2 g-3 g-lg-0">
            <div className="col py-3">
              <div className="h-100 d-flex flex-column justify-content-center">
                <h4 className={classNames(styles.subtitle, 'mb-lg-5')}>
                  What we offer to Filecoin holders
                </h4>
                <div className="row row-cols-1 row-cols-md-2 g-3">
                  <div className="col">
                    <div className="h-100">
                      <p className="mb-3">
                        <IconStaking />
                      </p>
                      <h4 className={classNames(styles.label, 'fw-600')}>
                        Staking
                      </h4>
                      <p className="mb-0 text-gray">
                        Deposite FIL and earn passive income
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100">
                      <p className="mb-3">
                        <IconMining />
                      </p>
                      <h4 className={classNames(styles.label, 'fw-600')}>
                        Mining
                      </h4>
                      <p className="mb-0 text-gray">
                        Investing in storage power with FilFi is transparent
                        enough to reduce the risk of fraud and black boxes
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100">
                      <p className="mb-3">
                        <IconTrading />
                      </p>
                      <h4 className={classNames(styles.label, 'fw-600')}>
                        Trading
                      </h4>
                      <p className="mb-0 text-gray">
                        With the power NFT minted by FilFi, investors can trade
                        power in any scale, opening up liquidity for miner.
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="h-100">
                      <p className="mb-3">
                        <IconDeFi />
                      </p>
                      <h4 className={classNames(styles.label, 'fw-600')}>
                        Cross Defi
                      </h4>
                      <p className="mb-0 text-gray">
                        Every staked fil is live, you can put stFIL in other
                        Defi for stacked gains. Keep FIL flowing, not sleeping.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={classNames(
                  'h-100 d-flex align-items-center ms-lg-3 ms-xl-5',
                  styles.bg,
                )}
              >
                <img
                  className="img-fluid"
                  src={require('./imgs/value_holder.png')}
                  alt="What we offer to Filecoin holders"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="border-bottom"></div>
      </div>

      <section className={classNames(styles.section)}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 col-md-10 col-lg-8">
              <h3 className={styles.title}>Designed for Storage Provider</h3>
              <p className={classNames('text-gray', styles.label)}>
                FilFi is designed to unlock SP liquidity in many way. Existing
                storage power is tokenized as NFT which can be collateralized,
                be sold. SP also can raise FIL to build new power.
              </p>
            </div>
          </div>

          <h4 className={styles.subtitle}>What we offer to Storage Provider</h4>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            <div className="col">
              <div
                className={classNames(
                  'card h-100 border-0 rounded-0',
                  styles.bg,
                )}
              >
                <div className="card-body">
                  <p className="mb-5">
                    <IconBorrow />
                  </p>
                  <h4 className={classNames(styles.label, 'fw-600')}>
                    Borrowing
                  </h4>
                  <p className="mb-0 text-gray">
                    Collateralize existing storage power and borrow more FIL to
                    grow fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={classNames(
                  'card h-100 border-0 rounded-0',
                  styles.bg,
                )}
              >
                <div className="card-body">
                  <p className="mb-5">
                    <IconRaise />
                  </p>
                  <h4 className={classNames(styles.label, 'fw-600')}>
                    Raising
                  </h4>
                  <p className="mb-0 text-gray">
                    Launch a FIL raising program to build new power and share
                    the rewards with shareholders.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={classNames(
                  'card h-100 border-0 rounded-0',
                  styles.bg,
                )}
              >
                <div className="card-body">
                  <p className="mb-5">
                    <IconToken />
                  </p>
                  <h4 className={classNames(styles.label, 'fw-600')}>
                    Tokenizing
                  </h4>
                  <p className="mb-0 text-gray">
                    Turning storage power into tradable NFTs and delegate FilFi
                    to distribute reward.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className={classNames(
                  'card h-100 border-0 rounded-0',
                  styles.bg,
                )}
              >
                <div className="card-body">
                  <p className="mb-5">
                    <IconBuild />
                  </p>
                  <h4 className={classNames(styles.label, 'fw-600')}>
                    Building
                  </h4>
                  <p className="mb-0 text-gray">
                    Help SP to build new power, providing technical service with
                    sealing, FIL+ DataCap, data center, etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(styles.section, styles.bg)}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-10">
              <h3 className={styles.title}>Calling Storage Provider</h3>
              <p className={classNames(styles.label, 'text-gray')}>
                Contact community to learn how FilFi can help you grow faster.
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-2">
              <div className="d-flex d-md-block text-end mt-3">
                <a
                  className="btn btn-primary btn-lg flex-grow-1"
                  href="https://forms.gle/VW8M6A1RBcM5ofwb9"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(styles.section)}>
        <div className="container">
          <div className="row text-center mb-3 mb-md-4 mb-lg-5">
            <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
              <h3 className={styles.title}>
                Building business in the FilFi ecosystem
              </h3>
              <p className={classNames(styles.label, 'text-gray')}>
                The FilFi ecosystem has many opportunities to gain revenue for
                the builders who provide value to Filecoin network.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-md-4 g-lg-5">
            <div className="col">
              <div className="card h-100 border-0 text-center">
                <div className="card-img-top">
                  <Ecos1 className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4 className={classNames(styles.label, 'mb-2 fw-600')}>
                    Storage Provider
                  </h4>
                  <p className="mb-0 text-gray">
                    Increase liquidity leverage for fast growth
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 text-center">
                <div className="card-img-top">
                  <Ecos2 className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4 className={classNames(styles.label, 'mb-2 fw-600')}>
                    SP Foundry
                  </h4>
                  <p className="mb-0 text-gray">
                    Providing solutions for SP to expand power and make profit
                    from the service.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 text-center">
                <div className="card-img-top">
                  <Ecos3 className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4 className={classNames(styles.label, 'mb-2 fw-600')}>
                    Liquidity Fund
                  </h4>
                  <p className="mb-0 text-gray">
                    Provide liquidity to pools, or acquire assets awaiting
                    vesting, or provide bridge loans in SP transfers
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 text-center">
                <div className="card-img-top">
                  <Ecos4 className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4 className={classNames(styles.label, 'mb-2 fw-600')}>
                    Service Provider
                  </h4>
                  <p className="mb-0 text-gray">
                    Share your resource to SP, such as sealing power, FIL+
                    DataCap, green data center, etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 text-center">
                <div className="card-img-top">
                  <Ecos5 className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4 className={classNames(styles.label, 'mb-2 fw-600')}>
                    Developer
                  </h4>
                  <p className="mb-0 text-gray">
                    Any expansion of the ecosystem will be supported by applying
                    for grants.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100 border-0 text-center">
                <div className="card-img-top">
                  <Ecos6 className="img-fluid" />
                </div>
                <div className="card-body">
                  <h4 className={classNames(styles.label, 'mb-2 fw-600')}>
                    Join DAO
                  </h4>
                  <p className="mb-0 text-gray">
                    Participation in governance will be incentivized.
                    Stakeholders are benefit from the long-term growth of FilFi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames(styles.section, styles.bg)}>
        <div className="container">
          <div className="text-center mb-5">
            <h3 className={classNames(styles.label, 'fw-500')}>Powered by</h3>
          </div>

          <div className="d-flex flex-wrap align-items-center justify-content-center gap-4 gap-lg-5">
            <img src={require('./imgs/partner-1.png')} />
            <img src={require('./imgs/partner-2.png')} />
            <img src={require('./imgs/partner-3.png')} />
            <img src={require('./imgs/partner-4.png')} />
            <img src={require('./imgs/partner-5.png')} />
            <img src={require('./imgs/partner-6.png')} />
          </div>
        </div>
      </section>

      <section className={classNames(styles.section)}>
        <div className="container">
          <div className="row text-center mb-3 mb-md-4 mb-lg-5">
            <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
              <h3 className={styles.title}>FilFi DAO</h3>
              <p className={classNames(styles.label, 'text-gray')}>
                The FilFi DAO is a Decentralized Autonomous Organization that
                decides on the key parameters of FilFi protocol through the
                voting power of governance token (FFI).
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
            <div className="col">
              <div className="h-100 text-center">
                <p className="mb-3">
                  <Dao1 />
                </p>

                <h4 className={classNames(styles.label, 'fw-600')}>
                  Governance process
                </h4>
                <p className="text-gray">
                  Daily operations are decided by the governance committee, and
                  major decisions should be initiated by members for on-chain
                  voting.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="h-100 text-center">
                <p className="mb-3">
                  <Dao2 />
                </p>

                <h4 className={classNames(styles.label, 'fw-600')}>
                  Validator
                </h4>
                <p className="text-gray">
                  Stake on the stable SP to win FFI reward and loss in case of
                  SP default. Anyone holding FFI tokens can become a Validator.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="h-100 text-center">
                <p className="mb-3">
                  <Dao3 />
                </p>

                <h4 className={classNames(styles.label, 'fw-600')}>
                  Technology Ambassador
                </h4>
                <p className="text-gray">
                  Measure what matters with Untitled’s easy-to-use reports. You
                  can filter, export, and drilldown on the data in a couple
                  clicks.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="h-100 text-center">
                <p className="mb-3">
                  <Dao4 />
                </p>

                <h4 className={classNames(styles.label, 'fw-600')}>
                  Community Ambassador
                </h4>
                <p className="text-gray">
                  Responsible for ecological construction and publicity.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="h-100 text-center">
                <p className="mb-3">
                  <Dao5 />
                </p>

                <h4 className={classNames(styles.label, 'fw-600')}>Voting</h4>
                <p className="text-gray">
                  One token represents one vote, and members use the proposal
                  tool to indicate their preferences and attitudes.
                </p>
              </div>
            </div>
            <div className="col">
              <div className="h-100 text-center">
                <p className="mb-3">
                  <Dao6 />
                </p>

                <h4 className={classNames(styles.label, 'fw-600')}>
                  FilFi Fundation
                </h4>
                <p className="text-gray">
                  Supports ecosystem projects, develops more community members
                  and promotes the implementation of community governance
                  processes on the ground.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="border-bottom"></div>
      </div>

      <section className={classNames(styles.section)}>
        <div className="container">
          <div className="text-center mb-5">
            <h3 className={styles.title}>RoadMap</h3>
          </div>

          <Steps
            current={2}
            items={[
              {
                title: 'December 2022',
                desc: 'Startup two projects covered staking and mining respectively',
              },
              { title: 'March 2023', desc: 'Merge two projects to FilFi' },
              { title: 'April 2023', desc: 'Launch FilFi for miner' },
              { title: 'Jun 2023', desc: 'Open to staker and lender' },
              { title: 'August 2023', desc: 'Completed two rounds of audits' },
              {
                title: 'December 2023',
                desc: 'Support for storage power trading',
              },
            ]}
          />
        </div>
      </section>

      <section
        id="community"
        className={classNames(styles.section, styles.bg, styles.community)}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h3 className={styles.title}>Join our community</h3>
            <p className={classNames(styles.label, 'text-gray')}>
              Learn more about FilFi, chat with us and have your say in the
              future of the FilFi ecosystem
            </p>
          </div>

          <div className="row g-0">
            <div className="col-12 col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
              <div className="row row-cols-1 row-cols-md-2 g-3 g-lg-4">
                <div className="col">
                  <a
                    className="card text-reset"
                    style={
                      {
                        '--bs-card-bg': 'var(--color-gray-700)',
                        '--bs-card-color': '#fff',
                      } as any
                    }
                    href="https://discord.gg/tht348jhuy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-body d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
                      <div className="flex-shrink-0 mb-2 mb-lg-0">
                        <img
                          className="media-icon"
                          src={require('./imgs/icon-discord.png')}
                          alt="Discard"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <h5 className={classNames(styles.label, 'mb-2 fw-600')}>
                          Discord
                        </h5>
                        <p className="d-none d-lg- fw-500block mb-0">
                          Join the community
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a
                    className="card text-reset"
                    href="https://t.me/+eDw3nnwV7xQwZGM9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-body d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
                      <div className="flex-shrink-0 mb-2 mb-lg-0">
                        <img
                          className="media-icon"
                          src={require('./imgs/icon-telegram.png')}
                          alt="Telegram"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <h5 className={classNames(styles.label, 'mb-2 fw-600')}>
                          Telegram
                        </h5>
                        <p className="d-none d-lg-block mb-0 fw-500 text-gray">
                          Join Chat
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a
                    className="card text-reset"
                    href="https://github.com/filfi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-body d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
                      <div className="flex-shrink-0 mb-2 mb-lg-0">
                        <img
                          className="media-icon"
                          src={require('./imgs/icon-github.png')}
                          alt="Github"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <h5 className={classNames(styles.label, 'mb-2 fw-600')}>
                          Github
                        </h5>
                        <p className="d-none d-lg-block mb-0 fw-500 text-gray">
                          Contribute
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a
                    className="card text-reset"
                    href="https://twitter.com/filfi_io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-body d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
                      <div className="flex-shrink-0 mb-2 mb-lg-0">
                        <img
                          className="media-icon"
                          src={require('./imgs/icon-twitter.png')}
                          alt="Twitter"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <h5 className={classNames(styles.label, 'mb-2 fw-600')}>
                          Twitter
                        </h5>
                        <p className="d-none d-lg-block mb-0 fw-500 text-gray">
                          Follow @FilFi
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a className="card text-reset" href="mailto:dao@filfi.com">
                    <div className="card-body d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
                      <div className="flex-shrink-0 mb-2 mb-lg-0">
                        <img
                          className="media-icon"
                          src={require('./imgs/icon-email.png')}
                          alt="E-Mail"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <h5 className={classNames(styles.label, 'mb-2 fw-600')}>
                          Contact us
                        </h5>
                        <p className="d-none d-lg-block mb-0 fw-500 text-gray">
                          dao@filfi.com
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a
                    className="card text-reset"
                    href="https://www.facebook.com/profile.php?id=100090036369008"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-body d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
                      <div className="flex-shrink-0 mb-2 mb-lg-0">
                        <img
                          className="media-icon"
                          src={require('./imgs/icon-facebook.png')}
                          alt="Facebook"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <h5 className={classNames(styles.label, 'mb-2 fw-600')}>
                          Facebook
                        </h5>
                        <p className="d-none d-lg-block mb-0 fw-500 text-gray">
                          Follow @FilFi
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a
                    className="card text-reset"
                    href="https://medium.com/@filfi.io/lists"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-body d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
                      <div className="flex-shrink-0 mb-2 mb-lg-0">
                        <img
                          className="media-icon"
                          src={require('./imgs/icon-medium.png')}
                          alt="Medium"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <h5 className={classNames(styles.label, 'mb-2 fw-600')}>
                          Medium
                        </h5>
                        <p className="d-none d-lg-block mb-0 fw-500 text-gray">
                          Read @FilFi
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a
                    className="card text-reset"
                    href="https://www.youtube.com/channel/UCKKUV77gYphvvBrxd0FFaqQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="card-body d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
                      <div className="flex-shrink-0 mb-2 mb-lg-0">
                        <img
                          className="media-icon"
                          src={require('./imgs/icon-youtube.png')}
                          alt="Youtube"
                        />
                      </div>
                      <div className="flex-grow-1 ms-lg-4">
                        <h5 className={classNames(styles.label, 'mb-2 fw-600')}>
                          Youtube
                        </h5>
                        <p className="d-none d-lg-block mb-0 fw-500 text-gray">
                          Follow @FilFi
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className={classNames(styles.section)}>
        <div className="container">
          <div className="text-center mb-5">
            <h3 className={styles.title}>Frequently asked questions</h3>
            <p className={styles.label}>
              Everything you need to know about the FilFi protocal
            </p>
          </div>

          <div className="row mb-5">
            <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
              <div className={classNames('accordion accordion-flush', styles.accordion)} id="accordionQS">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#what-is-filfi" aria-expanded="false" aria-controls="what-is-filfi">
                      What is FilFi?
                    </button>
                  </h2>
                  <div id="what-is-filfi" className="accordion-collapse collapse" aria-labelledby="What is FilFi" data-bs-parent="#accordionQS">
                    <div className="accordion-body">
                      <p className="mb-0 text-gray">I don&apos;t know!</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#whats-the-apr-for-staker" aria-expanded="false" aria-controls="whats-the-apr-for-staker">
                      What’s the APR for staker?
                    </button>
                  </h2>
                  <div id="whats-the-apr-for-staker" className="accordion-collapse collapse" aria-labelledby="What's the APR for staker" data-bs-parent="#accordionQS">
                    <div className="accordion-body">
                      <p className="mb-0 text-gray">I don&apos;t know!</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#how-safe-is-staking-pool" aria-expanded="false" aria-controls="how-safe-is-staking-pool">
                      How safe is staking pool?
                    </button>
                  </h2>
                  <div id="how-safe-is-staking-pool" className="accordion-collapse collapse" aria-labelledby="How safe is staking pool" data-bs-parent="#accordionQS">
                    <div className="accordion-body">
                      <p className="mb-0 text-gray">I don&apos;t know!</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#will-not-be-withdraw-when-lack-of-liquidity" aria-expanded="false" aria-controls="will-not-be-withdraw-when-lack-of-liquidity">
                      Will not be withdraw when lack of liquidity?
                    </button>
                  </h2>
                  <div id="will-not-be-withdraw-when-lack-of-liquidity" className="accordion-collapse collapse" aria-labelledby="Will not be withdraw when lack of liquidity" data-bs-parent="#accordionQS">
                    <div className="accordion-body">
                      <p className="mb-0 text-gray">I don&apos;t know!</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#how-about-the-cost" aria-expanded="false" aria-controls="how-about-the-cost">
                      How about the cost?
                    </button>
                  </h2>
                  <div id="how-about-the-cost" className="accordion-collapse collapse" aria-labelledby="How about the cost" data-bs-parent="#accordionQS">
                    <div className="accordion-body">
                      <p className="mb-0 text-gray">I don&apos;t know!</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#how-do-i-change-my-account-email" aria-expanded="false" aria-controls="how-do-i-change-my-account-email">
                      How do I change my account email?
                    </button>
                  </h2>
                  <div id="how-do-i-change-my-account-email" className="accordion-collapse collapse" aria-labelledby="How do I change my account email" data-bs-parent="#accordionQS">
                    <div className="accordion-body">
                      <p className="mb-0 text-gray">I don&apos;t know!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classNames('card border-0', styles.bg)}>
            <div className="card-body text-center">
              <h4 className={classNames(styles.label, 'fw-600 mb-1')}>
                Still have questions?
              </h4>
              <p className="text-gray mb-4">
                Can’t find the answer you’re looking for? Please join community
                ask anything.
              </p>

              <p className="mb-0">
                <button
                  className="btn btn-primary btn-lg"
                  type="button"
                  onClick={goto}
                >
                  Join Community
                </button>
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

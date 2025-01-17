import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    description: <>Use the same dependency injection patterns you're used to with Nest.</>,
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Worry less about how to wire up your commander application and more about what the logic of
        the command should be!
      </>
    ),
  },
  {
    title: 'Re-Use your Providers',
    description: (
      <>
        Because you're able to make use of Nest's DI patterns, you can re-use your existing
        providers without having to worry about re-writing them from scratch.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const GetStarted = ({ getStartedStyle }) => {
  return (
    <Link
      className={clsx('button button--outline button--secondary button--lg', getStartedStyle)}
      to={useBaseUrl('docs/')}
    >
      Get Started
    </Link>
  );
};

const Header = ({ siteConfig }) => {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img
          className={styles.featureImage}
          src="img/nest-commander-final.svg"
          alt="nest-commander logo"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <GetStarted getStartedStyle={styles.getStarted} />
        </div>
      </div>
    </header>
  );
};

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description="The documentation site for nest-commander">
      <Header siteConfig={siteConfig} />
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

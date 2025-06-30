import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Get Started Quickly',
    Svg: require('@site/static/img/speedometer-svgrepo-com.svg').default, 
    description: (
      <>
        Learn how to access the ACE HPC cluster, connect via SSH, and submit your first job in minutes. Check out our <a href="/docs/getting-started/accounts">step-by-step guide</a>.
      </>
    ),
  },
  {
    title: 'Unleash Computing Power',
    Svg: require('@site/static/img/settings-gear-svgrepo-com.svg').default,
    description: (
      <>
        Leverage our high-performance nodes, GPUs, and vast storage for your bioinformatics workflows. Explore the <a href="/docs/hardware/overview">cluster specs</a>.
      </>
    ),
  },
  {
    title: 'Analyze with Ease',
    Svg: require('@site/static/img/analytics-computer-svgrepo-com.svg').default,
    description: (
      <>
        Use pre-installed tools like BLAST and R, or install your own software to process genomic data efficiently. See the <a href="/docs/software/installed">software list</a>.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

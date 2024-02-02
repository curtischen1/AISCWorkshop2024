import Head from 'next/head';
import styles from '../../styles/MLProjects.module.scss';
import Image from 'next/image';
import Graph from './_components/graph';
import Models from './_components/models';
import Analysis from './_components/analysis';

export default function MLProjects() {
  return (
    <div className={styles.container}>
      <div className={styles.container_inside}>
        <div className={styles.container_inside_window}>
          <div className={styles.container_inside_window_Card}>
            <Graph />
          </div>
          <div className={styles.container_inside_window_Card} >
            <Models />
          </div>
          <div className={styles.container_inside_window_Card}>
            <Analysis />
          </div>
          <div className={styles.container_inside_window_Card} />
        </div>
        <div className={styles.container_inside_animals}>
          <Image src="/MLProjects/cow.svg" alt="cow" width={100} height={100} />
          <Image src="/MLProjects/bunny.svg" alt="bunny" width={100} height={100} />
          <Image src="/MLProjects/duck.svg" alt="duck" width={100} height={100} />
          <Image src="/MLProjects/frog.svg" alt="frog" width={100} height={100} />
        </div>
      </div>
    </div>
  );
}

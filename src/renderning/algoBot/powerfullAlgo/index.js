import React from 'react'
import styles from './powerfullAlgo.module.scss';
import CommonButton from '@/components/commonButton';
const Icon10 = '/assets/icons/icon10.svg';
export default function PowerfullAlgo() {
  return (
    <div className={styles.powerfullAlgoAlignment}>
      <div className="container">
        <div className={styles.centerbutton}>
            <CommonButton text="Powerful Algorithms"/>
        </div>
        <h2>
        Simply Connect Your Trading with Powerful Algorithms
        </h2>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Icon10} alt="Icon10"/>
                </div>
                <h3>Best trading strategies</h3>
                <p>
                When it comes to trading strategies, there are thousands of trade systems are available on the internet and they all work on specific 
                market conditions.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Icon10} alt="Icon10"/>
                </div>
                <h3>Best trading strategies</h3>
                <p>
                When it comes to trading strategies, there are thousands of trade systems are available on the internet and they all work on specific 
                market conditions.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Icon10} alt="Icon10"/>
                </div>
                <h3>Best trading strategies</h3>
                <p>
                When it comes to trading strategies, there are thousands of trade systems are available on the internet and they all work on specific 
                market conditions.
                </p>
            </div>
            <div className={styles.griditems}>
                <div className={styles.icon}>
                    <img src={Icon10} alt="Icon10"/>
                </div>
                <h3>Best trading strategies</h3>
                <p>
                When it comes to trading strategies, there are thousands of trade systems are available on the internet and they all work on specific 
                market conditions.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

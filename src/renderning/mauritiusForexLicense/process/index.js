import React from 'react'
import styles from './process.module.scss';
import CommonButton from '@/components/commonButton';
const GlobalIcon = '/assets/icons/global.svg';
export default function Process() {
  return (
    <div className={styles.processAlignment}>
      <div className="container">
        <div className={styles.btnCenteralignment}>
            <CommonButton text="Process"/>
        </div>
        <div className={styles.title}>
            <h2>Forex in Mauritius Easy process to obtain Forex Broker License</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.iconAlignment}>
                    <img src={GlobalIcon} alt="GlobalIcon"/>
                </div>
                <h3>Register a Global Business Company in Mauritius</h3>
                <h4>01</h4>
            </div>
            <div className={styles.griditems}>
                <div className={styles.iconAlignment}>
                    <img src={GlobalIcon} alt="GlobalIcon"/>
                </div>
                <h3>Apply for Mauritius Forex Broker License</h3>
                <h4>02</h4>
            </div>
            <div className={styles.griditems}>
                <div className={styles.iconAlignment}>
                    <img src={GlobalIcon} alt="GlobalIcon"/>
                </div>
                <h3>Meet the GBC – I requirements set by FSC</h3>
                <h4>03</h4>
            </div>
            <div className={styles.griditems}>
                <div className={styles.iconAlignment}>
                    <img src={GlobalIcon} alt="GlobalIcon"/>
                </div>
                <h3>Start Forex Broking Business in the worldus</h3>
                <h4>04</h4>
            </div>
            
            <div className={styles.griditems}>
                <p>
                Time Frame
                </p>
                <span>3 – 4 Weeks</span>
            </div>
        </div>
      </div>
    </div>
  )
}

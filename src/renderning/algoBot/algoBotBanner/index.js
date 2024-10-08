import React from 'react'
import styles from './algoBotBanner.module.scss';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
const Banner1 = '/assets/images/banner5.png';

export default function AlgoBotBanner() {
    return (
        <>
        <div className="container-lg">
            <div className={styles.algoBotBanner}>
                <div className={styles.centerButton}>
                <CommonButton text="Forex CRM"/>
                </div>
                <h1>
                Fast, Smart, and Tailored Algo Trading
                </h1>
                <p>Rejoice FX’s Algo Trading empowers you to automate strategies with precision, transforming your trading into a seamless experience.</p>
            </div>
        </div>
        <div className={styles.bannerCenterAlignment}>
      <div className={styles.box}>
        <Image src={Banner1} layout="fill" />
      </div>
    </div>
        </>
    )
}

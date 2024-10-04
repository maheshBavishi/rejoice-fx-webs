import React from 'react'
import styles from './aboutus.module.scss';
import WaveIcon from '@/components/icons/waveIcon';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
const AboutImage = '/assets/images/about.png'
export default function Aboutus() {
    return (
        <div className={styles.aboutusSctionAlignment}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                      <CommonButton text="About Us" />
                      <h2>
                      Building Your Forex Business from the Ground Up
                      </h2>
                      <p>
                      Rejoicefx is a global forex technology provider, offering everything you need to establish and grow a successful forex brokerage. From company formation to licensing, and beyond, we are your trusted partner in creating world-class forex brokerage solutions. With extensive experience in forex technology, Rejoicefx provides seamless access to retail forex trading markets and 
                      cutting-edge tools.
                      </p>
                      <p>
                      At Rejoicefx, we deliver comprehensive forex technology solutions including company formation, broker licensing, web development, trader’s room setup, MT4 White Label, and CRM integration to help your brokerage thrive in the 
                      competitive market.
                      </p>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.image}>
                            <Image src={AboutImage} layout="fill"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

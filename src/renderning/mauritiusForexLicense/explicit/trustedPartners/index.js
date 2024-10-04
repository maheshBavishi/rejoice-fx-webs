import React from 'react'
import styles from './trustedPartners.module.scss';
import Marquee from "react-fast-marquee";
const Icon1 = '/assets/icons/p1.svg';

export default function TrustedPartners() {
  return (
    <div className="container-lg">
    <div className={styles.trustedPartners}>
      <h2>Trusted Partners</h2>
      <Marquee>
        {
            [...Array(20)].map(()=> {
                return(
                    <img src={Icon1} alt="Icon1"/>
                )
            })
        }
    </Marquee>
    </div>
    </div>
  )
}

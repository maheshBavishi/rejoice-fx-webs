import React from 'react'
import styles from './requirementsSection.module.scss';
import CommonButton from '@/components/commonButton';
import Image from 'next/image';
import SqureIcon from '@/components/icons/squreIcon';
const CardImage = '/assets/images/img6.png';
export default function RequirementsSection() {
  return (
    <div className={styles.requirementsSection}>
        <div className="container-lg">
            <div className={styles.btnCenter}>
                <CommonButton text="Minimum Paid-up Capital Required"/>
            </div>
            <div className={styles.title}>
                <h2>Mauritius Forex License Requirements</h2>
            </div>
            <div className={styles.box}>
                <div className="container">
                    <div className={styles.grid}>
                        <div>
                            <div className={styles.firstText}>
                                <h3>MUR 700,000</h3>
                                <p>
                                License Renewal Cost
                                </p>
                                <p>
                                <span>Note:</span> The company must be registered in Mauritius and have a registered office in Mauritius. Starting forex business in Mauritius is low cost, as there are strict confidentiality laws and 
                                flexible incorporation regulations.
                                </p>
                            </div>
                            <div className={styles.document}>
                                <h3>Documents Required :</h3>
                                <div className={styles.twoCol}>
                                    <div className={styles.twoColItems}>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Notarized Passport copy (Should be notarized in English - 2 copies)</span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Last 3 months Utility Bill (Should be notarized in English - 2 copies with original)</span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Director/Shareholder's Bank Reference Letter</span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Director/Shareholder's CV</span>
                                        </div>
                                    </div>
                                    <div className={styles.twoColItems}>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Formed and verified corporate documents</span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Certificate of Incumbency</span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>Bank Application Forms</span>
                                        </div>
                                        <div className={styles.iconText}>
                                            <SqureIcon/>
                                            <span>AML Procedures</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.img}>
                            <Image src={CardImage} layout="fill" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

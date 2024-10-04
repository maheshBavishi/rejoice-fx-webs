import React from 'react'
import styles from './overview.module.scss';
import CommonButton from '@/components/commonButton';
import Button from '@/components/button';
import RightLgArrow from '@/components/icons/rightLgArrow';
export default function Overview() {
    return (
        <div className={styles.overviewAlignment}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <CommonButton text="OVERVIEW" />
                        <h2>
                            Why Choose Mauritius Your Forex Brokerage?
                        </h2>
                        <p>
                            Rejoicefx offers a complete setup for establishing an unregulated Forex Company in St. Vincent and the Grenadines. While St. Vincent is an unregulated jurisdiction, we ensure your documents are prepared to allow smooth operation of your Forex brokerage. This makes St. Vincent an affordable and efficient solution for starting a Forex brokerage from
                            a broker’s perspective.
                        </p>
                        <p>
                            St. Vincent is recognized by the Organization for Economic Co-operation and Development (OECD) as a stable, independent, and
                            politically free island.
                        </p>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.box}>
                            <div className={styles.twoCol}>
                                <div className={styles.input}>
                                    <label>First Name</label>
                                    <input type="text" placeholder="Enter your first name" />
                                </div>
                                <div className={styles.input}>
                                    <label>Email Address</label>
                                    <input type="text" placeholder="Enter your email address" />
                                </div>
                                <div className={styles.input}>
                                    <label>Phone</label>
                                    <input type="text" placeholder="Enter your number" />
                                </div>
                                <div className={styles.input}>
                                    <label>Country</label>
                                    <select>
                                        <option>Country</option>
                                        <option>Country</option>
                                        <option>Country</option>
                                    </select>
                                </div>
                                <div className={styles.input}>
                                    <label>Message</label>
                                    <textarea placeholder="Type your message here..."></textarea>
                                </div>
                            </div>
                            <div className={styles.firstButton}>
                                <Button text="Get Started" icon={<RightLgArrow />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

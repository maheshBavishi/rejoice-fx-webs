import React from 'react'
import styles from './helpsection.module.scss';
import Button from '@/components/button';
import RightLgArrow from '@/components/icons/rightLgArrow';
export default function Helpsection() {
  return (
    <div className={styles.helpsectionAlignment}>
      <div className="container">
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <h2>We're Here to Help</h2>
                <p>
                Need assistance? Get in touch with our team for any queries about our services.
                </p>
            </div>
            <div className={styles.griditems}>
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
  )
}

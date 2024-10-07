import React ,  { useState }  from 'react'
import styles from './faqSection.module.scss';
import CommonButton from '@/components/commonButton';
import DownArrow from '@/components/icons/downArrow';
import classNames from 'classnames';
export default function FaqSection() {
    const [toogle , setToogle ] = useState(false);
    return (
        <div className={styles.faqSection}>
            <div className="container">
                <div className={styles.center}>
                    <CommonButton text="FAQ" />
                </div>
                <h2>
                    Frequently Asked Questions
                </h2>
                <div className={styles.mainBox}>
                    <div className={ classNames(styles.faq , toogle ? styles.toogle : '') }>
                        <div className={styles.faqHeader}>
                            <p>01. What is a Forex CRM?</p>
                            <div className={styles.icon} onClick={() => setToogle(!toogle)}>
                            <DownArrow/>
                            </div>
                        </div>
                        <div className={ classNames(styles.faqBody , toogle ? styles.show : styles.hide) }>
                            <p>
                                A Customer Relationship Management platform helps businesses manage everything related to their customers, from contact information and customer support inquiries to financial data 
                                and payment processing. 
                            </p>
                        </div>
                    </div>
                    <div className={ classNames(styles.faq) }>
                        <div className={styles.faqHeader}>
                            <p>02. What if I want to import the users from my previous solution?</p>
                            <div className={styles.icon} >
                            <DownArrow/>
                            </div>
                        </div>
                    </div>
                    <div className={ classNames(styles.faq) }>
                        <div className={styles.faqHeader}>
                            <p>03. After the purchase how can I familiarise myself with the product functionalities?</p>
                            <div className={styles.icon} >
                            <DownArrow/>
                            </div>
                        </div>
                    </div>
                    <div className={ classNames(styles.faq) }>
                        <div className={styles.faqHeader}>
                            <p>04. What if I need something extra development for my B2CORE solution?</p>
                            <div className={styles.icon} >
                            <DownArrow/>
                            </div>
                        </div>
                    </div>
                    <div className={ classNames(styles.faq) }>
                        <div className={styles.faqHeader}>
                            <p>05. How do I report any issues regarding the product?</p>
                            <div className={styles.icon} >
                            <DownArrow/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

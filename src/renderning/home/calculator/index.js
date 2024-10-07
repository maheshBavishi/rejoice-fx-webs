import React from 'react'
import styles from './calculator.module.scss';
import CommonButton from '@/components/commonButton';
import Slider from "react-slick";
import classNames from 'classnames';
import Button from '@/components/button';
const CardLogo = '/assets/icons/card-logo.svg';

export default function Calculator() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1.05,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 376,
                settings: {
                    slidesToShow: 1.05,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
        ]
    };
    return (
        <>
        <div className={styles.calculatorAlignment}>
            <div className="container">
                <div className={styles.btnCenter}>
                    <CommonButton text="Calculator" />
                </div>
                <div className={styles.title}>
                    <h2>
                        Forex Calculator
                    </h2>
                </div>
                <div className={styles.itemsAlignment}>
                    <div className={ classNames(styles.itemsActive , styles.items) }>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Compliance</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Logo</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Website</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>CRM & Trader's Room
                        </p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>CRM Mobile App</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Risk Management System</p>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.logoCenteralignment}>
                            <div className={styles.icons}>|</div>
                        </div>
                        <p>Liquidity</p>
                    </div>
                </div>
                <div className={styles.tradingPlatform}>
                    <h3>Trading Platform</h3>
                </div>
                <div className={styles.cardGrid}>
                    <div className={styles.cardbox}>
                        <div className={styles.cardHeaderalignment}>
                            <img src={CardLogo} alt="CardLogo" />
                            <input type="radio" />
                        </div>
                        <div className={styles.cardDetails}>
                            <h4>Mauritius Forex License</h4>
                            <p>30 Days</p>
                        </div>
                        <div className={styles.cardBottom}>
                            <span>Total Cost</span>
                            <p>$ 6,000.00</p>
                        </div>
                    </div>
                    <div className={styles.cardbox}>
                        <div className={styles.cardHeaderalignment}>
                            <img src={CardLogo} alt="CardLogo" />
                            <input type="radio" />
                        </div>
                        <div className={styles.cardDetails}>
                            <h4>St. Vincent Forex License</h4>
                            <p>30 Days</p>
                        </div>
                        <div className={styles.cardBottom}>
                            <span>Total Cost</span>
                            <p>$ 6,000.00</p>
                        </div>
                    </div>
                </div>
                <div className={styles.threeAlignment}>
                    <div className={styles.rightButton}>
                    <Button text="Back" outline={true}/>
                    </div>
                    <div className={styles.rightButton}>
                        <Button text="Skip" outline={true}/>
                        <Button text="Next"/>
                    </div>
                </div>
                <div className={styles.totalAmount}>
                    <p>Total Amount</p>
                    <span>$ 6,000.00</span>
                </div>
            </div>
        </div>
        <div className={styles.modalWrapper}></div>
        </>
    )
}

import React, { useState } from 'react'
import styles from './calculator.module.scss';
import CommonButton from '@/components/commonButton';
import Slider from "react-slick";
import classNames from 'classnames';
import Button from '@/components/button';
const CardLogo = '/assets/icons/card-logo.svg';

export default function Calculator() {

    const [currentStep, setCurrentStep] = useState(0);

    console.log("currentStepcurrentStepcurrentStep", currentStep);


    const handleNext = () => {
        setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    };

    const handleSkip = () => {
        setCurrentStep((prev) => (prev + 1 < steps.length ? prev + 1 : steps.length - 1));
    };

    const handlePrev = () => {
        setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const steps = [
        "Compliance",
        "Logo",
        "Website",
        "CRM & Trader's Room",
        "CRM Mobile App",
        "Risk Management System",
        "Liquidity"
    ]

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
                        {steps?.map((step, index) => {
                            return (
                                <div>
                                    <div
                                        className={classNames(
                                            styles.items,
                                            { [styles.itemsActive]: currentStep >= index } // Conditional active class
                                        )}
                                    >
                                        <div className={styles.logoCenteralignment}>
                                            <div className={styles.icons}>|</div>
                                        </div>
                                        <p>{step}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.tradingPlatform}>
                        <h3>Trading Platform</h3>
                    </div>
                    {currentStep === 0 ?
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
                                    <p>$ 75000</p>
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
                                    <p>$ 25000</p>
                                </div>
                            </div>
                        </div> : currentStep === 1 ? <div className={styles.cardGrid}>
                            <div className={styles.cardbox}>
                                <div className={styles.cardHeaderalignment}>
                                    <img src={CardLogo} alt="CardLogo" />
                                    <input type="radio" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h4>Standard Logo</h4>
                                    <p>5 Days</p>
                                </div>
                                <div className={styles.cardBottom}>
                                    <span>Total Cost</span>
                                    <p>$ 500</p>
                                </div>
                            </div>
                            <div className={styles.cardbox}>
                                <div className={styles.cardHeaderalignment}>
                                    <img src={CardLogo} alt="CardLogo" />
                                    <input type="radio" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h4>Premium Logo
                                    </h4>
                                    <p>10 Days</p>
                                </div>
                                <div className={styles.cardBottom}>
                                    <span>Total Cost</span>
                                    <p>$ 1000</p>
                                </div>
                            </div>
                        </div> : currentStep === 2 ? <div className={styles.cardGrid}>
                            <div className={styles.cardbox}>
                                <div className={styles.cardHeaderalignment}>
                                    <img src={CardLogo} alt="CardLogo" />
                                    <input type="radio" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h4>Standard Website
                                    </h4>
                                    <p>20-30 Days</p>
                                </div>
                                <div className={styles.cardBottom}>
                                    <span>Total Cost</span>
                                    <p>$ 1000</p>
                                </div>
                            </div>
                            <div className={styles.cardbox}>
                                <div className={styles.cardHeaderalignment}>
                                    <img src={CardLogo} alt="CardLogo" />
                                    <input type="radio" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h4>Premium Website
                                    </h4>
                                    <p>30-45 Days</p>
                                </div>
                                <div className={styles.cardBottom}>
                                    <span>Total Cost</span>
                                    <p>$ 2500</p>
                                </div>
                            </div>
                        </div> : currentStep === 3 ? <div className={styles.cardGrid}>
                            <div className={styles.cardbox}>
                                <div className={styles.cardHeaderalignment}>
                                    <img src={CardLogo} alt="CardLogo" />
                                    <input type="radio" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h4>Mauritius Forex License</h4> 
                                </div>
                                <div className={styles.cardBottom}>
                                 <div>
                                 <span>One Time Cost</span>
                                 <p>$ 5000</p>
                                 </div>
                                 <div>
                                 <span>Monthly</span>
                                 <p>$ 4000</p>
                                 </div>
                                </div>
                            </div>

                        </div> : currentStep === 4 ? <div className={styles.cardGrid}>
                            <div className={styles.cardbox}>
                                <div className={styles.cardHeaderalignment}>
                                    <img src={CardLogo} alt="CardLogo" />
                                    <input type="radio" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h4>Mauritius Forex License</h4>
                                </div>
                                <div className={styles.cardBottom}>
                                 <div>
                                 <span>One Time Cost</span>
                                 <p>$ 500</p>
                                 </div>
                                 <div>
                                 <span>Monthly</span>
                                 <p>$ 1000</p>
                                 </div>
                                </div>
                            </div>
                           
                        </div> : currentStep === 5 ? <div className={styles.cardGrid}>
                            <div className={styles.cardbox}>
                                <div className={styles.cardHeaderalignment}>
                                    <img src={CardLogo} alt="CardLogo" />
                                    <input type="radio" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h4> 
                                    RMS with 1 Manager</h4>
                                </div>
                                <div className={styles.cardBottom}>
                                    <span>Total Cost</span>
                                    <p>$ 500</p>
                                </div>
                            </div>
                            <div className={styles.cardbox}>
                                <div className={styles.cardHeaderalignment}>
                                    <img src={CardLogo} alt="CardLogo" />
                                    <input type="radio" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h4> 
                                    RMS with 2 Manager</h4>
                                    <p>30 Days</p>
                                </div>
                                <div className={styles.cardBottom}>
                                    <span>Total Cost</span>
                                    <p>$ 1000</p>
                                </div>
                            </div>
                        </div> : <div className={styles.cardGrid}>
                            <div className={styles.cardbox}>
                                <div className={styles.cardHeaderalignment}>
                                    <img src={CardLogo} alt="CardLogo" />
                                    <input type="radio" />
                                </div>
                                <div className={styles.cardDetails}>
                                    <h4> 
                                    Liquidity</h4>
                                </div>
                                <div className={styles.cardBottom}>
                                  <div>
                                  <span>One Time Cost
                                  </span>
                                  <p>Minimum deposit $20k</p>
                                  </div>
                                  <div>
                                  <span>Monthly
                                  </span>
                                  <p>$ 2000</p>
                                  </div>
                                </div>
                            </div>
                           
                        </div>}
                    <div className={styles.threeAlignment}>
                        <div className={styles.rightButton}>
                            <div onClick={handlePrev} disabled={currentStep === 0}>
                                <Button text="Back" outline={true} />
                            </div>
                        </div>
                        <div className={styles.rightButton}>
                            <div onClick={handleSkip} disabled={currentStep >= steps.length - 1}>
                                <Button text="Skip" outline={true} />
                            </div>
                            <div onClick={handleNext} disabled={currentStep === steps.length - 1}>
                                <Button text="Next" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.totalAmount}>
                        <p>Total Amount</p>
                        <div className={styles.totlRight}>
                        <span>$ 6,000.00</span>
                        <Button text="Proceed " outline={true} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.modalWrapper}></div> */}
        </>
    )
}

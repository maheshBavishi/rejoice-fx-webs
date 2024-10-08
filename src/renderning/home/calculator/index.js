import React, { useState } from 'react'
import styles from './calculator.module.scss';
import CommonButton from '@/components/commonButton';
import Slider from "react-slick";
import classNames from 'classnames';
import Button from '@/components/button';
import RightLgArrow from '@/components/icons/rightLgArrow';
const CardLogo = '/assets/icons/card-logo.svg';

export default function Calculator() {

    const [currentStep, setCurrentStep] = useState(0);
    const [modal, setModal] = useState(false);

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
                            <div onClick={() => setModal(!modal)}>
                                <Button text="Proceed " outline={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                modal && (
                    <div className={styles.modalWrapper}>
                        <div className={styles.modalMd}>
                            <div className={styles.modalClose}>
                                <div >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                                </div>
                            </div>
                            <div className={styles.modalbody}>
                                <h3>
                                    Send the Inquiry
                                </h3>
                                <p>
                                    We guarantee to get back to you within a business day.
                                </p>
                                <form action="mailto:yash@rejoicehub.com" method="post" enctype="text/plain">
                                    <div className={styles.twoCol}>
                                        <div className={styles.input}>
                                            <label>First Name</label>
                                            <input type="name" required placeholder="Enter your first name" />
                                        </div>
                                        <div className={styles.input}>
                                            <label>Email Address</label>
                                            <input type="email" required placeholder="Enter your email address" />
                                        </div>
                                        <div className={styles.input}>
                                            <label>Phone</label>
                                            <input type="number" required placeholder="Enter your number" />
                                        </div>
                                        <div className={styles.input}>
                                            <label>Country</label>
                                            <select>
                                                <option value="AF">Afghanistan</option>
                                                <option value="AL">Albania</option>
                                                <option value="DZ">Algeria</option>
                                                <option value="AD">Andorra</option>
                                                <option value="AO">Angola</option>
                                                <option value="AG">Antigua and Barbuda</option>
                                                <option value="AR">Argentina</option>
                                                <option value="AM">Armenia</option>
                                                <option value="AU">Australia</option>
                                                <option value="AT">Austria</option>
                                                <option value="AZ">Azerbaijan</option>
                                                <option value="BS">Bahamas</option>
                                                <option value="BH">Bahrain</option>
                                                <option value="BD">Bangladesh</option>
                                                <option value="BB">Barbados</option>
                                                <option value="BY">Belarus</option>
                                                <option value="BE">Belgium</option>
                                                <option value="BZ">Belize</option>
                                                <option value="BJ">Benin</option>
                                                <option value="BT">Bhutan</option>
                                                <option value="BO">Bolivia</option>
                                                <option value="BA">Bosnia and Herzegovina</option>
                                                <option value="BW">Botswana</option>
                                                <option value="BR">Brazil</option>
                                                <option value="BN">Brunei</option>
                                                <option value="BG">Bulgaria</option>
                                                <option value="BF">Burkina Faso</option>
                                                <option value="BI">Burundi</option>
                                                <option value="CV">Cabo Verde</option>
                                                <option value="KH">Cambodia</option>
                                                <option value="CM">Cameroon</option>
                                                <option value="CA">Canada</option>
                                                <option value="CF">Central African Republic</option>
                                                <option value="TD">Chad</option>
                                                <option value="CL">Chile</option>
                                                <option value="CN">China</option>
                                                <option value="CO">Colombia</option>
                                                <option value="KM">Comoros</option>
                                                <option value="CG">Congo</option>
                                                <option value="CD">Congo (DRC)</option>
                                                <option value="CR">Costa Rica</option>
                                                <option value="CI">Côte d'Ivoire</option>
                                                <option value="HR">Croatia</option>
                                                <option value="CU">Cuba</option>
                                                <option value="CY">Cyprus</option>
                                                <option value="CZ">Czech Republic</option>
                                                <option value="DK">Denmark</option>
                                                <option value="DJ">Djibouti</option>
                                                <option value="DM">Dominica</option>
                                                <option value="DO">Dominican Republic</option>
                                                <option value="EC">Ecuador</option>
                                                <option value="EG">Egypt</option>
                                                <option value="SV">El Salvador</option>
                                                <option value="GQ">Equatorial Guinea</option>
                                                <option value="ER">Eritrea</option>
                                                <option value="EE">Estonia</option>
                                                <option value="SZ">Eswatini</option>
                                                <option value="ET">Ethiopia</option>
                                                <option value="FJ">Fiji</option>
                                                <option value="FI">Finland</option>
                                                <option value="FR">France</option>
                                                <option value="GA">Gabon</option>
                                                <option value="GM">Gambia</option>
                                                <option value="GE">Georgia</option>
                                                <option value="DE">Germany</option>
                                                <option value="GH">Ghana</option>
                                                <option value="GR">Greece</option>
                                                <option value="GD">Grenada</option>
                                                <option value="GT">Guatemala</option>
                                                <option value="GN">Guinea</option>
                                                <option value="GW">Guinea-Bissau</option>
                                                <option value="GY">Guyana</option>
                                                <option value="HT">Haiti</option>
                                                <option value="HN">Honduras</option>
                                                <option value="HU">Hungary</option>
                                                <option value="IS">Iceland</option>
                                                <option value="IN">India</option>
                                                <option value="ID">Indonesia</option>
                                                <option value="IR">Iran</option>
                                                <option value="IQ">Iraq</option>
                                                <option value="IE">Ireland</option>
                                                <option value="IL">Israel</option>
                                                <option value="IT">Italy</option>
                                                <option value="JM">Jamaica</option>
                                                <option value="JP">Japan</option>
                                                <option value="JO">Jordan</option>
                                                <option value="KZ">Kazakhstan</option>
                                                <option value="KE">Kenya</option>
                                                <option value="KI">Kiribati</option>
                                                <option value="KP">North Korea</option>
                                                <option value="KR">South Korea</option>
                                                <option value="KW">Kuwait</option>
                                                <option value="KG">Kyrgyzstan</option>
                                                <option value="LA">Laos</option>
                                                <option value="LV">Latvia</option>
                                                <option value="LB">Lebanon</option>
                                                <option value="LS">Lesotho</option>
                                                <option value="LR">Liberia</option>
                                                <option value="LY">Libya</option>
                                                <option value="LI">Liechtenstein</option>
                                                <option value="LT">Lithuania</option>
                                                <option value="LU">Luxembourg</option>
                                                <option value="MG">Madagascar</option>
                                                <option value="MW">Malawi</option>
                                                <option value="MY">Malaysia</option>
                                                <option value="MV">Maldives</option>
                                                <option value="ML">Mali</option>
                                                <option value="MT">Malta</option>
                                                <option value="MH">Marshall Islands</option>
                                                <option value="MR">Mauritania</option>
                                                <option value="MU">Mauritius</option>
                                                <option value="MX">Mexico</option>
                                                <option value="FM">Micronesia</option>
                                                <option value="MD">Moldova</option>
                                                <option value="MC">Monaco</option>
                                                <option value="MN">Mongolia</option>
                                                <option value="ME">Montenegro</option>
                                                <option value="MA">Morocco</option>
                                                <option value="MZ">Mozambique</option>
                                                <option value="MM">Myanmar</option>
                                                <option value="NA">Namibia</option>
                                                <option value="NR">Nauru</option>
                                                <option value="NP">Nepal</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="NZ">New Zealand</option>
                                                <option value="NI">Nicaragua</option>
                                                <option value="NE">Niger</option>
                                                <option value="NG">Nigeria</option>
                                                <option value="MK">North Macedonia</option>
                                                <option value="NO">Norway</option>
                                                <option value="OM">Oman</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="PW">Palau</option>
                                                <option value="PA">Panama</option>
                                                <option value="PG">Papua New Guinea</option>
                                                <option value="PY">Paraguay</option>
                                                <option value="PE">Peru</option>
                                                <option value="PH">Philippines</option>
                                                <option value="PL">Poland</option>
                                                <option value="PT">Portugal</option>
                                                <option value="QA">Qatar</option>
                                                <option value="RO">Romania</option>
                                                <option value="RU">Russia</option>
                                                <option value="RW">Rwanda</option>
                                                <option value="KN">Saint Kitts and Nevis</option>
                                                <option value="LC">Saint Lucia</option>
                                                <option value="VC">Saint Vincent and the Grenadines</option>
                                                <option value="WS">Samoa</option>
                                                <option value="SM">San Marino</option>
                                                <option value="ST">São Tomé and Príncipe</option>
                                                <option value="SA">Saudi Arabia</option>
                                                <option value="SN">Senegal</option>
                                                <option value="RS">Serbia</option>
                                                <option value="SC">Seychelles</option>
                                                <option value="SL">Sierra Leone</option>
                                                <option value="SG">Singapore</option>
                                                <option value="SK">Slovakia</option>
                                                <option value="SI">Slovenia</option>
                                                <option value="SB">Solomon Islands</option>
                                                <option value="SO">Somalia</option>
                                                <option value="ZA">South Africa</option>
                                                <option value="SS">South Sudan</option>
                                                <option value="ES">Spain</option>
                                                <option value="LK">Sri Lanka</option>
                                                <option value="SD">Sudan</option>
                                            </select>
                                        </div>
                                        <div className={styles.input}>
                                            <label>Message</label>
                                            <textarea required placeholder="Type your message here..."></textarea>
                                        </div>
                                    </div>
                                    <div className={styles.firstButton}>
                                        <Button text="Get Started" value="send" icon={<RightLgArrow />} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

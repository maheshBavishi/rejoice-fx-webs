import React from 'react'
import styles from './herobanner.module.scss';
import Button from '@/components/button';
import WaveIcon from '@/components/icons/waveIcon';
import Slider from "react-slick";
import RightLgArrow from '@/components/icons/rightLgArrow';
const Banner1 = '/assets/images/banner1.png';
import RightBlackLg from '@/components/icons/rightBlackLg';
import Image from 'next/image';
import Link from 'next/link';

export default function Herobanner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  
  };
  return (
    <>
    <div className="container-lg">
      <div className={styles.herobannerDesign}>
        <div className={styles.forxButtonAlignment}>
          <button>
            <WaveIcon />
            Forex Trading Simplified
          </button>
        </div>

        <Slider {...settings}>
          <div className={styles.sliderText}>
            <h2>
            Optimize Operations with Our CRM
            </h2>
            <p>
            Streamline your client management and enhance efficiency with our tailored CRM solutions. Designed specifically for Forex brokers to help you stay 
            organized and boost performance.
            </p>
          </div>
          <div className={styles.sliderText}>
            <h2>
            Obtain Your Forex Broker License
            </h2>
            <p>
            Easily navigate the licensing process with our expert guidance. Start your Forex brokerage in Mauritius 
            or St. Lucia today.
            </p>
          </div>
          <div className={styles.sliderText}>
            <h2>
            Trade Better, Smarter, Faster.
            </h2>
            <p>
            Leverage AI-powered tools to automate your trading strategies and maximize returns. Experience faster execution and smarter 
            decision-making with Rejoicefx.
            </p>
          </div>
         
        </Slider>
        <div className={styles.twoButtonAlignment}>
          <div className={styles.firstButton}>
          <Link href="/contact-us">
          <Button text="Get Started" icon={<RightLgArrow/>}/>
          </Link>
          </div>
          <div className={styles.secButton}>
          <Button text="Try For Free" icon={<RightBlackLg/>} outline={true}/>
          </div>
        </div>
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

import React from 'react'
import styles from './header.module.scss';
import Image from 'next/image';
import DownArrow from '../icons/downArrow';
import Button from '../button';
import RightLgArrow from '../icons/rightLgArrow';
import Link from 'next/link';
const Logo = '/assets/logo/logo.svg';
export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <div className="container">
            <div className={styles.headerAlignment}>
              <div className={styles.logo}>
                <Link href="/">
                <Image src={Logo} layout="fill"/>
                </Link>
              </div>
              <div className={styles.menuAlignment}>
                <div className={styles.menu}>
                  Forex CRM
                </div>
                <div className={styles.menu}>
                Forex Licenses
                <DownArrow/>
                </div>
                <div className={styles.menu}>
                Algo Bot & Strategies
                <DownArrow/>
                </div>
                <div className={styles.menu}>
                Forex Services
                <DownArrow/>
                </div>
              </div>
              <div className={styles.buttonDesign}>
              <Button text="Contact Us" icon={<RightLgArrow/>} />
              </div>
            </div>
        </div>
      </header>
    </div>
  )
}

import React from 'react'
import styles from './footer.module.scss';
import Footerbanner from './footerbanner';
import Image from 'next/image';
import Button from '../button';
import RightBlackLg from '../icons/rightBlackLg';
import Link from 'next/link';
const Logo = '/assets/logo/footer-logo.svg';

export default function Footer() {
  return (
    <div>
      <Footerbanner />
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div className={styles.footerGridItems}>
              <div className={styles.logo}>
                <Image src={Logo} layout="fill" />
              </div>
              <div className={styles.twoCol}>
                <div className={styles.twoColItems}>
                  <p>Email</p>
                  <a>info@rejoicehub.com</a>
                </div>
                <div className={styles.twoColItems}>
                  <p>Phone Number</p>
                  <a>+91 9825122840</a>
                </div>
                <div className={styles.twoColItems}>
                  <p>Address</p>
                  <a>A-301, Atlanta mall, Sudama chowk, Digital Valley (Mota Varachha) , Surat, Gujarat, India 394101</a>
                </div>
              </div>
            </div>
            <div className={styles.footerGridItems}>
              <div className={styles.subtitle}>
                <h3>Links</h3>
              </div>
              <div className={styles.menuCol}>
                <div>
                  <a>Forex Licenses</a>
                  <Link href="/mauritius-forex-license">Mauritius Forex License</Link>
                  <Link href="/vincent-forex-license">St. Vincent Forex License</Link>
                  <Link href="/forex-crm">Forex CRM</Link>
                  <Link href="/algo-bot">Algo Bot & Strategies</Link>
                </div>
                <div>
                  <a>AI bot development</a>
                  <a>Strategies</a>
                  <a>Forex Services</a>
                  <a>AI Web/ Mobile Development</a>
                  <a></a>
                  <Link href="/contact-us">Contact Us</Link>

                </div>
              </div>
            </div>
            <div className={styles.footerGridItems}>
              <div className={styles.lastText}>
                <h3>Get started to up your business with personal Rejoice FX</h3>
              </div>
              <div className={styles.input}>
                <input type="text"  placeholder="Enter your email address"/>
              </div>
              <div className={styles.secButton}>
              <Button text="Submit" outline={true} icon={<RightBlackLg/>} />
              </div>
            </div>
          </div>
          <div className={styles.copyRight}>
            <p>© 2024 Rejoicefx. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

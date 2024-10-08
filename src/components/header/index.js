import React from 'react'
import styles from './header.module.scss';
import Image from 'next/image';
import DownArrow from '../icons/downArrow';
import Button from '../button';
import RightLgArrow from '../icons/rightLgArrow';
import Link from 'next/link';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import Right from '../icons/right';
import MobileHeader from '../mobileHeader';
const Logo = '/assets/logo/logo.svg';
export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [header, setHeader] = useState(false);
  
  useEffect(() => {
    if (header) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [header]);
  const handleMouseEnter = (menu) => {
    if (menu != 0) {
      setHoveredMenu(menu);
    }

  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  const menuItems = [
    {
      title: "Forex CRM",
      submenu: [],
      routes: "/forex-crm",
    },
    {
      title: "Forex Licenses",
      submenu: [
        {
          title: "Mauritius Forex License",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "/mauritius-forex-license"
        },
        {
          title: "St. Vincent Forex License",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "/vincent-forex-license"
        },
      ],
    },
    {
      title: "Algo Bot & Strategies",
      submenu: [
        {
          title: "AI bot development",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "algo-bot"
        },
        {
          title: "Strategies",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "strategies"
        },
      ],
    },
    {
      title: "Forex Services",
      submenu: [
        {
          title: "Web/ Mobile Development",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "/mobile-web-development"

        },
        {
          title: "AI Development",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
          redirectLink: "/ai-development"

        },
      ],
    },

  ];


  const handleLinkClick = () => {
    setHoveredMenu(null);
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerAlignment}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={Logo} layout="fill" />
              </Link>
            </div>
            <div className={styles.menuAlignment}>
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className={styles.relativeHeader}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.menu}>
                    {menu?.routes ? <Link href={menu?.routes}>{menu.title}</Link> : menu?.title}

                    {menu.submenu.length > 0 && <DownArrow />}
                  </div>
                  <div
                    onMouseEnter={handleMouseLeave}
                    className={classNames({
                      [styles.open]: hoveredMenu === index,
                      [styles.blurDiv]: hoveredMenu === index,

                    })}
                  ></div>
                  {menu.submenu.length > 0 && (
                    <div
                      className={classNames(
                        styles.submenubox,
                        hoveredMenu === index ? styles.show : styles.hide
                      )}
                    >
                      <div className="container">
                        <div className={styles.grid}>
                          {menu.submenu.map((item, i) => (
                            <Link href={item?.redirectLink} onClick={handleLinkClick}>
                              <div key={i} className={styles.gridItems}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className={styles.solution}>
                                  <span>See Solution</span>
                                  <Right />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className={styles.buttonDesign}>
              <Link href="/contact-us">
                <Button text="Contact Us" icon={<RightLgArrow />} />
              </Link>
              <div className={styles.mobileMenu} onClick={() => setHeader(!header)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileHeader header={header} setHeader={setHeader} />
    </>
  );
}

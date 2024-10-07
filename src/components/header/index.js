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
const Logo = '/assets/logo/logo.svg';
export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);

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
          redirectLink: "/mauritius-forex-license"
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
          redirectLink: "algo-bot"
        },
      ],
    },
    {
      title: "Forex Services",
      submenu: [
        {
          title: "AI Web/ Mobile Development",
          description:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        },
      ],
    },

  ];


  const handleLinkClick = () => {
    setHoveredMenu(null);
  };

  return (
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
                          <div key={i} className={styles.gridItems}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            {item?.redirectLink ? <Link href={item?.redirectLink} onClick={handleLinkClick}>
                              <div className={styles.solution}>
                                <span>See Solution</span>
                                <Right />
                              </div>
                            </Link> : <div className={styles.solution}>
                              <span>See Solution</span>
                              <Right />
                            </div>}
                          </div>
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
          </div>
        </div>
      </div>
    </header>
  );
}

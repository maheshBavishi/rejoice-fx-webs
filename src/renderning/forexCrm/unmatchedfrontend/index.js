import React, { useState } from 'react'
import styles from './unmatchedfrontend.module.scss';
import CommonButton from '@/components/commonButton';
import DownArrow from '@/components/icons/downArrow';
import classNames from 'classnames';
const UnmatchedImage = '/assets/images/Unmatched.png';
const DreamsImage = '/assets/images/dreams.png';

const FAQ_Content = [
  {
    question: "Powerful dashboard",
    answer: "Experience real-time analytics and streamlined management with our intuitive and powerful dashboard",
  },
  {
    question: "Deposit management",
    answer: "Experience real-time analytics and streamlined management with our intuitive and powerful dashboard",
  },
  {
    question: "Profile Page",
    answer: "Experience real-time analytics and streamlined management with our intuitive and powerful dashboard",
  },
  {
    question: "Trading platforms",
    answer: "Experience real-time analytics and streamlined management with our intuitive and powerful dashboard",
  },
  {
    question: "Balances",
    answer: "Experience real-time analytics and streamlined management with our intuitive and powerful dashboard",
  },
  {
    question: "Helpdesk",
    answer: "Experience real-time analytics and streamlined management with our intuitive and powerful dashboard",
  },
  {
    question: "Bonuses",
    answer: "Experience real-time analytics and streamlined management with our intuitive and powerful dashboard",
  },
];

const Back_Office = [
  {
    question: "Clients",
    answer: "Access a comprehensive table displaying key information about all clients for efficient management.",
  },
  {
    question: "Accounts",
    answer: "Access a comprehensive table displaying key information about all clients for efficient management.",
  },
  {
    question: "Transactions",
    answer: "Access a comprehensive table displaying key information about all clients for efficient management.",
  },
  {
    question: "Permissions",
    answer: "Access a comprehensive table displaying key information about all clients for efficient management.",
  },
  {
    question: "Reports",
    answer: "Access a comprehensive table displaying key information about all clients for efficient management.",
  },
  {
    question: "Requests",
    answer: "Access a comprehensive table displaying key information about all clients for efficient management.",
  },
  {
    question: "Bonuses",
    answer: "Access a comprehensive table displaying key information about all clients for efficient management.",
  },
];

export default function Unmatchedfrontend() {
  const [toggle_1, setToggle_1] = useState(true);
  const [toggle, setToggle] = useState(true);
  const handleToggle = (index) => {
    if (toggle === index) {
      setToggle(null);
    } else {
      setToggle(index);
    }
  };

  const handleOnToggle_1 = (index) => {
    if (toggle_1 === index) {
      setToggle_1(null)
    } else {
      setToggle_1(index)
    }
  }
  return (
    <div className={styles.unmatchedfrontend}>
      <div className="container">
        <div className={styles.center}>
          <CommonButton text="Projects" />
        </div>
        <h2>
          Unmatched frontend
        </h2>
        <div className={styles.grid}>
          <div className={styles.griditems}>
            {FAQ_Content?.map((item, i) => {
              return (
                <div className={classNames(styles.mainbox, toggle === i ? styles.active : "")}>
                  <div className={styles.cardHeader} onClick={() => handleToggle(i)}>
                    <span>{item?.question}</span>
                    <div>
                      <DownArrow />
                    </div>
                  </div>
                  <div className={classNames(styles.cardbody, toggle === i ? styles.show : styles.hide)}>
                    <p>
                      {item?.answer}
                    </p>
                  </div>
                </div>
              )
            })}
            {/* {
              [...Array(6)].map(() => {
                return (
                  <div className={classNames(styles.mainbox)}>
                    <div className={styles.cardHeader} >
                      <span>Deposit management</span>
                      <div>
                        <DownArrow />
                      </div>
                    </div>
                  </div>
                )
              })
            } */}
          </div>
          <div className={styles.griditems}>
            <div className={styles.img}>
              <img src={UnmatchedImage} alt="UnmatchedImage" />
            </div>
          </div>
        </div>
        <div className={styles.center}>
          <CommonButton text="Projects" />
        </div>
        <h2>
          Back office of dreams
        </h2>
        <div className={styles.grid}>
          <div className={styles.griditems}>
            {Back_Office?.map((item, i) => {
              return (
                <div className={classNames(styles.mainbox, toggle_1 === i ? styles.active : "")}>
                  <div className={styles.cardHeader} onClick={() => handleOnToggle_1(i)}>
                    <span>{item?.question}</span>
                    <div>
                      <DownArrow />
                    </div>
                  </div>
                  <div className={classNames(styles.cardbody, toggle_1 === i ? styles.show : styles.hide)}>
                    <p>
                      {item?.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.griditems}>
            <div className={styles.img}>
              <img src={DreamsImage} alt="DreamsImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

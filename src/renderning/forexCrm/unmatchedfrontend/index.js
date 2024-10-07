import React , { useState } from 'react'
import styles from './unmatchedfrontend.module.scss';
import CommonButton from '@/components/commonButton';
import DownArrow from '@/components/icons/downArrow';
import classNames from 'classnames';
const UnmatchedImage = '/assets/images/Unmatched.png';
const DreamsImage = '/assets/images/dreams.png';
export default function Unmatchedfrontend() {
    const [ toogle , setToogle ] = useState(false);
    const [ toogle1 , setToogle1 ] = useState(false);
  return (
    <div className={styles.unmatchedfrontend}>
      <div className="container">
        <div className={styles.center}>
            <CommonButton text="Projects"/>
        </div>
        <h2>
        Unmatched frontend
        </h2>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={ classNames(styles.mainbox , toogle ? styles.active : "") }>
                    <div className={styles.cardHeader} onClick={() => setToogle(!toogle)}>
                        <span>Powerful dashboard</span>
                        <div>
                        <DownArrow/>
                        </div>
                    </div>
                    <div className={ classNames(styles.cardbody , toogle ? styles.show : styles.hide) }>
                        <p>
                        Experience real-time analytics and streamlined management with our intuitive 
                        and powerful dashboard
                        </p>
                    </div>
                </div>
               {
                [...Array(6)].map(()=> {
                  return(
                    <div className={ classNames(styles.mainbox ) }>
                    <div className={styles.cardHeader} >
                        <span>Deposit management</span>
                        <div>
                        <DownArrow/>
                        </div>
                    </div>
                </div>
                  )
                })
               }
            </div>
            <div className={styles.griditems}>
              <div className={styles.img}>
                <img src={UnmatchedImage} alt="UnmatchedImage"/>
              </div>
            </div>
        </div>
        <div className={styles.center}>
            <CommonButton text="Projects"/>
        </div>
        <h2>
        Back office of dreams
        </h2>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={ classNames(styles.mainbox , toogle ? styles.active : "") }>
                    <div className={styles.cardHeader} onClick={() => setToogle1(!toogle1)}>
                        <span>Powerful dashboard</span>
                        <div>
                        <DownArrow/>
                        </div>
                    </div>
                    <div className={ classNames(styles.cardbody , toogle1 ? styles.show : styles.hide) }>
                        <p>
                        Experience real-time analytics and streamlined management with our intuitive 
                        and powerful dashboard
                        </p>
                    </div>
                </div>
               {
                [...Array(6)].map(()=> {
                  return(
                    <div className={ classNames(styles.mainbox ) }>
                    <div className={styles.cardHeader} >
                        <span>Deposit management</span>
                        <div>
                        <DownArrow/>
                        </div>
                    </div>
                </div>
                  )
                })
               }
            </div>
            <div className={styles.griditems}>
              <div className={styles.img}>
                <img src={DreamsImage} alt="DreamsImage"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

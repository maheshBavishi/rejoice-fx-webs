import React from 'react'
import styles from './strategiesCardList.module.scss';
import StrategiesCard from '../strategiesCard';
export default function StrategiesCardList() {
  return (
    <div className="container">
    <div className={styles.strategiesCardList}>
      <div className={styles.grid}>
        {
            [...Array(16)].map(()=> {
                return(
                    <StrategiesCard/>
                )
            })
        }
      </div>
    </div>
    </div>
  )
}

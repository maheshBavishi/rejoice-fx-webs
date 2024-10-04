import React from 'react'
import styles from './commonButton.module.scss';
import WaveIcon from '../icons/waveIcon';
export default function CommonButton({text}) {
    return (
        <div className={styles.commonButton}>
            <button aria-label={text} >
                <WaveIcon />
                {text}
            </button>
        </div>
    )
}

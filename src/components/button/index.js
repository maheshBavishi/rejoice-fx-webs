import React from 'react'
import styles from './button.module.scss';
import classNames from 'classnames';
export default function Button({text , outline , icon , send}) {
  return (
    <div className={ classNames(styles.button , outline ? styles.outline : "") }>
      <button type="submit" value="Send">
        {text}
        {icon}
      </button>
    </div>
  )
}

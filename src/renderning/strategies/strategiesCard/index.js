import React, { useState , useEffect} from 'react'
import styles from './strategiesCard.module.scss';
import Image from 'next/image';
import Button from '@/components/button';
import Link from 'next/link';
const AiIcon = '/assets/icons/ai-gen-xii.png';
export default function StrategiesCard() {
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [modalOpen]);
  return (
    <>
      <div className={styles.strategiesCard}>
        <Link href="/strategies-details">
          <div className={styles.logo}>
            <Image src={AiIcon} layout="fill" />
          </div>
          <div className={styles.details}>
            <h3>
              Quantum Emperor MT5 Quantum Emperor MT5
            </h3>
            <p>
              Implementation is extremely elegant. Best I have experienced actually. Support too is very good. The product operates as described, and backtests were good. Real account experience operates per design. I am very happy so far. Of course, this is an EA, and so my expectations are not to have some wonderful robot making me money without
              risk. But with monitoring, and appropriate risk management, I am hopeful for continued returns.
            </p>
            <div className={styles.amount}>
              <button>1 199 USD</button>
            </div>
          </div>
        </Link>
          <div className={styles.buttonAlignment}>
              <div onClick={() => setModalOpen(!modalOpen)}>
                <Button text="Buy Now" />
              </div>
            </div>
      </div>
      {
        modalOpen && (
          <div className={styles.linkmodal}>
            <div className={styles.whiteModal}>
              <div className={styles.modalClose}>
                <div onClick={() => setModalOpen(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>
              </div>
              <div className={styles.modalbody}>
                <h3>
                  TRC-20
                </h3>
                <span>Link </span>
                <div className={styles.linkText}>
                  <a>
                    https://www.figma.com/design/8fn7QkvAU9lapRr3eNXUJD/Untitled?node-id=746-1196&node-type=rounded_rectangle&m=dev
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" /></svg>
                </div>
                <p>
                  Send your transaction screenshot to <a>yash@rejoicehub.com</a>
                </p>
              </div>

            </div>
          </div>
        )
      }
    </>
  )
}

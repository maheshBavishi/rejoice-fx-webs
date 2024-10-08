import React from 'react'
import styles from './crmSystem.module.scss';
import CommonButton from '@/components/commonButton';
import SqureIconWhite from '@/components/icons/squreIconWhite';
const BusinessIocn = '/assets/icons/Business.svg';
const DevelopersIocn = '/assets/icons/Developers.svg';
const TeamIocn = '/assets/icons/team.svg';
export default function CrmSystem() {
    return (
        <div className={styles.crmSystemAlignment}>
            <div className="container-lg">
                <div className={styles.blueBox}>
                    <div className="container">
                        <div className={styles.cemteralignment}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M4.56593 18.9098H12.8895C13.2365 18.9098 13.5188 19.1921 13.5188 19.539C13.5188 19.8859 13.2365 20.1681 12.8895 20.1681H11.3857C10.2466 20.1681 9.31978 21.0947 9.31978 22.2336C9.31978 23.3725 10.2466 24.2992 11.3857 24.2992H24.4341C25.5732 24.2992 26.5 23.3726 26.5 22.2336C26.5 21.0947 25.5732 20.1681 24.4341 20.1681H17.3739C17.0269 20.1681 16.7446 19.8859 16.7446 19.539C16.7446 19.1921 17.0269 18.9098 17.3739 18.9098H17.6143C18.7535 18.9098 19.6803 17.9832 19.6803 16.8443C19.6803 15.7053 18.7535 14.7787 17.6143 14.7787H14.363C14.0159 14.7787 13.7336 14.4965 13.7336 14.1496C13.7336 13.8026 14.0159 13.5204 14.363 13.5204H22.1608C23.3 13.5204 24.2268 12.5938 24.2268 11.4548C24.2268 10.3159 23.3 9.38936 22.1608 9.38936H18.3987C18.0517 9.38936 17.7693 9.1071 17.7693 8.7602C17.7693 8.41329 18.0517 8.13103 18.3987 8.13103H18.4452C19.5843 8.13103 20.5111 7.20445 20.5111 6.06554C20.5111 4.92664 19.5843 4 18.4452 4H5.39682C4.25769 4 3.33088 4.92659 3.33088 6.06554C3.33088 7.2045 4.25769 8.13103 5.39682 8.13103H13.4335C13.7805 8.13103 14.0628 8.41329 14.0628 8.7602C14.0628 9.1071 13.7805 9.38936 13.4335 9.38936H9.11243C7.97331 9.38936 7.0465 10.3159 7.0465 11.4549C7.0465 12.5939 7.97331 13.5204 9.11243 13.5204H9.39773C9.74474 13.5204 10.0271 13.8026 10.0271 14.1496C10.0271 14.4965 9.74474 14.7787 9.39773 14.7787H4.56593C3.42681 14.7787 2.5 15.7053 2.5 16.8443C2.5 17.9832 3.42681 18.9098 4.56593 18.9098ZM4.56593 15.4406H9.39773C10.1097 15.4406 10.689 14.8615 10.689 14.1496C10.689 13.4377 10.1097 12.8585 9.39773 12.8585H9.11243C8.33825 12.8585 7.70843 12.2288 7.70843 11.4548C7.70843 10.6809 8.33825 10.0513 9.11243 10.0513H13.4335C14.1455 10.0513 14.7248 9.4721 14.7248 8.7602C14.7248 8.04829 14.1455 7.46911 13.4335 7.46911H5.39682C4.62264 7.46911 3.99281 6.83945 3.99281 6.06554C3.99281 5.29164 4.62264 4.66193 5.39682 4.66193H18.4452C19.2193 4.66193 19.8492 5.29159 19.8492 6.06554C19.8492 6.8395 19.2193 7.46911 18.4452 7.46911H18.3987C17.6867 7.46911 17.1074 8.04829 17.1074 8.7602C17.1074 9.4721 17.6867 10.0513 18.3987 10.0513H22.1608C22.935 10.0513 23.5648 10.6809 23.5648 11.4549C23.5648 12.2289 22.935 12.8585 22.1608 12.8585H14.363C13.6509 12.8585 13.0716 13.4377 13.0716 14.1496C13.0716 14.8615 13.6509 15.4406 14.363 15.4406H17.6143C18.3885 15.4406 19.0183 16.0703 19.0183 16.8443C19.0183 17.6182 18.3885 18.2479 17.6143 18.2479H17.3739C16.6619 18.2479 16.0826 18.8271 16.0826 19.539C16.0826 20.2509 16.6619 20.8301 17.3739 20.8301H24.4341C25.2083 20.8301 25.8381 21.4597 25.8381 22.2336C25.8381 23.0075 25.2083 23.6372 24.4341 23.6372H11.3857C10.6115 23.6372 9.98171 23.0076 9.98171 22.2336C9.98171 21.4597 10.6115 20.8301 11.3857 20.8301H12.8895C13.6015 20.8301 14.1808 20.2509 14.1808 19.539C14.1808 18.8271 13.6015 18.2479 12.8895 18.2479H4.56593C3.79175 18.2479 3.16193 17.6182 3.16193 16.8443C3.16193 16.0703 3.79175 15.4407 4.56593 15.4407V15.4406Z" fill="white" stroke="white" stroke-width="0.2" />
                                </svg>
                                CRM System
                            </button>
                        </div>
                        <h2>
                            Developing an in-house CRM system typically takes at least 25 people and 2 years
                        </h2>
                        <div className={styles.threeCol}>
                            <div className={styles.threeColItems}>
                                <div className={styles.iconTextAlignment}>
                                    <img src={BusinessIocn} alt="BusinessIocn" />
                                    <p>
                                        Business
                                    </p>
                                </div>
                                <div className={styles.allIconalignment}>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Project manager</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Project manager</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Business & Data analyst</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Solution architector</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.threeColItems}>
                                <div className={styles.iconTextAlignment}>
                                    <img src={DevelopersIocn} alt="DevelopersIocn" />
                                    <p>
                                        Developers
                                    </p>
                                </div>
                                <div className={styles.allIconalignment}>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>QA testers</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Android Developers</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>iOS Developers</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>System administrator/DevOps engineer</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Sdet</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Front-end developer</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Back-end developers</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.threeColItems}>
                                <div className={styles.iconTextAlignment}>
                                    <img src={TeamIocn} alt="TeamIocn" />
                                    <p>
                                        Other teams
                                    </p>
                                </div>
                                <div className={styles.allIconalignment}>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Support & training staff</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Security specialist</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Tech writer</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>Database administrator</span>
                                    </div>
                                    <div className={styles.iconGrid}>
                                        <SqureIconWhite />
                                        <span>UI/UX designers</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.cemteralignment}>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M4.56593 18.9098H12.8895C13.2365 18.9098 13.5188 19.1921 13.5188 19.539C13.5188 19.8859 13.2365 20.1681 12.8895 20.1681H11.3857C10.2466 20.1681 9.31978 21.0947 9.31978 22.2336C9.31978 23.3725 10.2466 24.2992 11.3857 24.2992H24.4341C25.5732 24.2992 26.5 23.3726 26.5 22.2336C26.5 21.0947 25.5732 20.1681 24.4341 20.1681H17.3739C17.0269 20.1681 16.7446 19.8859 16.7446 19.539C16.7446 19.1921 17.0269 18.9098 17.3739 18.9098H17.6143C18.7535 18.9098 19.6803 17.9832 19.6803 16.8443C19.6803 15.7053 18.7535 14.7787 17.6143 14.7787H14.363C14.0159 14.7787 13.7336 14.4965 13.7336 14.1496C13.7336 13.8026 14.0159 13.5204 14.363 13.5204H22.1608C23.3 13.5204 24.2268 12.5938 24.2268 11.4548C24.2268 10.3159 23.3 9.38936 22.1608 9.38936H18.3987C18.0517 9.38936 17.7693 9.1071 17.7693 8.7602C17.7693 8.41329 18.0517 8.13103 18.3987 8.13103H18.4452C19.5843 8.13103 20.5111 7.20445 20.5111 6.06554C20.5111 4.92664 19.5843 4 18.4452 4H5.39682C4.25769 4 3.33088 4.92659 3.33088 6.06554C3.33088 7.2045 4.25769 8.13103 5.39682 8.13103H13.4335C13.7805 8.13103 14.0628 8.41329 14.0628 8.7602C14.0628 9.1071 13.7805 9.38936 13.4335 9.38936H9.11243C7.97331 9.38936 7.0465 10.3159 7.0465 11.4549C7.0465 12.5939 7.97331 13.5204 9.11243 13.5204H9.39773C9.74474 13.5204 10.0271 13.8026 10.0271 14.1496C10.0271 14.4965 9.74474 14.7787 9.39773 14.7787H4.56593C3.42681 14.7787 2.5 15.7053 2.5 16.8443C2.5 17.9832 3.42681 18.9098 4.56593 18.9098ZM4.56593 15.4406H9.39773C10.1097 15.4406 10.689 14.8615 10.689 14.1496C10.689 13.4377 10.1097 12.8585 9.39773 12.8585H9.11243C8.33825 12.8585 7.70843 12.2288 7.70843 11.4548C7.70843 10.6809 8.33825 10.0513 9.11243 10.0513H13.4335C14.1455 10.0513 14.7248 9.4721 14.7248 8.7602C14.7248 8.04829 14.1455 7.46911 13.4335 7.46911H5.39682C4.62264 7.46911 3.99281 6.83945 3.99281 6.06554C3.99281 5.29164 4.62264 4.66193 5.39682 4.66193H18.4452C19.2193 4.66193 19.8492 5.29159 19.8492 6.06554C19.8492 6.8395 19.2193 7.46911 18.4452 7.46911H18.3987C17.6867 7.46911 17.1074 8.04829 17.1074 8.7602C17.1074 9.4721 17.6867 10.0513 18.3987 10.0513H22.1608C22.935 10.0513 23.5648 10.6809 23.5648 11.4549C23.5648 12.2289 22.935 12.8585 22.1608 12.8585H14.363C13.6509 12.8585 13.0716 13.4377 13.0716 14.1496C13.0716 14.8615 13.6509 15.4406 14.363 15.4406H17.6143C18.3885 15.4406 19.0183 16.0703 19.0183 16.8443C19.0183 17.6182 18.3885 18.2479 17.6143 18.2479H17.3739C16.6619 18.2479 16.0826 18.8271 16.0826 19.539C16.0826 20.2509 16.6619 20.8301 17.3739 20.8301H24.4341C25.2083 20.8301 25.8381 21.4597 25.8381 22.2336C25.8381 23.0075 25.2083 23.6372 24.4341 23.6372H11.3857C10.6115 23.6372 9.98171 23.0076 9.98171 22.2336C9.98171 21.4597 10.6115 20.8301 11.3857 20.8301H12.8895C13.6015 20.8301 14.1808 20.2509 14.1808 19.539C14.1808 18.8271 13.6015 18.2479 12.8895 18.2479H4.56593C3.79175 18.2479 3.16193 17.6182 3.16193 16.8443C3.16193 16.0703 3.79175 15.4407 4.56593 15.4407V15.4406Z" fill="white" stroke="white" stroke-width="0.2" />
                                </svg>
                                Rate
                            </button>
                        </div>
                        <h2>
                            Costs start at $200k per month, excluding taxes, infrastructure, equipment, and licenses. Total for 2 years: $5 million
                        </h2>
                        <div className={styles.fourCol}>
                            <div className={styles.fourColItems}>
                                <p>
                                Developers
                                </p>
                                <span>Average salary for a software developer is around $100,000 per year</span>
                            </div>
                            <div className={styles.fourColItems}>
                                <p>
                                Servers and hosting
                                </p>
                                <span>
                                Cloud hosting can cost between $10,000 to $50,000 annually, depending on usage requirements
                                </span>
                            </div>
                            <div className={styles.fourColItems}>
                                <p>
                                Development time
                                </p>
                                <span>
                                Building a CRM system from scratch can take 12-24 months
                                </span>
                            </div>
                            <div className={styles.fourColItems}>
                                <p>
                                Bugs and fixes
                                </p>
                                <span>
                                Unanticipated bugs and fixes can add 20-30% to the total development cost
                                </span>
                            </div>
                        </div>
                        <div className={styles.teamSection}>
                            <h3>
                            Our team works tirelessly to improve Rejoice FX
                            </h3>
                            <div className={styles.secAlignment}>
                                <div>
                                    <p>
                                    70+
                                    </p>
                                    <span>
                                    Engineers working full-time
                                    </span>
                                </div>
                                <div>
                                    <p>
                                    30+
                                    </p>
                                    <span>Continuous Development</span>
                                </div>
                                <div>
                                    <p>
                                    160+
                                    </p>
                                    <span>
                                    Clients using <br/> Rejoice FX
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import styles from './style.module.scss'
import logo from '../../../../assets/images/logo.svg'
import telegramIcon from '../../../../assets/images/telegramIcon.svg'
import twitterIcon from '../../../../assets/images/twitterIcon.svg'
import facebookIcon from '../../../../assets/images/facebookIcon.svg'
import linkedinIcon from '../../../../assets/images/linkedinIcon.svg'
import langIcon from '../../../../assets/images/langIcon.svg'
import greyArrow from '../../../../assets/images/greyArrow.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.navbar}>
        <div className={styles.nav}>
          <span className={styles.heading} to=''>
            Legal
          </span>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.link}`
                : `${styles.link}`
            }
            to='/termsServices'
          >
            {' '}
            Terms Conditions
          </NavLink>
          <NavLink className={styles.link} to=''>
            {' '}
            Vendor
          </NavLink>
          <NavLink className={styles.link} to=''>
            {' '}
            Reminder
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.link}`
                : `${styles.link}`
            }
            to='/aml-policy'
          >
            AML Policy
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.link}`
                : `${styles.link}`
            }
            to='/stablecoin-terms-of-service'
          >
            Stablecoin Terms of Service
          </NavLink>
          <NavLink className={styles.link} to=''>
            xyz Earn Terms of Service
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.link}`
                : `${styles.link}`
            }
            to='/privacy-notice'
          >
            Privacy Notice
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.link}`
                : `${styles.link}`
            }
            to='/bug-bounty-policy'
          >
            Bug Bounty Policy
          </NavLink>
          <NavLink className={styles.link} to=''>
            {' '}
            Cookie Policy
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.link}`
                : `${styles.link}`
            }
            to='/aboutus'
          >
            AboutUs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.activeLink} ${styles.link}`
                : `${styles.link}`
            }
            to='/support'
          >
            Support
          </NavLink>
        </div>
        <div className={styles.langWrap}>
          <NavLink className={styles.link} to=''>
            FAQ & Help centre
          </NavLink>
          <div className={styles.seprator}></div>
          <span className={styles.lang}>
            <img src={langIcon} alt='lang' />
            <span>EN</span>
            <img src={greyArrow} alt='arrow' />
          </span>
        </div>
      </div>
      <div className={styles.logoWrap}>
        <div className={styles.logo_name}>
          <div className={styles.logo}>
            <img src={logo} alt='logo' />
          </div>
          <div className={styles.name}>Logo</div>
        </div>
        <div className={styles.socialMedia}>
          <a href='/'>
            <img src={twitterIcon} alt='twitterIcon' />
          </a>
          <a href='/'>
            <img src={facebookIcon} alt='fbIcon' />
          </a>
          <a href='/'>
            <img src={telegramIcon} alt='telegramlIcon' />
          </a>
          <a href='/'>
            <img src={linkedinIcon} alt='linkedinIcon' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer

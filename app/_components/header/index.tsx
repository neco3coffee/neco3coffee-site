'use client'
import styles from './index.module.css'
import { usePathname } from 'next/navigation'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react'
import clsx from 'clsx'
import {useFloating, autoUpdate} from '@floating-ui/react';
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const pathname = usePathname()
  const slashRemovedPathname = pathname.replace('/', '')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const {refs, floatingStyles} = useFloating({
    whileElementsMounted: autoUpdate,
    open: isMenuOpen,
    onOpenChange: setIsMenuOpen
  });
  const navList = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Notes',
      href: '/notes'
    },
    {
      name: 'About',
      href: '/about'
    }
  ]

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.profileImageWrapper}>
            <Image
              src={'/img/profile.PNG'}
              alt='profile image'
              fill
              className={styles.profileImage}
            />
        </Link>
        <nav>
          <Link href="/">
            <h2 className={styles.siteName}>neco3coffee</h2>
          </Link>
          {pathname !== '/' && <>
            <span>/</span>
            <p>{slashRemovedPathname}</p>
          </>}
          {/* TODO: arrowを表示する */}
          <span 
            className={styles.downArrowWrapper}
            ref={refs.setReference}
          >
            <MdKeyboardArrowDown className={clsx(
              styles.downArrow,
              {
                [styles.downArrowOpen]: isMenuOpen
              }
            )} 
            onClick={toggleMenu} 
            />
          </span>
          {
            isMenuOpen && (
              <div ref={refs.setFloating} style={floatingStyles}
                className={styles.menuTooltip}
              >
                <ul className={styles.navList}>
                  {
                    navList.map((navItem) => {
                      return (
                        <Link key={navItem.name} href={navItem.href} className={clsx(
                          styles.navItem,
                          {
                            [styles.navItemActive]: pathname === navItem.href
                          }
                        )} onClick={toggleMenu}>
                          <h5>{navItem.name}</h5>
                          {pathname === navItem.href && <span>✔</span>}
                        </Link>
                      )
                    })
                  }
                </ul>
              </div>
            )
          }
        </nav> 
      </div>
    </header>
  )
}
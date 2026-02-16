import { type ReactNode } from 'react';
import styles from './NavBar.module.scss'
import { BookShelfIcon } from '@/components/misc/BookShelfIcon';

type Props = {
  children?: ReactNode
}

export const NavBar = ({ children }:Props) => {
  return (
    <>
      <div className={styles['navbar-container']}>
        <div className={styles['nav-title']}>
          <BookShelfIcon size='42px'/>
          <h1>the bookshelf</h1>
        </div>
        <nav>
          {children}
        </nav>
      </div>
      <div style={{marginBottom: '70px'}} />
    </>
  );
};
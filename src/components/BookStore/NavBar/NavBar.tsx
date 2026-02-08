import { type ReactNode } from 'react';
import styles from './NavBar.module.scss'
import { BookShelfIcon } from '@/components/BookShelfIcon';

type Props = {
  children?: ReactNode
}

export const NavBar = ({ children }:Props) => {
  return (
    <header className={styles['navbar-container']}>
      <div className={styles['nav-title']}>
        <BookShelfIcon size='42px'/>
        <h1>the bookshelf</h1>
      </div>
      <nav>
        {children}
      </nav>
    </header>
  );
};
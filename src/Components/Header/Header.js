import React from 'react';
import styles from './Header.module.css';
import { ReactComponent as LogoSymbol } from '../../assets/logos/logo-symbol.svg';
import { ReactComponent as LogoType } from '../../assets/logos/logo-type.svg';

const Header = () => {
  return (
    <nav>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>
            <LogoSymbol />
            <LogoType />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

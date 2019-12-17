import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import { ReactComponent as LogoSymbol } from '../../assets/logos/logo-symbol.svg';
import { ReactComponent as LogoType } from '../../assets/logos/logo-type.svg';

const LogoComponent = (
  <>
    <LogoSymbol />
    <LogoType />
  </>
);

const renderLogo = isLogo =>
  isLogo ? <a href="/">{LogoComponent}</a> : LogoComponent;

const Header = ({ isAnchor }) => {
  return (
    <nav>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}>{renderLogo(isAnchor)}</div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  isAnchor: PropTypes.bool
};

Header.defaultProps = {
  isAnchor: false
};

export default Header;

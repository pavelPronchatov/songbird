import React from 'react';
import './header-style.scss';

const Header = (props) => {
  const {allScore} = props;
  return (
    <div className="header">
      <h3 className="header__title">Song<span>Bird</span></h3>
      <div className="header__score">
        Score: <span className="score__value">{allScore}</span>
      </div>
    </div>
  );
}

export default Header;
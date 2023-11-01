

import "./Header.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="contents">
        <img className="logo" src="./logo.svg" alt="로고" onClick={() => navigate('/')}></img>
        <div className="text" onClick={() => navigate('/Movies')}>
          영화
        </div>
        <div className="text" onClick={() => navigate('/TV')}>
          TV 프로그램
        </div>
        <div className="text" onClick={() => navigate('/Celebrity')}>
          인물
        </div>
      </div>
    </div>
  );
}

export default Header;


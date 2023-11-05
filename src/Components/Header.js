import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 52px;
  background-color: #032541;
`;

const Contents = styled.div`
  position: absolute;
  left: 230px;
  top: 19px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const Logo = styled.img`
  width: 122px;
  height: 16px;
`;

const Text = styled.div`
  font-size: 14px;
  color: white;
  cursor: pointer;
`;

const LoginButton = styled.div`
  background-color: white;
  color: black;
  height: 25px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  font-size: 14px;
  cursor: pointer;
`;

const LoginText = styled.div`
  font-size: 14px;
  color: white;
`;

function Header() {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(false);

  const handleLogin = () => {
    setisLogin(!isLogin);
  }

  return (
    <HeaderWrapper>
      <Contents>
        <Logo src="./logo.svg" alt="로고" onClick={() => navigate('/')} />
        <Text onClick={() => navigate('/Movies')}>영화</Text>
        <Text onClick={() => navigate('/TV')}>TV 프로그램</Text>
        <Text onClick={() => navigate('/Celebrity')}>인물</Text>
        <LoginButton onClick={handleLogin}>{isLogin ? "로그아웃" : "로그인"}</LoginButton>
        <LoginText>{isLogin ? "환영합니다!" : "로그인 해주세요"}</LoginText>
      </Contents>
    </HeaderWrapper>
  );
}

export default Header;

import React from "react";
import styled from "styled-components";

const onLoginHandler = (e) => {
  console.log("로그인");
};

const onLogoutHandler = (e) => {
  console.log("로그아웃");
};

function LoginPage() {
  return (
    <Wrapper>
      <ButtonArea>
        <Button onClick={onLoginHandler}>
          <a href="https://github.com/login/oauth/authorize?client_id=e801513fdd21c3099424&redirect_uri=http://localhost:3000">
            GitHub으로 로그인
          </a>
        </Button>
        <br />
        <Button onClick={onLogoutHandler}>로그아웃</Button>
      </ButtonArea>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonArea = styled.div`
  display: relative;
`;

const Button = styled.button`
  height: 30px;
  margin: 10px;
`;

export default LoginPage;

import styled from "styled-components";


export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE}
  }

  h2 {
    font-size: 24px;
    margin: 48px;
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  overflow-y: hidden;
  height: 100%;
  
  img {
    width: 1280px;
    flex: 1;
    opacity: 0.4;
  }
`;
import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.ORANGE };
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: none;
  padding: 0 16px;
  border-radius: 10px;
  font-weight: 500px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &+&{
    margin-top: 1rem;
  }
`;
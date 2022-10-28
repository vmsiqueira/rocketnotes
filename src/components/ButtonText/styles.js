import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  transition: color 0.25s;

  &:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  border: none;
  font-size: 1rem;
`;
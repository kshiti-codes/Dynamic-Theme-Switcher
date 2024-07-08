import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: ${({ theme }) => theme.transition};
  padding: 20px;
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.color};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  margin-top: 10px;
  
  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.background};
  }
`;

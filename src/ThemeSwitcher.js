import React, { useContext } from 'react';
import { ChromePicker } from 'react-color';
import { ThemeContext } from './ThemeContext';
import styled from 'styled-components';
import { FaSun, FaMoon, FaPaintBrush } from 'react-icons/fa';

const SwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background: ${({ theme }) => theme.background};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color};
`;

const ThemeButton = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: 2px solid ${({ theme }) => theme.color};
  border-radius: 10px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  font-size: 1.2rem;
  margin: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
    border-color: ${({ theme }) => theme.background};
  }
`;

const ColorPickerContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ThemeSwitcher = () => {
  const { switchTheme, handleColorChange, customColor } = useContext(ThemeContext);

  return (
    <SwitcherContainer>
      <Title>Choose a Theme</Title>
      <div>
        <ThemeButton onClick={() => switchTheme('light')}>
          <FaSun /> Light Theme
        </ThemeButton>
        <ThemeButton onClick={() => switchTheme('dark')}>
          <FaMoon /> Dark Theme
        </ThemeButton>
        <ThemeButton onClick={() => switchTheme('custom')}>
          <FaPaintBrush /> Custom Theme
        </ThemeButton>
      </div>
      <ColorPickerContainer>
        <ChromePicker
          color={customColor}
          onChangeComplete={handleColorChange}
          disableAlpha
        />
      </ColorPickerContainer>
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;

import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'

test('renders millionaire text', () => {
  render(<App />);
  const textElement = screen.getByText(/millionaire/i);
  expect(textElement).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Error from './Error';

describe('Error component', () => {
  it('renders error message correctly', () => {
    const { getByText } = render(<Error />);
    const errorMessage = getByText('Something went wrong. Please try again.');
    
    expect(errorMessage).toBeInTheDocument(); // Verifica se a mensagem de erro está presente no componente
    expect(errorMessage).toHaveClass('text-white'); // Verifica se a mensagem tem a classe 'text-white'
    expect(errorMessage).toHaveClass('font-bold'); // Verifica se a mensagem tem a classe 'font-bold'
    expect(errorMessage.tagName).toBe('H1'); // Verifica se a mensagem é um elemento de cabeçalho h1
  });
});

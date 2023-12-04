import React from 'react';
import { render } from '@testing-library/react';
import Track from './Track';

test('Track component renders correctly with default data', () => {
  // Renderiza o componente
  const { queryAllByText } = render(<Track isPlaying={false} isActive={false} activeSong={{}} />);
  
  // Encontra todos os elementos com o texto "No active Song"
  const elementsWithNoActiveSongText = queryAllByText('No active Song');
  
  // Verifica se os elementos são encontrados no componente e há exatamente dois deles (um para título e um para subtítulo)
  expect(elementsWithNoActiveSongText).toHaveLength(2);
});

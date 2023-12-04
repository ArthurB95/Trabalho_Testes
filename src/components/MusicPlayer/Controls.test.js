import React from 'react';
import { render } from '@testing-library/react';
import Controls from './Controls';

test('Controls component renders correctly', () => {
  const mockProps = {
    isPlaying: true,
    repeat: false,
    setRepeat: jest.fn(),
    shuffle: false,
    setShuffle: jest.fn(),
    currentSongs: [{ id: 1, title: 'Song 1' }, { id: 2, title: 'Song 2' }],
    handlePlayPause: jest.fn(),
    handlePrevSong: jest.fn(),
    handleNextSong: jest.fn(),
  };

  const { container } = render(<Controls {...mockProps} />);

  // Verifica se o componente foi renderizado
  const controlsComponent = container.querySelector('.flex');

  expect(controlsComponent).not.toBeNull();
});

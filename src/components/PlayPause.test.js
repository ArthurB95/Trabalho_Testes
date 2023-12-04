import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayPause from './PlayPause';

test('renders PlayPause component', () => {
  const handlePause = jest.fn();
  const handlePlay = jest.fn();

  const { container } = render(
    <PlayPause
      isPlaying={true}
      activeSong={{ title: 'Song Title' }}
      song={{ title: 'Song Title' }}
      handlePause={handlePause}
      handlePlay={handlePlay}
    />
  );

  const playPauseButton = container.firstChild;
  fireEvent.click(playPauseButton);

  expect(handlePause).toHaveBeenCalled();
});

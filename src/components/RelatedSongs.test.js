import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RelatedSongs from './RelatedSongs';

test('renders RelatedSongs component with title', () => {
  const data = [
    { key: '1', title: 'Song 1' },
    { key: '2', title: 'Song 2' },
    // Add more sample data as needed
  ];

  const { getByText } = render(
    <RelatedSongs
      data={data}
      isPlaying={false}
      activeSong={null}
      handlePauseClick={() => {}}
      handlePlayClick={() => {}}
      artistId="someArtistId"
    />
  );

  const titleElement = getByText('Related Songs:');
  expect(titleElement).toBeInTheDocument();
});

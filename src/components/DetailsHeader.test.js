import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 
import DetailsHeader from './DetailsHeader';

test('renders DetailsHeader component', () => {
  const artistData = {
    attributes: {
      artwork: {
        url: 'https://example.com/artist-image.jpg',
      },
      name: 'Artist Name',
      genreNames: ['Pop'],
    },
  };

  const songData = {
    images: {
      coverart: 'https://example.com/song-image.jpg',
    },
    title: 'Song Title',
    subtitle: 'Song Subtitle',
    genres: {
      primary: 'Rock',
    },
    artists: [
      {
        adamid: '1234', // Example artist ID
      },
    ],
  };

  const { getByText, getByAltText } = render(
    <Router>
      <DetailsHeader artistId={true} artistData={artistData} />
      <DetailsHeader artistId={false} songData={songData} />
    </Router>
  );

  const artistName = getByText('Artist Name');
  const songTitle = getByText('Song Title');
  const songSubtitle = getByText('Song Subtitle');

  expect(artistName).toBeInTheDocument();
  expect(songTitle).toBeInTheDocument();
  expect(songSubtitle).toBeInTheDocument();

  const artistImage = getByAltText('profile');
  expect(artistImage).toBeInTheDocument();
});

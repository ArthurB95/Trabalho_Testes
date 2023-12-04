import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ArtistCard from './ArtistCard';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe('ArtistCard Component', () => {
  test('navigates to artist details when clicked', () => {
    const track = {
      artists: [{ adamid: '123' }],
      images: { coverart: 'artist-image-url' },
      subtitle: 'Artist Name',
    };

    useNavigate.mockReturnValue(jest.fn());

    const { getByAltText } = render(
      <MemoryRouter>
        <ArtistCard track={track} />
      </MemoryRouter>
    );

    const artistImage = getByAltText('artist');
    fireEvent.click(artistImage);

    expect(useNavigate).toHaveBeenCalledWith();
  });
});

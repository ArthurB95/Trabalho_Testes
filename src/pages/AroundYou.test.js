import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AroundYou from './AroundYou';

// Mocking the useSelector hook from react-redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// Mocking the axios.get function
jest.mock('axios');

describe('AroundYou component', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ activeSong: null, isPlaying: false });
  });

  it('renders the component properly', async () => {
    const mockedData = [
      { key: '1', title: 'Song 1' },
      { key: '2', title: 'Song 2' },
    ];

    axios.get.mockResolvedValueOnce({ data: { location: { country: 'US' } } });
    axios.get.mockResolvedValueOnce({ data: mockedData });

    const { getByText, queryByText } = render(<AroundYou />);

    expect(getByText('Loading songs around you')).toBeInTheDocument();

    // Simulating the async behavior of useEffect
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(queryByText('Loading songs around you')).not.toBeInTheDocument();
    expect(getByText('Around You')).toBeInTheDocument();
    expect(getByText('US')).toBeInTheDocument();
    expect(getByText('Song 1')).toBeInTheDocument();
    expect(getByText('Song 2')).toBeInTheDocument();
  });
});

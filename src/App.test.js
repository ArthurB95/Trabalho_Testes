import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({ activeSong: { title: 'Test Song' } });
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  test('renders App component with required elements', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    // Verifica se o componente Sidebar é renderizado
    const sidebarElement = getByTestId('sidebar');
    expect(sidebarElement).toBeInTheDocument();

    // Verifica se o componente Searchbar é renderizado
    const searchbarElement = getByTestId('searchbar');
    expect(searchbarElement).toBeInTheDocument();

    // Verifica se o componente TopPlay é renderizado
    const topPlayElement = getByTestId('topplay');
    expect(topPlayElement).toBeInTheDocument();

    // Verifica se o componente MusicPlayer não é renderizado sem uma música ativa
    const musicPlayerElement = queryByTestId('musicplayer');
    expect(musicPlayerElement).not.toBeInTheDocument();
  });
});

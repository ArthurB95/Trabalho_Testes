import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

test('renders app with provider, router, and strict mode', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  );

  // Verifica se o aplicativo é renderizado corretamente
  expect(container).toBeInTheDocument();
});

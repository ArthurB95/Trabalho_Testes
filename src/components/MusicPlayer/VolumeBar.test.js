import React from 'react';
import { render } from '@testing-library/react';
import VolumeBar from './VolumeBar';

test('VolumeBar renders correctly', () => {
  const { container } = render(<VolumeBar value={0.5} min={0} max={1} onChange={() => {}} setVolume={() => {}} />);
  
  // Verifica se o componente foi renderizado
  const volumeBarComponent = container.querySelector('.hidden');
  expect(volumeBarComponent).toBeTruthy(); // Utiliza toBeTruthy() para verificar se o componente está presente
});

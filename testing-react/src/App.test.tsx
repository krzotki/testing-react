import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('./http.ts');

describe("<App />", () => {
  it('renders one post', async () => {
    const {getByTestId} = render(<App />);
  
    await waitFor(() => {
      
      const post = getByTestId('myPost');
  
      expect(post).toBeTruthy();
    });
  
  });
  
})
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('./http.ts');

describe("<App />", () => {
  it('renders all posts', async () => {
    const {getByTestId} = render(<App />);
  
    await waitFor(() => {
      
      const posts = getByTestId('allPosts');
  
      expect(posts.childElementCount).toBeGreaterThan(0);
    });
  
  });
  
})
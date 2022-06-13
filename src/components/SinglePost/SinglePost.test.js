import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SinglePost from './SinglePost';

describe('<SinglePost />', () => {
  test('it should mount', () => {
    render(<SinglePost />);
    
    const singlePost = screen.getByTestId('SinglePost');

    expect(singlePost).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UploadPost from './UploadPost';

describe('<UploadPost />', () => {
  test('it should mount', () => {
    render(<UploadPost />);
    
    const uploadPost = screen.getByTestId('UploadPost');

    expect(uploadPost).toBeInTheDocument();
  });
});
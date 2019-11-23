import React from 'react';
import { render } from 'test-utils';
import Home from './Home';

test('renders the Home page', () => {
    const { getByText } = render(<Home userAgent="foo" />);

    expect(getByText(/foo/i)).toBeInTheDocument();
});

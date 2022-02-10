import {render, screen} from '@testing-library/react';
import Header from '../header/Header';

test('renders shopCart link', () => {
    render(<Header/>);
    const linkElement = screen.getByText(/shopcart/i);
    expect(linkElement).toBeInTheDocument();


});
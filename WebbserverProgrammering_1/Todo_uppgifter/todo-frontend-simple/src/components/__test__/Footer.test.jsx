import { render, fireEvent } from '@testing-library/react';

import Footer from "../footer/Footer.js";

let getByTestId

beforeEach(() =>{
    const component = render(<Footer/>)
    getByTestId = component.getByTestId
})

test('header render with correct text author!', () => {
    expect(getByTestId('author').textContent).toBe('Copyright © 2022 by Ursula Vallejo Janne')
})





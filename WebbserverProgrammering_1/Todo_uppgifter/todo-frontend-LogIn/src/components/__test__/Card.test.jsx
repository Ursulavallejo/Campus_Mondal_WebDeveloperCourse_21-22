import { render, fireEvent } from '@testing-library/react';

import Card from "../card/Card";

let getByTestId

beforeEach(() =>{
    const component = render(<Card/>)
    getByTestId = component.getByTestId
})


test('header render with correct text TODO!', () => {
    expect(getByTestId('btnDelete').textContent).toBe('Delete')
})
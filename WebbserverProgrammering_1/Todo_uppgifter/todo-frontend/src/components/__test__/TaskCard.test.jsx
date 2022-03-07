import { render, fireEvent } from '@testing-library/react';

import TaskCard from "../card/TaskCard";

let getByTestId

beforeEach(() =>{
    const component = render(<TaskCard/>)
    getByTestId = component.getByTestId
})


test('header render with correct text TODO!', () => {
    expect(getByTestId('btnDelete').textContent).toBe('Delete')
})
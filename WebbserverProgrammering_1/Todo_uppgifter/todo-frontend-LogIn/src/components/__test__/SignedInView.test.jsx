import { render, fireEvent } from '@testing-library/react';
import SignedInView from "../../views/signedInView/SignedInView";

let getByTestId

beforeEach(() =>{
    const component = render(<SignedInView/>)
    getByTestId = component.getByTestId
})

test('header render with correct text title logged in view TODO!', () => {
    expect(getByTestId('titleLogenIn').textContent).toBe('Hi Ursula! Welcome back! TODO List!')
})




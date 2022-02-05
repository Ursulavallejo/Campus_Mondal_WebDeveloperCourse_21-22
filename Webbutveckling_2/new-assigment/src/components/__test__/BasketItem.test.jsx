import BasketItem from '../basket/BasketItem';

import {fireEvent, render} from "@testing-library/react";



let getByTestId

beforeEach(() =>{
    const component = render(<BasketItem/>)
    getByTestId = component.getByTestId
})

test('input change value', () => {
    const inputElement = getByTestId('input')
    expect(inputElement.value).toBe('1')

    fireEvent.change(inputElement, {
        target: {
            value: '3'
        }
    })
    expect(inputElement.value).toBe('3')
})


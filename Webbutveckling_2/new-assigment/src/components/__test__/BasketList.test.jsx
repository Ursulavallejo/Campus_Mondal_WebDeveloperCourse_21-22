import {fireEvent, render} from "@testing-library/react";
import BasketList from '../basket/BasketList';

let getByTestId

beforeEach(() => {
    const component = render(<BasketList/>)
    getByTestId = component.getByTestId
})

test('change input', () => {
    const inputElement = getByTestId('amountCD')
    expect(inputElement.textContent).toBe('0')
    fireEvent.change(inputElement, {
        target: {
            textContent: '3'
        }
    })

    expect(inputElement.textContent).toBe('3')
})




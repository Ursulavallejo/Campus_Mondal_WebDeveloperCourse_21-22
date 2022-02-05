
import Header from '../header/Header';
import { render, fireEvent } from '@testing-library/react';

let getByTestId

beforeEach(() =>{
    const component = render(<Header/>)
    getByTestId = component.getByTestId
})



// test('header render with correct text 1', () => {
//     const component = render(<Header/>)
//     const headerElement = component.getByTestId('header')
//     expect(headerElement.textContent).toBe('AMOEBA STORE: The Best Music')
// })
//
// test('header render with correct text 2', () => {
//     const {getByTestId} = render(<Header/>)
//     const headerElement = getByTestId('header')
//     expect(headerElement.textContent).toBe('AMOEBA STORE: The Best Music')
// })
//
// test('header render with correct text 3', () => {
//     const {getByTestId} = render(<Header/>)
//
//     expect(getByTestId('header').textContent).toBe('AMOEBA STORE: The Best Music')
// })

test('header render with correct text 4', () => {
    expect(getByTestId('header').textContent).toBe('AMOEBA STORE: The Best Music')
})

test('btnCart render with correct text shopCart', () => {
    expect(getByTestId('btnCart').textContent).toBe('ShopCart')
})

test('btnSearch render with correct text search', () => {
    expect(getByTestId('btnSearch').textContent).toBe('SEARCH')
})

test('input contains correct placeholder', () => {
    expect(getByTestId('input').placeholder).toBe('artist name, keywords')
})

test('input contains correct type text', () => {
    expect(getByTestId('input').type).toBe('text')
})

test('input contains correct type text', () => {
    expect(getByTestId('input').type).toBe('text')
})


test("change placeholder of input works correctly ", () => {
    const inputElement = getByTestId('input');
    fireEvent.change(inputElement, {
        target: {
            placeholder: "Incubus"
        }
    });
    expect(inputElement.placeholder).toBe("Incubus")
})







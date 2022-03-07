
import { render } from '@testing-library/react';
import CreateTodoData from "../user_crud/CreateTodoData";

let getByTestId

beforeEach(() =>{
    const component = render(<CreateTodoData/>)
    getByTestId = component.getByTestId
})


test('btnAdd render with correct text ADD', () => {
    expect(getByTestId('btnAddTest').textContent).toBe('ADD')
})

test('input contains correct placeholder', () => {
    expect(getByTestId('textNeedDo').placeholder).toBe('What is need to do?')
})









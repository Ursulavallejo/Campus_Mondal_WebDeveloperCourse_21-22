
import { render } from '@testing-library/react';
import CreateAndGetTodoData from "../user_crud/CreateAndGetTodoData";

let getByTestId

beforeEach(() =>{
    const component = render(<CreateAndGetTodoData/>)
    getByTestId = component.getByTestId
})


test('btnAdd render with correct text ADD', () => {
    expect(getByTestId('btnAddTest').textContent).toBe('ADD')
})

test('input contains correct placeholder', () => {
    expect(getByTestId('textNeedDo').placeholder).toBe('What is need to do?')
})









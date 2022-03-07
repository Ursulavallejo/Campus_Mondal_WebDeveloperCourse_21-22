
import {fireEvent, render} from "@testing-library/react";
import DeleteTodoUser from "../user_crud/DeleteTodoUser";

let getByTestId

beforeEach(() => {
    const component = render(<DeleteTodoUser/>)
    getByTestId = component.getByTestId
})

test('Check that name that does not exist in DB gets correct response from DB', () => {
    const deleteButton = getByTestId('deleteButton')
    const dbResponse = getByTestId('DbResponse')
    const input = getByTestId('dataInput')



    fireEvent.click(deleteButton)

    setTimeout: () => {expect(getByTestId(dbResponse).textContent).toBe('User with name : "Magnus"does not exist in database!'), 500}

})
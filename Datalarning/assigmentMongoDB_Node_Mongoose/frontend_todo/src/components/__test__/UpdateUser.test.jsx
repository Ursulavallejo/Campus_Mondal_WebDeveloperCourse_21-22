import {fireEvent, render} from "@testing-library/react";
import UpdateUser from "../task_crud/UpdateUser";


let getByTestId

beforeEach(() =>{
    const component = render(<UpdateUser/>)
    getByTestId = component.getByTestId
})

test("change placeholder of input works correctly ", () => {
    const inputElement = getByTestId('input');
    fireEvent.change(inputElement, {
        target: {
            placeholder: "Name:"
        }
    });
    expect(inputElement.placeholder).toBe("Name:")
})

test('see if message DB gets correct response from DB', () => {
    const inputElement = getByTestId('updateBtn')
    const dbResponse = getByTestId('dbResponse')
    fireEvent.change(inputElement, {
        target: {
            data: ''
        }
    })
    setTimeout: () =>{expect(getByTestId(dbResponse).textContent).toBe('User with name : "Magnus"does not exist in database!'),500}
})
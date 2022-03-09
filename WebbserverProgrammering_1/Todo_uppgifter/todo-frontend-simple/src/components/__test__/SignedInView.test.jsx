import { render} from '@testing-library/react';
import TaskView from "../../views/TaskView/TaskView";

let getByTestId

beforeEach(() =>{
    const component = render(<TaskView/>)
    getByTestId = component.getByTestId
})

test('header render with correct text title logged in view TODO!', () => {
    expect(getByTestId('titleLogenIn').textContent).toBe('Hi Ursula! Welcome back! TODO List!')
})





import {render, fireEvent} from '@testing-library/react';
import Button from './button';

it('testing button render', () => {
    const {queryByTestId} = render( <Button text="Click me"/>);
    const myButton = queryByTestId('button');

    expect(myButton).toBeTruthy();
    expect(myButton?.textContent).toBe("Click me");
});

describe('clickButton', () => {
    it("onClick", () => {
        const {queryByTestId} = render( <Button text="Click me"/>);
        const myButton = queryByTestId('button');
    
        if(myButton) {
            expect(myButton.textContent).toBe('Click me');
            fireEvent.click(myButton);
            expect(myButton.textContent).toBe('You have clicked me');
        }

    })
});
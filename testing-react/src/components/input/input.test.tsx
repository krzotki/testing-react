
import {render, fireEvent} from '@testing-library/react';

import Input from './input';

it("test input render", () => {
    const {getByTestId} = render(<Input />);

    const myInput = getByTestId('testInput');
    const myCount = getByTestId('testInputLength');

    expect(myInput).toBeTruthy();
    expect(myCount).toBeTruthy();
})

describe("changeInputEvent", () => {
    it("onChange", () => {
        const {getByTestId} = render(<Input />);
    
        const myInput = getByTestId('testInput');
        const myCount = getByTestId('testInputLength');
    
        fireEvent.change(myInput, {target: {value: 12345}});
        expect(Number(myCount.textContent)).toBe(5);
    })
})
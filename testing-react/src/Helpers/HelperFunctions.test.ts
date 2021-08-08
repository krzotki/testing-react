
import { multiply, toLower, toUpper } from "./HelperFunctions";

test('test multiply helper function', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('test string to lower', () => {
    expect(toLower("XD")).toBe("xd");
})

test('test string to upper', () => {
    expect(toUpper("xd")).toBe("XD");
})
import { palindrome } from "../utils/for_testing.js";

test("Carmen's palindrome", () => {
    const result = palindrome("midudev")

    expect(result).toBe("vedudim")
})
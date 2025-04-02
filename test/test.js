import { expect } from "chai"; // Import Chai's assertion library
import fibonacci from "../fibonacci.js"; // Import the function to test
import { describe, it } from "mocha";

// Pair Programming: Worked with [Your Name] and [Your Partner's Name]

describe("Fibonacci Function", function () {
    it("should return 0 for fibonacci(0)", function () {
        expect(fibonacci(0)).to.equal(0);
    });

    it("should return 1 for fibonacci(1)", function () {
        expect(fibonacci(1)).to.equal(1);
    });

    it("should return 1 for fibonacci(2)", function () {
        expect(fibonacci(2)).to.equal(1);
    });


});

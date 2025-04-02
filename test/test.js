// Import Chai's expect function for assertions
import { expect } from "chai";

// Import the function to test
import fibonacci from "../fibonacci.js";

// Import Mocha's describe and it functions for test structuring
import { describe, it } from "mocha";

// 📌 Pair Programming Acknowledgment
// ==================================
// This code was collaboratively written by:
// - Timothy Christian Waniaye
// - Akol Bridget Tino
// Using Test-Driven Development (TDD) principles to implement and test the Fibonacci sequence.

describe("Fibonacci Function", function () {

    // 🔴 Test Case 1: Base Case
    // Fibonacci(0) should return 0
    it("should return 0 for fibonacci(0)", function () {
        expect(fibonacci(0)).to.equal(0);
    });

    // 🔴 Test Case 2: Base Case
    // Fibonacci(1) should return 1
    it("should return 1 for fibonacci(1)", function () {
        expect(fibonacci(1)).to.equal(1);
    });

    // 🔴 Test Case 3: Recursive Case
    // Fibonacci(2) = Fibonacci(1) + Fibonacci(0) = 1 + 0 = 1
    it("should return 1 for fibonacci(2)", function () {
        expect(fibonacci(2)).to.equal(1);
    });

    // 🔴 Test Case 4: Recursive Case
    // Fibonacci(3) = Fibonacci(2) + Fibonacci(1) = 1 + 1 = 2
    it("should return 2 for fibonacci(3)", function () {
        expect(fibonacci(3)).to.equal(2);
    });

    // 🔴 Test Case 5: Larger Recursive Case
    // Fibonacci(5) = Fibonacci(4) + Fibonacci(3) = 3 + 2 = 5
    it("should return 5 for fibonacci(5)", function () {
        expect(fibonacci(5)).to.equal(5);
    });

    // 🔴 Test Case 6: Larger Recursive Case
    // Fibonacci(6) = Fibonacci(5) + Fibonacci(4) = 5 + 3 = 8
    it("should return 8 for fibonacci(6)", function () {
        expect(fibonacci(6)).to.equal(8);
    });

});

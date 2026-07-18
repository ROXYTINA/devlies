import { describe, test, expect } from "vitest";
import { excuse } from "../src/excuse.js";


describe("Excuse generator", () => {

    test("returns an excuse", () => {

        const result = excuse();

        expect(result.text)
            .toBeTruthy();

    });


    test("returns category excuse", () => {

        const result = excuse("backend");

        expect(result.category)
            .toBe("backend");

    });

});
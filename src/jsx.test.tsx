
import React from "./jsx"
import { describe, expect, test } from "@jest/globals"

describe("Test component creation", () => {
    test("Creates paragraph component",  () => {
        expect((<><p></p></>)[0].outerHTML).toBe("<p></p>")
        expect((<g><><p>1</p><p>2</p></></g>).outerHTML).toBe("<g><p>1</p><p>2</p></g>")
    })
})
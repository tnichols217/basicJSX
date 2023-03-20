
import React, {CustomElements} from "./jsx"
import { describe, expect, test } from "@jest/globals"

describe("Test component creation", () => {
    test("Creates basic components",  () => {
        expect((<><p></p></>)[0].outerHTML).toBe("<p></p>")
        expect((<g><><p>1</p><p>2</p></></g>).outerHTML).toBe("<g><p>1</p><p>2</p></g>")
    })
    test("Test Insert CustomElement", () => {
        expect((<CustomElements.Insert obj={<p></p>}></CustomElements.Insert>).outerHTML).toBe("<p></p>")
    })
    test("Test Render CustomElement", () => {
        expect((<CustomElements.Render html="<p>1</p>"></CustomElements.Render>).outerHTML).toBe("<p>1</p>")
    })
})
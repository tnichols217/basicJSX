/*** @jsx createElement */
/*** @jsxFrag createFragment */

import { DOMParser, parseHTML } from "linkedom"

const {
    window, document
} = parseHTML("<!DOCTYPE html>")

type customElement = (props: Object, children: HTMLElement[]) => HTMLElement

export const CustomElements: {[key: string]: customElement} = {
    Insert: (props, children) => {
        return (props as any).obj as HTMLElement
    },
    
    Render: (props, children) => {
        let html = (props as any).html as String
        let parsed = parseHTML(html)
        let node = parsed.document.getRootNode()
        return node as HTMLElement
    }
}

export const createElement = (tag: string | Function, props: Object, ...children: (HTMLElement[] | HTMLElement)[]): HTMLElement | HTMLElement[] => {
    let childs = children.reduce<HTMLElement[]>((acc: HTMLElement[], item: HTMLElement | HTMLElement[]) => {
        if (Array.isArray(item)) {
            acc.push(...item)
        } else {
            acc.push(item)
        }
        return acc
    }, [])
    if (typeof tag === "function") return tag(props, childs);
    if (tag == undefined) return childs
    const element = document.createElement(tag);

    Object.entries(props || {}).forEach(([name, value]) => {
        if (name.startsWith("on") && name.toLowerCase() in window)
            element.addEventListener(name.toLowerCase().slice(2), value);
        else element.setAttribute(name, value.toString());
    });

    childs.forEach(child => {
        appendChild(element, child);
    });

    return element;
};

export const appendChild = (parent: HTMLElement, child: HTMLElement | HTMLElement[] | string) => {
    if (Array.isArray(child))
        child.forEach(nestedChild => appendChild(parent, nestedChild));
    else if (typeof child === "string")
        parent.appendChild(document.createTextNode(child));
    else
        parent.appendChild(child);
};

export default {
    createElement
}
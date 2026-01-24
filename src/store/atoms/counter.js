import {atom,selector } from 'recoil'

export const counterAtom = atom({
    default : 0,
    key : "counter"
});

export const isEvenSelector = selector({
    key : "isEven",
    get : ({get}) => {
        const counter = get(counterAtom);
        return counter % 2 === 0;
    }
});

import {todos} from "./todos"
import {atomFamily} from "recoil"

export const todoAtomFamily = atomFamily({
    key : "todoAtomFamily",
    default : id => {
            return todos.find(x => x.id == id)
    }
})
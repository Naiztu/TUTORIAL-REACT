import { atom } from "recoil"

export const notesState = atom<string[]>({
    key:"notesState",
    default: [],
})
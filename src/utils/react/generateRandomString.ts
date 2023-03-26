import { assoc } from "../js/assoc";

const generateRandomString = () => Math.random().toString(36).substring(2, 15);

const assignId = assoc('id', generateRandomString());

export const generateId = () => <O extends object>(obj: O) => assignId(obj);
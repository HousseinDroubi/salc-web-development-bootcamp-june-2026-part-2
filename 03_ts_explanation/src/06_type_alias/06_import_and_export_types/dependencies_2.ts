import type { my_type_1 } from "./dependencies_1.js";

type my_type_2 = my_type_1 & {
    age:number;
}

export type {my_type_2};
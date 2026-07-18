import { createRequire } from "module";

const require = createRequire(import.meta.url);

const excuses = require("./data/excuses.json");


export interface Excuse {
    category: string;
    text: string;
}


export function excuse(category?: string): Excuse {

    let available = excuses as Excuse[];


    if (category) {
        available = available.filter(
            item => item.category === category
        );
    }


    if (available.length === 0) {
        available = excuses;
    }


    const random =
        Math.floor(Math.random() * available.length);


    return available[random];
}
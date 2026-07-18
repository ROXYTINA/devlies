
// @ts-ignore
import excuses from "./data/excuses.json";


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
        available = excuses as Excuse[];
    }


    const random =
        Math.floor(Math.random() * available.length);


    return available[random];
}
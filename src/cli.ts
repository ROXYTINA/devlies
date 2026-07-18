#!/usr/bin/env node

import { excuse } from "./excuse.js";
import { displayExcuse } from "./ui.js";


const command = process.argv[2];


let category;


switch(command){

    case "roast":
        category = "roast";
        break;

    case "ai":
        category = "ai";
        break;

    case "horoscope":
        category = "horoscope";
        break;

    case "daily":
        category = "daily";
        break;

    case "random":
        category = undefined;
        break;

    default:
        category = command;
}


const result = excuse(category);


displayExcuse(
    result.text,
    result.category
);
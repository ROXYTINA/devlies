import chalk from "chalk";

export function displayExcuse(
    text:string,
    category:string
){

    console.log(
        `${chalk.bold("🤥  TINA says: ")}
         ${chalk.yellow(text)}
         ${chalk.gray("Category:")} ${chalk.green(category)}`,)
}
import chalk from 'chalk';

import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(chalk.green(`
        Программа для подготовки данных для REST API сервера.
        Пример:
    `) + chalk.blue(`
        cli.js --<command> [--arguments]
    `) + chalk.yellow(`
        Команды:
    `) + chalk.cyan(`
        --version:                   # выводит номер версии
    `) + chalk.magenta(`
        --help:                      # выводит текст описания команд
    `) + chalk.red(`
        --import <path>:             # импортирует данные из TSV
    `) + chalk.green(`
        --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных
    `));
  }
}

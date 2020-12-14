'use strict'

import minimist from 'minimist';
import { Todo } from "./todo.js"

let args = minimist(process.argv);
let todos = new Todo();

function runTodoApp() {

    if (args.l === true) {
        todos.listDataFromTodoList();
    } else if (args.hasOwnProperty('a')) {
        todos.addNewTodosToList(args.a);
    } else if (args.hasOwnProperty('r')) {
        todos.removeTodosFromList(args.r);
    } else if (args.hasOwnProperty('c')) {
        todos.completeTodos(args.c);
    } else {
        todos.listDataFromUsersGuide();
    }
}

runTodoApp();


'use strict'

import fs from 'fs';

class Todo {

    constructor(todos) {
        this.todos = todos;
    }

    getDataFromTodoList() {
        try {
            if (!fs.existsSync('./todos.txt')) throw Error('A fájl nem létezik!');
            this.todosList = (fs.readFileSync('./todos.txt', 'utf-8').split('\n'));
        }
        catch (err) {
            console.log(err.message);
        }
    }

    getDataFromUsersGuide() {
        try {
            if (!fs.existsSync('./usersguide.txt')) throw Error('A fájl nem létezik!');
            this.usersGuideList = (fs.readFileSync('./usersguide.txt', 'utf-8').split('\n'));
        }
        catch (err) {
            console.log(err.message);
        }
    }

    listDataFromTodoList() {
        try {
            if (!fs.existsSync('./todos.txt')) throw Error('A fájl nem létezik!');
            this.getDataFromTodoList();
            if (this.todosList.length === 0) {
                console.log('Nincs mára tennivalód! :)');
            } else {
                this.todosList.forEach((todos, index) => console.log(`${index+1}. ${todos}`));
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    listDataFromUsersGuide() {
        try {
            if (!fs.existsSync('./usersguide.txt')) throw Error('A fájl nem létezik!');
            this.getDataFromUsersGuide();
            if (this.usersGuideList.length === 0) {
                console.log('Nincs használati útmutató!');
            } else {
                this.usersGuideList.forEach((text) => console.log(`${text}`));
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    addNewTodosToList(newTodos) {
        try {
            if (!fs.existsSync('./todos.txt')) throw Error('A fájl nem létezik!');
            if (newTodos === '' || newTodos === true) throw Error('Nem lehetséges új feladat hozzáadása: nincs megadva feladat!');
            fs.appendFileSync('./todos.txt', '\n' + newTodos);
            console.log('Megtörtént a hozzáadás!');
        }
        catch (err) {
            console.log(err.message);
        }
    }

    removeTodosFromList(r) {
        this.getDataFromTodoList();
        try {
            if (!fs.existsSync('./todos.txt')) throw Error('A fájl nem létezik!');
            if (r === 0) throw Error('Nem lehetséges az eltávolítás: a megadott index nem lehet 0!');
            if (r === '' || r === true) throw Error('Nem lehetséges az eltávolítás: nem adott meg indexet!');
            if (r > this.todosList.length) throw Error('Nem lehetséges az eltávolítás: túlindexelési probléma adódott!');
            if (typeof r != 'number') throw Error('Nem lehetséges az eltávolítás: a megadott index nem szám!');
            this.todosList.splice(r-1, 1);
            fs.writeFileSync('./todos.txt', this.todosList.join("\n"));
            console.log('Megtörtént a törlés!');
        }
        catch (err) {
            console.log(err.message);
        }
    }

    completeTodos(c) {
        this.getDataFromTodoList();
        try {
            if (!fs.existsSync('./todos.txt')) throw Error('A fájl nem létezik!');
            if (c === 0) throw Error('Nem lehetséges az eltávolítás: a megadott index nem lehet 0!');
            if (c === '' || c === true) throw Error('Nem lehetséges az eltávolítás: nem adtál meg indexet!');
            if (c > this.todosList.length) throw Error('Nem lehetséges az eltávolítás: túlindexelési probléma adódott!');
            if (typeof c != 'number') throw Error('Nem lehetséges az eltávolítás: a megadott index nem szám!');
            
            this.todosList[c-1] = (`[x] ${this.todosList[c-1]}`);
            fs.writeFileSync('./todos.txt', this.todosList.join("\n"));
            console.log('Megtörtént a művelet!');    
        }
        catch (err) {
            console.log(err.message);
        }
    }
}

export { Todo };
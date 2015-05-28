'use strict';

export default class TodoController {

    constructor() {
        this.todos = {};
    }

    all() {
        console.log('TODO:GETALL');
        return Object.values(this.todos);
    }

    get(id) {
        console.log('TODO:GET', id);
        return (id in this.todos ? this.todos.id : null);
    }

    post(todo) {
        console.log('TODO:POST', todo);
        const id = Math.random();
        todo.id = id;
        this.todos[todo.id] = todo;
        return todo;
    }

    put(id, todo) {
        console.log('TODO:PUT', id, todo);
        if(!(id in this.todos)) { return null; }
        this.todos[id] = todo;
        return todo;
    }

    delete(id) {
        console.log('TODO:DELETE', id);
        if(!(id in this.todos)) { return null; }
        todo = this.todos[id];
        delete this.todos[id];

        return todo;
    }
}

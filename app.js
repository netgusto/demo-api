'use strict';

import express from 'express';
import bodyParser from 'body-parser';

import ApiTodoController from './ApiTodoController';

const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send(`
        <h1>Hello, World !</h1>
        <p>Vous cherchez peut-être <a href="/api/todos">l'API REST todos</a> ?</p>
    `);
});

const todoController = new ApiTodoController();

const apiTodoRouter = express.Router();

apiTodoRouter.route('/')
    .get((req, res) => res.json(todoController.all()))
    .post((req, res) => res.json(todoController.post(req.body)));

apiTodoRouter.route('/:id')
    .get((req, res) => res.json(todoController.get(req.params.id)))
    .put((req, res) => res.json(todoController.put(req.params.id, req.body)))
    .delete((req, res) => res.json(todoController.delete(req.params.id)));

const apiRouter = express.Router();
apiRouter.use('/todos', apiTodoRouter);
app.use('/api', apiRouter);

const server = app.listen(port, function () {
    console.log('La magie opère sur http://localhost:' + port);
});

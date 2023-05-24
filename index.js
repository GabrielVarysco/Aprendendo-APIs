const restify = require("restify")
const errors = require("restify-errors")

const servidor = restify.createServer({
    name : 'loja_dsapi',
    version : '1.0.0'
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(restify.plugins.queryParser());
servidor.use(restify.plugins.bodyParser());

servidor.listen(8001, function(){
    console.log("%s executando em %s", servidor.name, servidor.url);
});

var knex = require('knex')({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'loja_dsapi'
    }
});

/*Clientes*/
servidor.get('/', (req, res, next) => {
    res.send('Bem-Vindo(a) à API loja_dsapi!')
});

servidor.get('/clientes', (req, res, next) => {
    knex('clientes').then((dados) => {
        res.send(dados)
    }, next);
});

servidor.get('/clientes/:idCliente', (req, res, next) => {
    const idCliente = req.params.idCliente;
    knex('clientes')
        .where('id', idCliente)
        .first()
        .then((dados) => {
            if(!dados){
                return res.send(new errors.BadRequestError('Cliente não encontrado'))
            }
            res.send(dados)
        }, next);
});

servidor.post('/clientes', (req, res, next) => {
    knex('clientes')
        .insert(req.body)
        .then((dados) => {
            res.send(dados)
        }, next);
});

servidor.put('/clientes/:idCliente', (req, res, next) => {
    const idProduto = req.params.idProd;
    knex('clientes')
        .where('id', idCliente)
        .update(req.body)
        .then((dados) => {
            if(!dados){
                return res.send(new errors.BadRequestError('Cliente não encontrado'))
            }
            res.send('Cliente atualizado.')
        }, next);
});

/* produtos */ 

servidor.get('/produtos', (req, res, next) => {
    knex('produtos').then((dados) => {
        res.send(dados)
    }, next);
});

servidor.get('/produtos/:idProduto', (req, res, next) => {
    const idProduto = req.params.idProduto;
    knex('produtos')
        .where('id', idProduto)
        .first()
        .then((dados) => {
            if(!dados){
                return res.send(new errors.BadRequestError('Produto não encontrado'))
            }
            res.send(dados)
        }, next);
});


/* Pedidos */

servidor.get('/pedidos', (req, res, next) => {
    knex('pedidos').then((dados) => {
        res.send(dados)
    }, next);
});

servidor.post('/pedidos', (req, res, next) => {
    knex('pedidos')
        .insert(req.body)
        .then((dados) => {
            res.send(dados)
        }, next);
});

servidor.get('/pedidos/:idPedido', (req, res, next) => {
    const idPedido = req.params.idPedido;
    knex('pedidos')
        .where('id', idPedido)
        .first()
        .then((dados) => {
            if(!dados){
                return res.send(new errors.BadRequestError('Pedido não encontrado'))
            }
            res.send(dados)
        }, next);
});

servidor.post('/adicionar', (req, res, next) => {
    knex('pedidos_produtos')
        .insert(req.body)
        .then((dados) => {
            res.send(dados);
        }, next);
});



/* Parte do administrador */

servidor.post('/admin/produtos', (req, res, next) => {
    knex('produtos')
        .insert(req.body)
        .then((dados) => {
            res.send(dados)
        }, next);
});

servidor.put('/admin/produtos/:idProduto', (req, res, next) => {
    const idProduto = req.params.idProduto;
    knex('produtos')
        .where('id', idProduto)
        .update(req.body)
        .then((dados) => {
            if(!dados){
                return res.send(new errors.BadRequestError('Produto não encontrado'))
            }
            res.send('Produto atualizado.')
        }, next);
});

/*administrador Deletar produtos e pedidos */
servidor.del('/admin/produtos/:idProduto', (req, res, next) => {
    const idProduto = req.params.idProduto;
    knex('produtos')
        .where('id', idProduto)
        .delete()
        .then((dados) => {
            if(!dados){
                return res.send(new errors.BadRequestError('Produto não encontrado'))
            }
            res.send('Produto deletado.')
        }, next);
});

servidor.del('/admin/pedidos/:idPedido', (req, res, next) => {
    const idPedido = req.params.idPedido;
    knex('pedidos')
        .where('id', idProduto)
        .delete()
        .then((dados) => {
            if(!dados){
                return res.send(new errors.BadRequestError('Pedido não encontrado'))
            }
            res.send('Pedido deletado.')
        }, next);
});

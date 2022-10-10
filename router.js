const express = require('express');
const productos = require('./productosArray')
const app = express();

const cors = require('cors')
app.use(cors());

const routerApi= express.Router();
app.use('/api', routerApi)


routerApi.get('/',(req,res)=> {
    if(req.query.categoria === 'notebooks'){
        return res.send(productos[3]);
    } else if (req.query.categoria === 'smartphones'){
        return res.send(productos[0]);
    } else if(req.query.categoria === 'tablets'){
        return res.send(productos[1]);
    } else if(req.query.categoria === 'headsets'){
        return res.send(productos[2])
    } else if(req.url === '/'){
        return res.send(productos);
    } else {
        const error = res.status(404);
        return res.status(404).send(`No se encontro la pagina :/   ${error}`)
    }
})


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=>{ 
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`)
})
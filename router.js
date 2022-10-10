const express = require('express');
const arrayProductos = require('./datos.js')
const app = express();

const cors = require('cors')
app.use(cors());

const routerApi= express.Router();
app.use('/api', routerApi);


routerApi.get('/',(req,res)=> {
    if(req.query.categoria === 'notebooks'){
        return res.send(arrayProductos.notebooks);
    } else if (req.query.categoria === 'smartphones'){
        return res.send(arrayProductos.smartphones);
    } else if(req.query.categoria === 'tablets'){
        return res.send(arrayProductos.tablets);
    } else if(req.query.categoria === 'headsets'){
        return res.send(arrayProductos.headsets)
    } else if(req.url === '/'){
        return res.send(arrayProductos);
    } else {
        const error = res.status(404);
        return res.status(404).send(`No se encontro la pagina :/   ${error}`)
    }
})


const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=>{ 
    console.log(`El servidor esta escuchando en el puerto: ${PUERTO}`)
})
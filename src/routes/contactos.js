const express  = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

router.get('/', (req,res)=>{
    mysqlConnection.query('SELECT * FROM contacto',(err,rows,fields) =>{
        if (!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
})
/* GET */
router.get('/:id',(req,res)=>{
    const{ id } = req.params;
    mysqlConnection.query('SELECT * FROM contacto where id = ?', [id], (err, rows, fields)=> {
        if (!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

/* POST */
router.post('/',(req,res) => {
    const {id,nombre, apellido, telefono,correo,ciudad,favorito,avatar} = req.body;
    const query = `call contactoAddOrEdit2(?,?,?,?,?,?,?,?);
    `;
    mysqlConnection.query(query,[id,nombre, apellido, telefono,correo,ciudad,favorito,avatar], (err, rows, fields) => {
        if (!err){
            res.json({status : 'Contacto guardado'});
        }else{
            console.log(err);
        }
    });
})

/* PUT */
router.put('/:id',(req,res) => {
    const {nombre, apellido, telefono,correo,ciudad,favorito,avatar} = req.body;
    const {id} = req.params;
    const query = `call contactoAddOrEdit2(?,?,?,?,?,?,?,?);
    `;
    mysqlConnection.query(query,[id,nombre, apellido, telefono,correo,ciudad,favorito,avatar], (err, rows, fields) => {
        if (!err){
            res.json({status : 'Contacto actualizado'});
        }else{
            console.log(err);
        }
    });
})
/* PUT */
router.delete('/:id',(req,res) => {
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM contacto where id = ?',[id], (err, rows, fields) => {
        if (!err){
            res.json({status : 'Contacto eliminado'});
        }else{
            console.log(err);
        }
    });
})

module.exports = router;
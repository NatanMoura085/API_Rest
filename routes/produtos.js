const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{

    res.status(200).send({mesage:'usando rota produtos No Get'})

});

router.post('/',(req,res,next)=>{
res.status(201).send({mesage:'do Tipo POST'})

})

module.exports = router;
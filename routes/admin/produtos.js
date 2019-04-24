const express = require('express');
const router = express.Router();
const Produto = require('../../models/produto')



router.get('/', async function (req, res, next) {
    let _produtos = await Produto.find({});
    res.render('admin/produtos/index', {produtos: _produtos})
});

router.post('/', function (req, res, next) {
    Produto.deleteOne({_id: req.body.id}, function(erro){
        if(erro){
            console.log(erro);
        } else{
            res.redirect("/admin/produtos");
        }
    })
});

router.post('/cadastrar', function (req, res, next) {
    let produto = new Produto({ 
      titulo: req.body.titulo,
      preco: req.body.preco,
      descricao: req.body.descricao,
    });
      produto.save(function(erro){
          if(erro){
              console.log(erro);
          }
          else{
                  res.redirect('/admin/produtos');
          }
          
      });

    });

    router.get('/cadastrar', function (req, res, next) {
        res.render('admin/produtos/cadastrar', {})
    });
    
    router.get('/editar', async function (req, res, next) {
        try{
      let _produto = await Produto.findOne({ 
        _id: req.query.id
      });
        res.render('admin/produtos/editar',{produto: _produto});
            
        }catch(error){
            return next (error)
        }
    });
    
    router.post('/atualizar', async function(req, res, next) {
        try{
            await Produto.findByIdAndUpdate(req.body.id,{titulo:req.body.titulo},{preco:req.body.preco},{descricao:req.body.descricao})
            res.redirect('/admin/produtos')
        } catch (error){
            return next (error)
        }
    });


module.exports = router;
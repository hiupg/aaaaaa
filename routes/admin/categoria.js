var express = require('express');
var router = express.Router();
const Categoria = require('../../models/categoria')



router.get('/', async function (req, res, next) {
    let _categorias = await Categoria.find({});
    res.render('admin/categorias/index', {categorias: _categorias})
});

router.post('/', function (req, res, next) {
    Categoria.deleteOne({_id: req.body.id}, function(erro){
        if(erro){
            console.log(erro);
        } else{
            res.redirect("/admin/categorias");
        }
    })
});

router.post('/cadastrar', function (req, res, next) {
    let categoria = new Categoria({ 
      titulo: req.body.titulo,
    });
      categoria.save(function(erro){
          if(erro){
              console.log(erro);
          }
          else{
                  res.redirect('/admin/categorias');
          }
          
      });

    });

    router.get('/cadastrar', function (req, res, next) {
        res.render('admin/categorias/cadastrar', {})
    });
    
    router.get('/editar', async function (req, res, next) {
        try{
      let _categoria = await Categoria.findOne({ 
        _id: req.query.id
      });
        res.render('admin/categorias/editar',{categoria: _categoria});
            
        }catch(error){
            return next (error)
        }
    });
    
    router.post('/atualizar', async function(req, res, next) {
        try{
            await Categoria.findByIdAndUpdate(req.body.id,{titulo:req.body.titulo})
            res.redirect('/admin/categorias')
        } catch (error){
            return next (error)
        }
    });
module.exports = router;
const Produto = require('../model/produto')

module.exports = {
  async list(req,res){

  },
  async filtro(req,res){

  },
  async abreadd(req,res){
    res.render('admin/produto/add.ejs',{msg: req.flash('msg')})

  },
  async add(req,res){

  },
  async abreedit(req,res){

  },
  async edit(req,res){

  },
  async del(req,res){

  },
  




}
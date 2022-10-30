const express = require('express');

class JSONRouter {
  constructor(service) {
    this.router = express.Router();
    this.service = service;

    this.router.get('/', (req, res) => {
      res.json({
        status: 'ok',
        data: service.getArticlesData(),
      });
    });

    this.router.get('/short', (req, res) => {
      res.json({
        status: 'ok',
        data: service.getArticlesBriefData(),
      });
    });

    this.router.get('/tree', (req, res) => {
      res.json({
        status: 'ok',
        data: service.getArticlesTree(),
      });
    });

    this.router.get('/:id', (req, res) => {
      const { id } = req.params;
      res.json({
        status: 'ok',
        data: service.getArticle(id),
      });
    });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = JSONRouter;

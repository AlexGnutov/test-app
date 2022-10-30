const express = require('express');
const protobuf = require('protobufjs');

class PBRouter {
  constructor(service) {
    this.router = express.Router();
    this.service = service;
  }

  async run() {
    const root = await protobuf.load(`${__dirname}/config.proto`);
    const Message = root.lookupType('configpackage.Message');

    this.router.get('/', (req, res) => {
      const data = this.service.getArticlesData();
      res.send(Message.encode({
        status: 'ok',
        data,
      }).finish());
    });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = PBRouter;

const express = require('express');
require('dotenv').config();

const app = express();

// import db, services and routers
const SampleDB = require('./db/sample-db');
const JSONService = require('./services/json-service');
const JSONRouter = require('./routes/json-router');
const PBRouter = require('./routes/pb-router');

// init and fill db + build tree
const sampleDB = new SampleDB(process.env.ARTICLES_NUMBER);
sampleDB.fill();

// create service
const jsonService = new JSONService(sampleDB);

// create routers
const jsonRouter = new JSONRouter(jsonService);
const pbRouter = new PBRouter(jsonService);

pbRouter.run()
  .then(() => {
    // serve frontend
    app.use(express.static(process.env.FRONTEND_FOLDER));

    // connect routers
    app.use('/api/json', jsonRouter.getRouter());
    app.use('/api/pb', pbRouter.getRouter());

    // launch server
    const PORT = process.env.APP_PORT;
    app.listen(PORT, () => {
      console.log(`Test app is on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

const mongoose = require('mongoose');
const configFiles = require('../configFiles');

const db = mongoose.createConnection("mongodb://localhost:27017/cms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

configFiles.forEach(({ endpoint, fields }) => {
  let schema = {};

  fields.forEach((field, index) => {
    const { fieldName, ...props } = field;

    if (fields.length !== index) {
      schema[fieldName] = props;
    }
  });

  let collection = new mongoose.Schema(schema);

  exports[endpoint.charAt(0).toUpperCase() + endpoint.slice(1)] = db.model(endpoint, collection);

  schema = {};
});



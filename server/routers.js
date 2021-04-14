const express = require('express');
const router = express.Router();
const configFiles = require('../configFiles');

// const mongoose = require('mongoose');
// const db = mongoose.createConnection('mongodb://localhost:27017/cms', { useUnifiedTopology: true, useNewUrlParser: true });

configFiles.forEach(({endpoint}) => {
    const endpointStartUpperCase = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);
    const TheEndpoint = require('./models')[endpointStartUpperCase];

    router.get(`/${endpoint}`, (req, res) => {
        console.log("se llama")
        TheEndpoint.find({}, (err, data) => {
            res.send({
                [endpoint]: data
            });
        });
    });

    router.post(`/${endpoint}`, (req, res) => {
        // const requestBody = req.body;

        const collection = new TheEndpoint({
            "name": "Comida",
            "state": "Fria",
            "quality": "Regular",
            "price": 10,
            "quantity": 1
        });

        collection
          .save()
          .then(function (product) {
            console.log(``);
          })
          .catch(function (err) {
            console.error("Error while the migration was made: %s", err);
          });
    });

    router.delete(`/${endpoint}/:id`, (req, res) => {
        const { id } = req.params;
        TheEndpoint.findOneAndDelete({
            _id: id
            })
            .exec((err, post) => {
              if(err)
                return res.status(500).json({code: 500, message: 'There was an error deleting the post', error: err})
              res.status(200).json({code: 200, message: 'Post deleted', deletedPost: post})
            });
        });
    router.put(`/${endpoint}/:id`, (req, res) => {
        const promise = TheEndpoint.findByIdAndUpdate(req.params.id, {
            name: "Asada",
            state: "Congelada",
            quality: "Buena",
            price: 2,
            quantity: 10
            });
        promise
          .then((data) => {
            res.json(data);
          })
          .catch((err) => {
            res.json(err);
          });
    })
});

exports.routers = router;



const express = require('express');
const router = express.Router();
const configFiles = require('../configFiles');

// const mongoose = require('mongoose');
// const db = mongoose.createConnection('mongodb://localhost:27017/cms');

configFiles.forEach(({crudEndpoint, endpoint}) => {
    const endpointStartUpperCase = endpoint.charAt(0).toUpperCase() + endpoint.slice(1);
    const TheEndpoint = require('./models')[endpointStartUpperCase];

    const {update, deleteProduct, add, read} = crudEndpoint;
    router.get(`/${read}`, (req, res) => {
        res.send({
            "saludo": "Hola"
        })
    })

    // router.post(`/${update}`, (req, res) => {
        
    // })

    // router.get(`/${read}`, (req, res) => {
        
    // })

    // router.delete(`/${deleteProduct}`, (req, res) => {
        
    // })
});

exports.routers = router;



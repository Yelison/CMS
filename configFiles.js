const mongoose = require('mongoose');
const Types = mongoose.Schema.Types; 

const configFiles = [
    {
        "endpoint": "products",
        "crudEndpoint": {
            "update": "update-product",
            "deleteProduct": "delete-product",
            "add": "add-product",
            "read": "read-product"
        },
        "fields": [
            {
                "fieldName": "name",
                "type": Types.String,
                "isRequired": true
            },
            {
                "fieldName": "state",
                "type": Types.String
            },
            {
                "fieldName": "quality",
                "type": Types.String
            },
            {
                "fieldName": "price",              
                "type": Types.Number,
                "isRequired": true
            },
            {
                "fieldName": "quantity",
                "type": Types.Number,
                "isRequired": true
            }
        ]
    },
    {
        "endpoint": "orders",
        "crudEndpoint": {
            "update": "update-order",
            "remove": "delete-order",
            "add": "add-order",
            "read": "read-order"
        },
        "fields": [
            {
                "fieldName": "name",
                "type": Types.String,
                "isRequired": true
            },
            {
                "fieldName": "state",
                "type": Types.String
            },
            {
                "fieldName": "quality",
                "type": Types.String
            },
            {
                "fieldName": "price",              
                "type": Types.Number,
                "isRequired": true
            },
            {
                "fieldName": "quantity",
                "type": Types.Number,
                "isRequired": true
            }
        ]
    },
    {
        "endpoint": "animals",
        "crudEndpoint": {
            "update": "update-order",
            "remove": "delete-order",
            "add": "add-order",
            "read": "read-order"
        },
        "fields": [
            {
                "fieldName": "name",
                "type": Types.String,
                "isRequired": true
            },
            {
                "fieldName": "state",
                "type": Types.String
            },
            {
                "fieldName": "quality",
                "type": Types.String
            },
            {
                "fieldName": "price",              
                "type": Types.Number,
                "isRequired": true
            },
            {
                "fieldName": "quantity",
                "type": Types.Number,
                "isRequired": true
            }
        ]
    }
];

module.exports = configFiles;
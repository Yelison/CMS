const models = require('./server/models');

const product = new models.Products({
    name: "Carne",
    state: "Frita",
    quality: "Regular",
    price: 2,
    quantity: 10
    }
)

product.save().
then(function(product){
  console.log("User saved");
}).
catch(function(err){
  console.error("Error while the migration was made: %s", err);
});
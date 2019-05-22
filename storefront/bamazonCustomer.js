var mysql = require("mysql");
var inquirer = require("inquirer");
var selectedProduct;
var unitsAvailable;


var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  landingPage();
});

function landingPage() {
    var query = "SELECT * FROM products GROUP BY id";
    connection.query(query, function(err, res) {
    console.log(res);
    selectProduct();
    });
}

function selectProduct() {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "What would you like to buy? Enter id # here: ",
    })
    .then(function(response) {
        connection.query("SELECT * FROM products WHERE ?", { id: response.id }, function(err, res) {
            selectedProduct = res;
            console.log("========================================");
            console.log("Product Name: ", selectedProduct[0].product_name);
            console.log("Price: $", selectedProduct[0].price);
            unitsAvailable = res[0].units_available;
            console.log("Units in stock: ", unitsAvailable);
            purchase();
        })
    });
}


function purchase() {      
        inquirer
            .prompt({
                name: "units",
                type: "input",
                message: "How many units would you like to buy?",
            })
            .then(function(response) {
                if (unitsAvailable + 1 > response.units) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?", 
                        [
                            {
                                units_available: unitsAvailable - response.units
                            },
                            {
                                id: selectedProduct[0].id
                            }
                        ],
                        function(error) {
                            if (error) throw error;
                            console.log("Order succesfuly placed");
                            console.log("Total Cost: $", selectedProduct[0].price * response.units)
                            connection.query("SELECT units_available FROM products WHERE ?", { id: selectedProduct[0].id }, function(err, res) {
                            console.log("New Inventory: ", res[0].units_available)
                            })
                            console.log("================================");
                            nowWhat();
                        }
                    )
                } else {
                    console.log("Sorry. Insufficient inventory!");
                    nowWhat();
                }
                
            })
}

function nowWhat() {
    inquirer
        .prompt({
            name: "next",
            type: "list",
            choices: ["Shop For More", "Finished Shopping"] 
        })
        .then(function(response) {
            if(response.next === "Shop For More") {
                landingPage();
            } else {
                console.log("You suck!")
            }
        })
}
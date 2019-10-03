var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Welcome to Bamazon!" + connection.threadId + "\n");
    start();
});

function start() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        // console.log(res)
        var table = new Table({
            head: ["Product ID", "Product Name", "Price", "Quantity"],
            colWidths: [15, 20, 20, 10]
        });
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity]
            );
        };
        console.log(table.toString());
        userPrompt();
    });
}

function userPrompt() {
    inquirer.prompt([{
                type: "number",
                message: "What is the ID of the product would you like to buy?",
                name: "id"
            },
            {
                type: "number",
                message: "how many units of the product would you like to buy?",
                name: "quantity"
            },
        ])
        .then(function(cart) {
            var quantity = cart.quantity;
            var itemID = cart.id;

            connection.query("SELECT * FROM products WHERE item_id=" + itemID, function(err, selectedItem) {
                if (err) throw err;
                if (selectedItem[0].stock_quantity - quantity >= 0) {
                    var total = selectedItem[0].price * quantity
                    connection.query('UPDATE products SET stock_quantity=? WHERE item_id=?', [selectedItem[0].stock_quantity - quantity, itemID],
                        function(err, inventory) {
                            if (err) throw err;
                            console.log("Item in stock! Thank you for your purchase. Here is your: " + total);
                            start();
                        });
                } else {
                    console.log("Insufficient inventory.")
                    start();
                };
            });
        });
}
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : '10.0.0.1',
    user     : 'hsmskimm',
    password : 'khkh2121',
    database : 'hsmskimm'
});	

module.exports = connection;

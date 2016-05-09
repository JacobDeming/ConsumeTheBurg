var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'd5x4ae6ze2og6sjo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'zim8ou3ozhrdmf3n',
    password: 'wpez4i0sq83rtfd4',
    database: 'pf0hwt54gj12cb0a'
});

connection.connect(function(err){
    if (err){
        console.error('error connecting: '+err.stack);
        return;}
    console.log('connected as id '+connection.threadId);});

module.exports=connection;
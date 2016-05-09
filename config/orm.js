var connection=require('./connection.js');

var orm={
    selectAll: function(tableInput,cb){
        var s='SELECT * FROM '+tableInput+';';
        connection.query(s,function(err,result){
            cb(result);})},

    insertData: function(tableInput,name,cb){ 
        var s='INSERT INTO '+tableInput+' (burger_name) VALUES ("'+name+'")';
        connection.query(s,function(err,result){
            cb(result);})},

    changeData: function(tableInput,id,cb){
        var s='UPDATE '+tableInput+' SET devoured=1 WHERE id='+id+';';
        connection.query(s,function(err,result){
            console.log(result);
            cb(result);})}};
    
module.exports=orm;
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://pauldrot:parola1234@ds121575.mlab.com:21575/paulrotardb';

class ToDoService{
    
    constructor(req, res){
        this.req = req
        this.res = res
    }
      
    getToDo(){
        let self = this;
        try{
            MongoClient.connect(url, function(err, db){
                assert.equal(null, err);
                let toDoList = []
                let cursor = db.collection('consumptionOrder').find();
                
                cursor.each(function(err, doc) {
                    assert.equal(err, null);
                    
                        return self.res.status(200).json({
                            status : 'success',
                            data : toDoList
                        })
                    
                });
            });
        }
        catch(error){
            return self.res.status(500).json({
                status : 'error',
                error : error
            })
        }
    }
}
module.exports = ToDoService
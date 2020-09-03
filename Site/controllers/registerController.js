const path = require('path');


module.exports ={ 
    home:function(req,res) {
        res.render('register-user',{
            title:'registrar usuario'
        })
    }
}
const path = require('path');


module.exports ={ 
    home:function(req,res) {
        res.render('index',{
            title:'home del sitio'
        })
    }
}
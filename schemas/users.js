/**
 * Created by MAC on 17/4/1.
 */

var mongoose = require('mongoose');

//定义表结构
module.exports = new mongoose.Schema({
    //用户名
    username : String,
    //密码
    password : String,
    //管理员
    isAdmin : {
        type : Boolean,
        default : false
    }
    //...

});
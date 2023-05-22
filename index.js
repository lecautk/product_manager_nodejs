'use strict';
const mongoose = require('mongoose');
const PASSWORD = process.env.PASSWORD || 'abcd1234';
const DB_USERNAME = process.env.DB_USERNAME || 'product_manager';

const connectString = `mongodb+srv://vnsdrking:${PASSWORD}@vnsdrking.1bmd9om.mongodb.net/${DB_USERNAME}`

class Database {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect(connectString)
        .then(() => {
            console.log('Đã kết nối được csdl, tên csdl là : ' + DB_USERNAME)
        })
        .catch(err => {
            console.error('Lỗi ko kết nối đc csdl')
        })
    }
}

module.exports = new Database()

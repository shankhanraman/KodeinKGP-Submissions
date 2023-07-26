const mongoose = require('mongoose');
const router = require('../routes/quote');
const quoteSchema = new mongoose.Schema({
    author:{
        type:String,
    },
    quote:{
        type:String,
    }
})
module.exports = mongoose.model('Quote',quoteSchema);
module.exports = router;

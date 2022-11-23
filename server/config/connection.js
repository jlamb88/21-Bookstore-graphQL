const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jlamb-admin:scotland1md@cluster0.dcrn6ph.mongodb.net/mod21?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});//, { || 'mongodb://localhost/googlebooks', {

// useCreateIndex: true,
// useFindAndModify: false,
// });

module.exports = mongoose.connection;

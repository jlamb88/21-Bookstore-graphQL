const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jlamb-admin:Scotl\@nd1md@cluster0.dcrn6ph.mongodb.net/?retryWrites=true&w=majority', {// || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;

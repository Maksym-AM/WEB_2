
const mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Maksym-AM:samsungj8@cluster0.nubyf.mongodb.net/Cluster0?retryWrites=true&w=majority',{
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.set('useFindAndModify', false);
console.log("Connect with db...")
module.exports=mongoose;

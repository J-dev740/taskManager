const mongoose= require('mongoose')

  const connectDB=async (url)=>{

    await 
    mongoose
    .connect(url,{
      useNewUrlParser:true,
      useCreateIndex:true,
      useFindAndModify:false,
      useUnifiedTopology:true, 
    })
    console.log('connected ')
  }

  module.exports={connectDB}
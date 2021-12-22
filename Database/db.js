const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://user:<password>@oscar.wpgq9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true
}),

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
})

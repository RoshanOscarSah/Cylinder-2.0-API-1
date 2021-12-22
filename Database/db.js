const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://user:<password123@%>@oscar.wpgq9.mongodb.net/oscar?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology : true
}),

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
})

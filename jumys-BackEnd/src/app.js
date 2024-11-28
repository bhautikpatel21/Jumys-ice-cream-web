require('dotenv').config();
const express = require('express');
const app = express();                                           
const port = process.env.PORT;                                           
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const imagePath = path.join(__dirname,'images');
app.use('/images',express.static(imagePath));

app.use(express.json());
app.use(cors());

const adminRoutes = require('./Routes/Admin/Index.Routes');
app.use('/api/admin',adminRoutes);

const userRoutes = require('./Routes/User/Index.Routes');
app.use('/api/user', userRoutes);

async function main() {
    await mongoose.connect(process.env.MONGO_DB,{
    });          
}
main()
.then(() => console.log('DB is connected...'))
.catch( err => console.log(err.message));

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});
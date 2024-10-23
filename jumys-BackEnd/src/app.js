require('dotenv').config();
const express = require('express');
const app = express();                                           
const port = process.env.PORT;                                           
app.use(express.json());
const mongoose = require('mongoose');

const adminRoutes = require('./Routes/Admin/Login.Routes');
app.use('/api/admin',adminRoutes);

const userRoutes = require('./Routes/User/Login.Routes');
app.use('/api/user',userRoutes);

async function main() {
    await mongoose.connect(process.env.MONGO_DB);          
}
main()
.then(() => console.log('DB is connected...'))
.catch( err => console.log(err.message));

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});
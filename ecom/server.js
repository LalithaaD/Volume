//Import necessary modules
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');

//Set up Express application
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());
// Step 5: Connect to MongoDB
const url = 'mongodb+srv://ecom:8MEXOYYvHAf6ULXy@cluster0.a5qz4w7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
const client = MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  console.log('Connected to Database');
  
});

//Endpoint to get all products
app.get('/products', async (req, res) => {
  const db = (await client).db('sample_mflix'); 
  const products = await db.collection('products').find({}).toArray();
  res.json(products);
});

//Create order enpoint to receive details and insert into oders collection
app.post('/order', async (req, res) => {
  const { email, cartItems, total , shippingAddress} = req.body;
  const db = (await client).db('sample_mflix'); 
  const result = await db.collection('orders').insertOne({ email, cartItems, total, shippingAddress });
  res.json({ success: true, message: 'Order placed successfully', data: result.insertedId });
});


//Define /login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const db = (await client).db('sample_mflix'); 
  const user = await db.collection('users').findOne({ email });

  if (user) {
    if (user.password === password) {
      res.json({ success: true, message: 'Login successful', email: user.email, name: user.name, studentNumber: user.studentNumber, shippingAddress: user.shippingAddress});
    } else {
      res.json({ success: false, message: 'Incorrect password' });
    }
  } else {
    res.json({ success: false, message: 'User not found' });
  }
});

//Create endpoint to update user details
app.post('/updateUser', async (req, res) => {
  const { emailAddress, name, studentNumber, shippingAddress } = req.body;
  const db = (await client).db('sample_mflix'); 
  const result = await db.collection('users').updateOne({ email: emailAddress }, { $set: { name, studentNumber, shippingAddress } });
  console.log("inserted data",result)
  res.json({ success: true, message: 'User details updated successfully', data: result });
});

//Start the server
const PORT = 3001; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
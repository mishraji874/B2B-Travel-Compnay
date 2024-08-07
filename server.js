const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const admin = require('firebase-admin');
const path = require('path');

const flightsRoute = require('./routes/flights');
const trainsRoute = require('./routes/trains');
const busesRoute = require('./routes/buses');
const hotelsRoute = require('./routes/hotels');
const cabsRoute = require('./routes/cabs');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();

app.use('/api/flights', flightsRoute);
app.use('/api/trains', trainsRoute);
app.use('/api/buses', busesRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/cabs', cabsRoute);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// module.exports = db;

const express = require('express');
const { Pool } = require('pg');
const redis = require('redis');

const app = express();
const PORT = 3001;

console.log('Product Service Started...');

// PostgreSQL Connection
const pool = new Pool({
    user: process.env.POSTGRES_USER || 'postgres',
    host: process.env.POSTGRES_HOST || 'postgres',
    database: process.env.POSTGRES_DB || 'product_db',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    port: 5432
});

// Redis Connection
const redisClient = redis.createClient({
    url: `redis://redis:6379`
});
redisClient.connect();

redisClient.on('connect', () => console.log('Product Service connected to Redis'));
redisClient.on('error', err => console.log('Redis Error:', err));
app.get('/products', async (req, res) => {
    // let cachedData = await redisClient.get('orders');

    // if (!cachedData) {
    //     const result = await pool.query('SELECT * FROM orders'); 
    //     cachedData = JSON.stringify(result.rows);
    //     await redisClient.set('orders', cachedData);
    // }

    // res.json({ orders: JSON.parse(cachedData) });
    res.json({data:'Product Fetched Successfully'})
});


// // Simulate logging process
// setInterval(async () => {
//     console.log('Logging product details...');
//     const result = await pool.query('SELECT * FROM products');
//     console.log('Products:', result.rows);
// }, 5000);
app.listen(PORT, () => console.log(`Product Service running on port ${PORT}`));


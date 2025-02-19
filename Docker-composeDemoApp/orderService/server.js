const express = require('express');
const { Pool } = require('pg');
const redis = require('redis');

const app = express();
const PORT = process.env.PORT || 3000;

// PostgreSQL Connection
const pool = new Pool({
    user: process.env.POSTGRES_USER || 'postgres',
    host: process.env.POSTGRES_HOST || 'postgres',
    database: process.env.POSTGRES_DB || 'order_db',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    port: 5432
});

// Redis Connection
const redisClient = redis.createClient({
    url: `redis://redis:6379`
});
redisClient.connect();

redisClient.on('connect', () => console.log('Connected to Redis'));
redisClient.on('error', err => console.log('Redis Error:', err));

app.get('/orders', async (req, res) => {
    // let cachedData = await redisClient.get('orders');

    // if (!cachedData) {
    //     const result = await pool.query('SELECT * FROM orders'); 
    //     cachedData = JSON.stringify(result.rows);
    //     await redisClient.set('orders', cachedData);
    // }

    // res.json({ orders: JSON.parse(cachedData) });
    res.json({data:'Order Fetched Successfully'})
});

app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));

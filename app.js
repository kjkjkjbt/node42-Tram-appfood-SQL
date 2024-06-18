const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./model');

const likesRoutes = require('./routes/like');
const reviewsRoutes = require('./routes/review');
const ordersRoutes = require('./routes/order');

const app = express();

app.use(bodyParser.json()); // middleware 

app.use('/likes', likesRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/orders', ordersRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

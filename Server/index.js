// Importing all the required stuff
const cors = require('cors');
const express = require('express');
const { PORT, connection } = require('./config/db');
const { userRouter } = require('./routes/user.routes');
const { postRouter } = require('./routes/post.routes');
const { adminRouter } = require('./routes/admin.routes');
const { regenerate } = require('./controllers/user.controllers');

const app = express();

// In-built middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to the GardenGuru fullstack API !!!</h1>');
});
app.get('/regenerate', regenerate);
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/admin', adminRouter);

// Listening to the server
app.listen(PORT, connection);

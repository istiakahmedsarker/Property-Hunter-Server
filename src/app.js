const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const blogRouter = require('./routes/blogRoutes');
const propertyRouter = require('./routes/propertyRoutes');

// initial server start
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Server is running', app: 'Property Hunter' });
});

// routes mounting
app.use('/api/v1/blogs', blogRouter);
app.use('/api/v1/properties', propertyRouter);

// handle error for unknown routes
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server`,
  });

  next(err);
});

module.exports = app;

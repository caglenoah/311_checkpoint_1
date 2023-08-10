const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const userRouter = require('./routes/user');

app.use(express.json());

app.use(userRouter);

app.get('/', (req, res) => res.send('default route'));


app.listen(port, () => {
  console.log('app is listening on:', port)
});



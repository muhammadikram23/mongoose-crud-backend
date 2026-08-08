import express from 'express';
import cors from 'cors';
import todoRoutes from './src/routes/todo.route.js';
import connectDB from './src/db/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(async (req, res, next) => {
    await connectDB();
    next();
});

app.use('/api/todos', todoRoutes);

app.get('/', (req, res) => {
  res.send('Server is running smoothly!');
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;


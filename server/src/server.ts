
import cors from 'cors';
import express from 'express'
import { routes } from './routes';

const app = express();

//GET = search data
// POST = register data
// PUT = Update an entity's data
// Patch = Update a single entity data
// DELETE = Delete data...

app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333, () => {
  console.log('HTTP server running!')
});


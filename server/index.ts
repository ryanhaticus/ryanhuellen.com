import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(
  path.resolve(import.meta.dirname, '..', 'dist')
));

const PORT = 3000 as const;

app.listen(PORT, () => {
  console.info(`Server started on port ${PORT}`);
});
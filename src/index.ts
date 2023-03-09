import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import route from './routes/route';

route(app);
app.listen(3000, () => "server listening on port 3000");

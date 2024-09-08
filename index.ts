import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import initDatabase from './src/utils/connect-mongodb';
import configs from './src/config/configs';
import router from './src/routers';

initDatabase();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

app.listen(configs.PORT, () => {
    console.log("Server alive and running at port", configs.PORT);
});
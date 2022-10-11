import * as dotenv from "dotenv";
dotenv.config();

import app from './src/app';
import config from './src/config/config';
import moment from 'moment';

const server = app.listen(config.port, () => {
  console.log(`${moment().format('YYYY-MM-DD HH:SS')} :- Server started on port ${config.port} `);
}
);
export default server
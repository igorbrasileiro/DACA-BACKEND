import db from './models';
import * as path from 'path';
/* tslint:disable */

db.sequelize.sync().then(() => {
  // server.listen(port);
  // // callback
  // server.on('error', onError(server));
  // server.on('listening', onListening(server));
});

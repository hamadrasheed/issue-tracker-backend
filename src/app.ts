/**
 * Module dependencies.
 */
import chalk from 'chalk';
import timeout from 'connect-timeout'; // Express v4
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import httpLogs from 'morgan';
import xss from 'xss-clean';

import { sequelize } from './config/database';
import { routes } from './routes/routes';
import { errorHandler } from './utils';
/**
 * Authenticate database connection
 */
sequelize.authenticate()
  // tslint:disable-next-line: no-console
  .then((): void => console.log('%s Database connected successfully!', chalk.green('✓')))
  // tslint:disable-next-line: no-any
  .catch((error: any): void => {
    console.error('Database authenticaion error...');
    console.log('DB error: ', error);
    process.exit();
  });

/**
 * Create Express server.
 */
const app: express.Express = express();

/**
 * Timeout confg
 */
app.use(timeout('12000000'));
app.use(haltOnTimedout);

function haltOnTimedout(req: express.Request, _res: express.Response, next: express.NextFunction): void {
  if (!req.timedout) { next(); }
}

/**
 * Express configuration.
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || 8081);
app.set('env', process.env.NODE_ENVR || 'development');
app.use(httpLogs('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(xss());

/**
 * CORS enable
 */
app.use(cors());

/**
 * Routes.
 */
app.use('/api', routes);


/**
 * Error Handler.
 */
app.use(errorHandler);

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
});

export const server: http.Server = http.createServer(app);

/**
 * Start Express server.
 */
server.listen(app.get('port'), (): void => {
  // tslint:disable-next-line: no-console
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  // tslint:disable-next-line: no-console
  console.log('  Press CTRL-C to stop\n');
});

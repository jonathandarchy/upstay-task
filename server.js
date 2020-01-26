import express from 'express';
import open from 'open';
import routes from '@upstay/routes';
import serverDev from './server.dev';
import serverIO from './server.io';
import errors from './errorHandlers'

const app = express();
const port = process.env.PORT || 9999;
const appURL = `http://localhost:${port}`;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(routes);

// Error Handlers
app.use(errors.logErrors);

serverDev(app);

const server = serverIO(app);

server.listen(port, () => {
	console.log(`Server started ${appURL}`);
	open(appURL);
});

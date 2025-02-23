import app from './app.js';
import AppDataSource from './data-source.js';
import Logger from './core/Logger.js';

const PORT = 1234;

(async () => {
    await AppDataSource.connect();
    Logger.info('Database connection open!');
    app.listen(PORT, () => {
        Logger.info(`server started at port ${PORT}`);
    })
})();
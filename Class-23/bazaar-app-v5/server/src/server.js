import app from './app.js';
import AppDataSource from './data-source.js';

const PORT = 1234;

(async () => {
    await AppDataSource.connect();
    console.log('Database connection open!');
    app.listen(PORT, () => {
        console.log(`server started at port ${PORT}`);
    })
})();
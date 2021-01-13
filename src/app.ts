import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

import userRoute from './routes/user.route';

class App {
    private express: express.Application;
    private port = 3333;

    constructor() {
        this.express = express();
        this.middlewares();
        this.database();
        this.routes();
        this.listen();
    }

    private middlewares(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {
        mongoose.connect(`mongodb+srv://silvio:${process.env.DB_PASS}@cluster0.udcjj.mongodb.net/test?retryWrites=true&w=majority`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    }

    private routes(): void {
        this.express.use('/users', userRoute);
    }

    private listen(): void {
        this.express.listen(this.port, () => {
            console.log(`This app is running on port ${this.port}`);
        });
    }

    public getApp(): express.Application {
        return this.express;
    }
}

export default App;
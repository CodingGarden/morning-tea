import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {User} from "./entity/user";

// create typeorm connection
createConnection().then(connection => {
    const userRepository = connection.getRepository(User);

    // create and setup express app
    const app = express();
    app.use(bodyParser.json());

    // register routes

    app.get("/users", async function(req: Request, res: Response) {
        return userRepository.find();
    });

    app.get("/users/:id", async function(req: Request, res: Response) {
        return userRepository.findOne(req.params.id);
    });

    app.post("/users", async function(req: Request, res: Response) {
        const user = userRepository.create(req.body);
        return userRepository.save(user);
    });

    app.delete("/users/:id", async function(req: Request, res: Response) {
        return userRepository.remove(req.params.id);
    });

    // start express server
    app.listen(3000);
});

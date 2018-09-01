import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

// create typeorm connection
createConnection().then(connection => {
    const userRepository = connection.getRepository(User);

    // create and setup express app
    const app = express();
    app.use(bodyParser.json());

    // register routes

    app.get("/users", async function(req: Request, res: Response) {
        const users = await userRepository.find();
        res.json(users);
    });

    app.get("/users/:id", async function(req: Request, res: Response) {
        const user = await userRepository.findOne(req.params.id);
        res.json(user);
    });

    app.post("/users", async function(req: Request, res: Response) {
        const user = userRepository.create(req.body);
        const created = await userRepository.save(user);
        res.json(created);
    });

    app.put("/users/:id", async function(req: Request, res: Response) {
        await userRepository.update(req.params.id, req.body);
        res.json({
          message: 'Updated.'
        });
    });

    app.delete("/users/:id", async function(req: Request, res: Response) {
        await userRepository.delete(req.params.id);
        res.json({
          message: 'Deleted.'
        });
    });

    // start express server
    app.listen(3000);
});

import { Request, Response } from 'express';

import User from '../models/User';

class UserController {

    public async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const user = await User.create(data);

        const createdUser = {
            message: 'Usuário cadastrado com sucesso!',
            _id: user._id,
            name: user.name,
        }

        return response.json(createdUser);
    }
}

export default UserController;
const { User } = require('../../models');
const Controller = require('#app/Controller/Controller.js');
const bcrypt = require('bcryptjs');

class UserController extends Controller {
    async index(request, httpResponse) {
        try {
            const users = await User.findAll();
            httpResponse.send(users);
        } catch (error) {
            httpResponse.status(500).send({
                message: "Error fetching users",
                error: error.message
            });
        }
    }

    async show(request, httpResponse) {
        let data = await User.findOne({
            where: {
                id: request.params.id
            }
        });

        if(!data){
            httpResponse.status(404).send({ message: "User not found." });
        }
        else{
            httpResponse.status(200).send(data);
        }
    }

    async store(request, httpResponse) {
        try {
            request.fields.password = await bcrypt.hash(request.fields.password, 10);
            let data = await User.create(request.fields)
            httpResponse.send({
                data: data,
                message: `${data.name} has been saved.`
            });
        } catch (error) {
            httpResponse.send(error);
        }
    }

    async update(request, httpResponse) {
        try {
            let data = await User.update(request.fields, {
                where: {
                    id: request.params.id
                }
            });
            httpResponse.send({
                data: data,
                message: `User has been updated.`
            });
        } catch (error) {
            httpResponse.send(error);
        }
    }

    async destroy(request, httpResponse) {
        try {
            let data = await User.destroy({
                where: {
                    id: request.params.id
                }
            });
            httpResponse.send({
                data: data,
                message: `User has been deleted.`
            });
        } catch (error) {
            httpResponse.send(error);
        }
    }
}

module.exports = new UserController();
const { User } = require('../../../models');
const Controller = require('#app/Controller/Controller.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthenticationController extends Controller {
    async register(request, httpResponse) {
        try {
            request.fields.password = await bcrypt.hash(request.fields.password, 10);
            let data = await User.create(request.fields)
            httpResponse.send({
                data: data,
                message: `${data.name} has been registered.`
            });
        } catch (error) {
            httpResponse.send(error);
        }
    }

    async login(request, httpResponse) {
        try {
            let message = 'Invalid credentials entered';
            const user = await User.findOne({ where: { email: request.fields.email } });
            if (!user) {
                return httpResponse.status(401).json({ error: message });
            }

            const passwordMatch = await bcrypt.compare(request.fields.password, user.password);
            if (!passwordMatch) {
                return httpResponse.status(401).json({ error: message });
            }
            const token = jwt.sign({ email: user.email }, 'secret');
            httpResponse.status(200).json({ token });

        } catch (error) {
            httpResponse.status(500).send({
                message: "Error fetching users",
                error: error.message
            });
        }
    }

}

module.exports = new AuthenticationController();
const Controller = require('#app/Controller/Controller.js');
const UserController = require('#app/Controller/UserController.js');

class GuestController extends Controller {
    async index(request, httpResponse) {
        let data = await UserController.index(request, httpResponse);
        httpResponse.send(data);
    }
}

module.exports = new GuestController();
import Users from './modules/users.js';

class Controller {
    async showUsers (req, res) {
        try {
            const candidate = await Users.findAll();
            return res.json(candidate);
        }
        catch (err) {
            return err.message;
        }
    }
    async registration (req, res) {
        try {
            const {nickname, login, email, password} = req.body;
            await Users.create({nickname: nickname, login: login, email: email, password: password}); 
            return res.status(200).json('User created!');
        }
        catch (err) {
            return err.message;
        }
    }
    async login (req, res) {
        try {
            const {login, password} = req.body;
            const candidate = Users.findOne({
                where: {
                    login: login
                }
            });
            if (!candidate) {
                return res.status(404).json('User not found ;(');
            }
            if (candidate.password != password) {
                return res.status(400).json('Wrong password, check it!');
            }
            return res.status(200).json('Welcome!');
        }
        catch (err) {
            return err.message;
        }
    }
    async deleteUser (req, res) {
        try {
            const {id} = req.params;
            const candidate = await Users.findOne({
                where: {
                    id: id
                }
            });
            if (!candidate) {
                return res.status(404).json('User not found..');
            }
            await Users.destroy({
                where: {
                    id: id
                }
            });
            return res.status(200).json('User successfully deleted..');
        }
        catch (err) {
            return err.message;
        }
    }
}

export default new Controller();

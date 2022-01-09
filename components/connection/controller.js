import axios from '../../common/axiosInstance';
import Service from './service';

export class Controller {
    async all(req, res){
        Service.checkConnection().then(r =>  res.sendStatus(r))
    }
}

export default new Controller();
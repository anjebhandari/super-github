import Service from './service';

export class Controller {
    all(req, res){
        Service.checkConnection().then(r =>  res.sendStatus(r))
    }
}

export default new Controller();
import Service from "./service"

export class Controller{
    getData(req, res){
        Service.getRepoData(req)
        .then(r=> res.json(r))
    }
}

export default new Controller();

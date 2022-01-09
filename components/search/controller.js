import Service from "./service";

export class Controller{
    search(req, res){
        Service.getSearchData(req)
        .then(r =>{
            res.json(r)
        })
    }
}
export default new Controller();

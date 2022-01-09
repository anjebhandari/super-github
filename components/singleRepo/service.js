import axios from '../../common/axiosInstance';

export class Service{
    async getRepoData(req){
        try{
          const result = await axios.get(`/repos/${req.params.org}/${req.params.name}`);
          console.log("result", result.data)

        }catch(error){
            console.error(error);
            console.log("Error while fetching a repo");
            return error.response.status
        }
    }
}

export default new Service();

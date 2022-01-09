
import axios from '../../common/axiosInstance';

export class Service{
    async getSearchData(req) {
        try{
            let result;
            if(req.params.keyword){
                result = await axios.get('/search/repositories',{
                    params: {
                        q:JSON.stringify(req.params.keyword)
                    }
                })
            }else{
                result = await axios.get('/orgs/octokit/repos')
            }
            // console.log("result", result)
            return result.data;
        }
        catch(error){
            console.error("Error while Searching data")
            console.error(error)
            return error.response.status   
        }
    }
}

export default new Service();

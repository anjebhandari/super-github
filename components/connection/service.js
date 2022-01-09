import axios from '../../common/axiosInstance';

export class Service {
    async checkConnection() {
        try {
            const result = await axios.get('/zen');
            console.log("result", result.status)
            return result.status
        }
        catch (error) {
            console.log("Error while checking connection")
            console.log(error)
            return error.response.status
         }
    }
}

export default new Service();

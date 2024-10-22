import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T>{
    count: number;
    results: T[];
}


const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        // api key took from api.rawg.io site
        key: 'da2cd7079812461d8e77d2d44e9ca2ba'
    }

})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint
    }

    getAll(config: AxiosRequestConfig){
        return axiosInstance
            .get(this.endpoint,config)
            .then(res => res.data)
    }
}

export default APIClient;
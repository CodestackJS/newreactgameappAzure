
// import useData, { FetchResponse } from "./useData";
// import apiClient from "../services/apiClient";
import { CACHE_KEY_PLATFORM } from "../constants";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";


const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform{
    id: number;
    name: string;
    slug: string;
}


// const usePlatform = () =>  useData<Platform>('/platforms/lists/parents')
const usePlatform = () =>  useQuery<FetchResponse<Platform>>({
    queryKey: CACHE_KEY_PLATFORM,
    queryFn: () => apiClient.getAll({}),
                // .get<FetchResponse<Platform>>('/platforms/lists/parents')
                // .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
})








export default usePlatform
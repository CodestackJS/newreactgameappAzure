// import useData from "./useData";
// import apiClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../constants";
import APIClient, { FetchResponse } from "../services/apiClient";

const apiClient = new APIClient<Genre>('/genres')



//help us shaping our data in the form of our interfaces(type) props to pass data from parent component to child
export interface Genre{
    id: number;
    name: string;
    image_background: string;
 
   
}

export interface FetchGenreResponse<T>{
    count: number;
    results: T[]
}


// const useGenres = () => useData<Genre>('/genres');
const useGenres = () => useQuery<FetchResponse<Genre>>({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => apiClient.getAll({}),
    staleTime: 24 * 60 * 60 * 1000 // 24 hrs
            // apiClient
            //     .get<FetchGenreResponse<Genre>>('/genres').then(res => res.data)
});



export default useGenres;
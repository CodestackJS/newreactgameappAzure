// import { useEffect, useState } from "react";
// import apiClient from "../services/apiClient";
// import { CanceledError } from "axios";
// import { FetchResponse } from "./useData";
// import { FetchResponse } from "./useData";
// import APIClient from "../services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { CACHE_KEY_GAMES } from "../constants";
import APIClient, { FetchResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";


const apiClient = new APIClient<Game>('/games')


// export interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

//help us shaping our data in the form of our interfaces(type) props to pass data from parent component to child
// export interface Game{
//     id: number
//     name: string
//     background_image: string
//     parent_platforms:{platform: Platform}[]
//     metacritic: number
// }

// interface FetchGameResponse{
//     count: number
//     results: Game []
// }

// export interface FetchGameResponse{
//     count: number;
//     results: Game[];
// }


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
  }


        // const useGames = (gameQuery:GameQuery) => useData<Game>('/games', {params:{genres:gameQuery.genre?.id, parent_platforms:gameQuery.platform?.id,ordering:gameQuery.sortOrder}}, [gameQuery])
        const useGames = (gameQuery:GameQuery) => useQuery <FetchResponse<Game>, Error> ({
            queryKey: [CACHE_KEY_GAMES, gameQuery],
            queryFn: () => apiClient
                        .getAll({
                            params:{
                                genres:gameQuery.genre?.id, 
                                parent_platforms:gameQuery.platform?.id,
                                ordering:gameQuery.sortOrder,
                                search:gameQuery.searchText
                            }
                        })
                    // () => apiClient
                    // .get<FetchResponse<Game>>('/games', {
                        // params:{
                        //     genres:gameQuery.genre?.id, 
                        //     parent_platforms:gameQuery.platform?.id,
                        //     ordering:gameQuery.sortOrder,
                        //     search:gameQuery.searchText
                        // }
                    // }).then(res => res.data),
        });
        // const useGames = (gameQuery:GameQuery) => useQuery({
        //     queryKey: [CACHE_KEY_GAMES, gameQuery],
        //     queryFn: () => apiClient
        //             .get<FetchResponse<Game>>('/games', {params:{genres:gameQuery.genre?.id, parent_platforms:gameQuery.platform?.id,ordering:gameQuery.sortOrder,search:gameQuery.searchText}}).then(res => res.data)
        // });





    //     // we need our useStates to help us render update our UI with our games and others
    //     const [games, setGames] = useState<Game[]>([]);
    //     const [error, setError] = useState('')
    //     const [isLoading, setIsLoading] = useState(false);

    
    //     //create a hellper function to help us fetch our code
    //     // const fetchGames = () => {
         
    //     // }
    
    //     //UseEffect to fetch our data
    //  useEffect(() => {
    //     // fetchGames();

    //     //We need an instance of AbortController() to help us unsubscribe to the api, we are going to save it variable
    //     const controller = new AbortController();

    //     apiClient
    //     .get<FetchGameResponse>('/games', {signal: controller.signal})
    //     .then(response => {
    //         setIsLoading(false)
    //         setGames(response.data.results)
    
    
    //       })
    //     .catch(error => {
    //         if(error instanceof CanceledError) return
    //         setError(error.message);
    //     });

    //     return () => controller.abort();
    
    //  }, []);

// return {games, error, isLoading}



export default useGames;
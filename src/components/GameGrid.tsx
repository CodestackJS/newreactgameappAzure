// all our imports we need

// import { useEffect, useState } from "react"
// import apiClient from "../services/apiClient"
import { SimpleGrid, Text } from "@chakra-ui/react"
// import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";


interface Props{
  gameQuery: GameQuery
  // selectedPlatform: Platform | null
}

const GameGrid = ({gameQuery}:Props) => {

 const{data, error, isLoading} = useGames(gameQuery);
//where the helper function to add, delete or update data

const skeleton = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];


  return (
    <>
    {/* display our data ul li grid table usually map it with unique key */}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:4}} spacing={10} padding={'20px'}> 

    {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}

        {/* for every 1 spacing is 4px */}
        {data.map((game) => 
        <GameCard game={game} key={game.id}></GameCard>)}
    </SimpleGrid>
    {error && <Text color={'red'}>{error}</Text>}
    
    
    </>
  )
}

export default GameGrid
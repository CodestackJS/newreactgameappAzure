// all our imports we need

// import { useEffect, useState } from "react"
// import apiClient from "../services/apiClient"
import { Button, SimpleGrid, Text } from "@chakra-ui/react"
// import useGames, { Platform } from "../hooks/useGames"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
// import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
import useGames, { Game } from "../hooks/useGames";
import React from "react";


interface Props{
  gameQuery: GameQuery
  // selectedPlatform: Platform | null
}

const GameGrid = ({gameQuery}:Props) => {

//  const{data, error, isLoading} = useGames(gameQuery);
const{data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);
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

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
          

        {/* for every 1 spacing is 4px */}
        {/* {data?.results.map((game:Game) =>  */}
        {/* <GameCard game={game} key={game.id}></GameCard>)} */}
    </SimpleGrid>

    {hasNextPage && <Button onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'Loading....': 'Load More'}</Button>}

    {error && <Text color={'red'}></Text>}
    
    
    </>
  )
}

export default GameGrid
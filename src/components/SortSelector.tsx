import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react"
import { BiSolidChevronDown } from "react-icons/bi"


interface Props{
    onSelectSortOrder: (sortOrder: string) => void
    // sortOrder:string
}


const SortSelector = ({onSelectSortOrder}:Props) => {

    const sortOrders =[
        {value:'', label:'Relevance'},
        {value:'-added', label:'Date added'},
        {value:'name', label:'Name'},
        {value:'released', label:'Released date'},
        {value:'-metacritic', label:'Popularity'},
        {value:'-rating', label:'Average rating'}
    ]

    // const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

    const [selectedSort, setSelectedSort] = useState('')
    const handleSelectedSort = (value:string,label:string) => {

        setSelectedSort(label)
        onSelectSortOrder(value);
    }
  return (
    <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BiSolidChevronDown/>}>Order by {selectedSort || 'Relevance'}</MenuButton>
        <MenuList>
            {/* This is hard coded 
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Date Added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release Date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average Rating</MenuItem> */}
            {sortOrders.map(order => <MenuItem value={order.value} key={order.value} onClick={() => handleSelectedSort(order.value, order.label)}>{order.label}</MenuItem>)}
        </MenuList>


    </Menu>
    
    
    </>
  )
}

export default SortSelector
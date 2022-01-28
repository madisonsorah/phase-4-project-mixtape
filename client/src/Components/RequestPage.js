import {useEffect, useState} from 'react'
import RequestCard from './RequestCard'
import SearchBar from './SearchBar'

function RequestPage ({requests}) {
    const [search, setSearch] = useState("")

    const searchedRequests = requests.filter(request =>
    request.title.toLowerCase().includes(search.toLowerCase()))

    const displayedRequests = searchedRequests.map(request =>
    <RequestCard request={request} key={request.id}/>)
    return (
        <>
        <SearchBar onSearch={setSearch}/>
        {displayedRequests}
        
        </>
        
    )
}
export default RequestPage
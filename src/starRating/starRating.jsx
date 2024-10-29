import { FaStar } from 'react-icons/fa'
import { useState } from 'react';



function Star({selected = false, onSelect = () => {}}){
    return <FaStar onClick={onSelect} color={ selected? 'red' : 'grey' } />
}

function StarRating( { totalStars = 5}){
    const [selectedStars, setSelectedStars] = useState(0);
    return <>
    {
        [...Array(totalStars)].
        map( (n,i) => <Star onSelect = {() => setSelectedStars(i + 1)} selected = { selectedStars > i  }  key={i} />)
    }
    <p>{selectedStars} of {totalStars} stars</p>

    </> 
}

export default StarRating;
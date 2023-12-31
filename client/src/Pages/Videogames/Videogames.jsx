import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../Components/Cards/Cards'
import Filter from '../../Components/Filter/Filter'
import { getVideogames } from '../../Redux/Action/Action'


const videogames = () => {

  const dispatch = useDispatch() 
  const allVideogames = useSelector(state => state.allVideogames)

  useEffect(() => {
    dispatch(getVideogames())
  }, [])

  return (
    <div>
      <Filter />
      <Cards info={allVideogames}></Cards>
    </div>
  )
}

export default videogames
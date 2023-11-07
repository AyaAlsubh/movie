
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react'
import MovieBox from './MovieBox'
import './App.css'

import { Container, Navbar,Nav, Form, FormControl, Button } from 'react-bootstrap'



const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=12e2e0ef414517ed1698365d1283ff3a"
const API_SARCEH="https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=12e2e0ef414517ed1698365d1283ff3a"
function App(){
  const [movies, setMovies]=useState([])
  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data => {
      console.log(data)
      setMovies(data.results)
    })
  },[])
  const[titell,setTitell]=useState("")
  const[query,setQuery]=useState("")

const Moviesearch=async(e)=>{
  e.preventDefault();
  console.log("serching")


  try{
    const url=`https://api.themoviedb.org/3/search/movie?api_key=12e2e0ef414517ed1698365d1283ff3a&query=${query}`
const res= await fetch(url);
const data=await res.json()
console.log(data)
setMovies(data.results)

}
catch(e){
console.log(e)
}}
  
  
const  updata=(e)=>{
  setQuery(e.target.value) }
  return (
    <>
    <Navbar bg="dark" expend="lg " variant="dark">

      <Container fluid>
      <Navbar.Brand href='/home'>MovieDb App</Navbar.Brand>
       <Navbar.Brand href='/home'>Trending</Navbar.Brand>
       <Navbar.Toggle aria-controls='navbarScroll'></Navbar.Toggle>
        <Navbar.Collapse id='navbarScrolll'>
          <Nav className="me-auto my-2 my-lg-3" style={{maxHight:'100'}} navbarScroll ></Nav>
          <Form className='d-flex ' onSubmit={Moviesearch}>
            <FormControl
            type='search'
            placeholder='Movie Search'
            className='me-7'
            aria-label='search'
            name="query"
            value={query} onChange={updata}></FormControl>
         <Button variant='secondary' type="submit">Search</Button>

          </Form>   
        </Navbar.Collapse>
       
      </Container>
      
     </Navbar>
    <div className='container'>
    
      <div className='grid'>
      {movies.map((moviesReq)=>
     <MovieBox key={moviesReq.id}{...moviesReq}/>)}
      </div>
      
      
     </div>
     
    </>
  )
}

export default App

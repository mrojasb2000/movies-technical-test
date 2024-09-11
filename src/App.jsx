import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import { Movies } from './components/Movies'


function App() {
  const movies = responseMovies.Search
  

  return (
   <div className='page'>
    <header>
     <h1>Movie Search</h1>
     <form className='form'>
       <input type='text' placeholder='Advengers, Star Ward, The Matrix...' />
       <button type='submit'>Search</button>
     </form>
   </header>
   <main>
      <Movies movies={movies}/> 
   </main>
   </div>
  )
}

export default App

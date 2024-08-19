import watchList from './components/movies/Movies'
import MoviesTitle from './components/moviesTitle/MoviesTitle'
import './App.css'

function App() {
  

  return (
    <>
      <div>
      <MoviesTitle watchList = {watchList} />
      </div>
    </>
  )
}

export default App

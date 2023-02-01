import React from 'react';
import axios from 'axios';
import Movie from '../component/Movie'
import "./Home.scss"

class Home extends React.Component {
  state = {
    isLoading: true,
    movies:[]
  }
  getMovies=async () => {
    const {
      data: {
        data:{movies},
    },
  }=await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    //console.log(movies);
    this.setState({movies, isLoading:false})//키와 밸류값이 같을 때는 ({movies: movies})를 ({movies})라고 써도 됨
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className='container'>
        {isLoading ? (<div className='loader'><span className='loader_text'>Loading...</span></div>) : 
        (<div className='movies'>
            {movies.map(movie => (
            //console.log(movie);
            <Movie
              key={movie.id} 
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
              />
            )
            )}
        </div>
        )
      }
      </section>
    );
  }
}

export default Home;

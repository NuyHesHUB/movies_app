import React from 'react';
import propTypes from 'prop-types'
import "./Movie.scss"
import {Link} from "react-router-dom"

const Movie = ({id,year,title,summary,poster,genres}) => {/* <-- 파라미터값 */
    return (
        <div className='movie'>
            {/* Link를 하여 전부 a 태그 화 시킴.. 누르면 이동하기 위함 */}
            {/* <Link to={{pathname:'/movie-detail',state:{year,title,summary,poster,genres}}}> */}
            <Link to={`/detail/${id}`}>{/* 수정 */}
                <img src={poster} alt={title} title={title}/>
                <div className='movie_data'>
                    <h3 className='movie_title'>{title}</h3>
                    <h5 className='movie_year'>{year}</h5>
                    <ul className='movie_genres'>{/* 맵 함수를 또 만들어야 한다 */}
                        {
                            genres.map((genres, idx)=>{
                                return <li key={idx} className='movie_genre'>{genres}</li>
                            })
                        }
                    </ul>
                    <p className='movie_summary'>{summary.slice(0,180)}</p>
                </div>
            </Link>
        </div>
    );
};

Movie.propTypes={
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres:propTypes.arrayOf(propTypes.string).isRequired,
    /* array는 배열 안에 스트링 */
};

export default Movie;
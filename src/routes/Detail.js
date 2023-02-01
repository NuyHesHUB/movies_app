import React,{useState, useEffect} from 'react';
import {useParams, useParma} from "react-router-dom"
import "./Detail.scss"

const Detail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    })

    return (
        <div className='movie-detail'>
            {loading ? (
                <div className='loadings'>
                    <span className='loading'>
                        데이터 불러오는중
                    </span>
                </div>
            ) : (
                <div className='movies'>
                    {/* <img src={movie.description_full} alt="aa" /> */}
                    <h2 className='title'>{movie.slug}</h2>
                    <div className="img-box">
                        <img src={movie.large_cover_image} alt={movie.title} />
                    </div>
                    <div className="content">
                        <div className="info">
                            <span className="movie-title">{movie.title}</span>
                            <span className="movie-rating">평점 : {movie.rating}</span>
                            <span className="movie-runtime">러닝타임 : {movie.runtime}</span>
                        </div>
                        <div className="genres">
                            <span className='genre'> 장르 :&nbsp;</span>
                            <ul className="list">
                                {
                                    movie.genres.map((genre, idx) => (<li key={idx}>{genre}</li>))
                                    
                                }
                            </ul>
                        </div>
                        <div className="summarys">
                            <span className="summary">
                                내용 : {movie.description_full}
                            </span>
                        </div>
                    </div>
                </div>
                
            )}
        </div>
    );
};

export default Detail;

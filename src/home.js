import axios from "axios";
import { useState , useEffect } from "react";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { fav_reset , add_to_fav  ,remov_to_fav } from './Redux/action';
import { useSelector , useDispatch } from "react-redux";

const Home = () => {
    const API_KEY = "d398ad7620416e249bb56b2050050189"
    const baseUrl = "https://api.themoviedb.org/3"
    const [move , setMove] = useState ([])

    useEffect ( () => {
        axios
        .get(`${baseUrl}/movie/popular?api_key=${API_KEY}`)
        .then ( (src) => {
            setMove(src.data.results)
        })
        .catch ((err) => {console.log("Error")})
    }, [])

    const fav = useSelector(state => state.fav)
    const dispatch = useDispatch()
    const rate = (e , id)=> { 
        if (e.target.classList.contains("star_move_fill")) {
            e.target.classList.toggle("star_move_fill")
            dispatch(remov_to_fav(id))
        } else {
            e.target.classList.toggle("star_move_fill")
            fav.indexOf(id) === -1  && dispatch(add_to_fav(id))
        }
   
    }

    

    return (
        <section className="contant all_move row justify-content-center bg-dark" > 
              {move.map( (mov , id) => {
                  return (
                    <div className=" col-6 col-sm-4 col-md-3 col-lg-2" key={id}>
                        <div className="card moves bg-dark "  >
                            <img src={`https://image.tmdb.org/t/p/original${mov.poster_path}`} className="card-img-top" alt="photo"/>
                            <FiStar className="star_move" onClick={(e)=> rate(e , mov )} />
                            <div className="card-body">
                                <Link to={`/showmovi/${mov.id}`} ><h6>{mov.title}</h6></Link>
                                <p className="card-text">{mov.release_date}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        
        </section>
    );
}

export default Home;
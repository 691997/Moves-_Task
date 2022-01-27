import { fav_reset , add_to_fav  ,remov_to_fav } from './Redux/action';
import { useSelector , useDispatch  } from "react-redux";
import { useState  , useEffect} from 'react';
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Fav () {
    const fav = useSelector(state => state.fav)
    const dispatch = useDispatch()
    const [ fav_move , setFav_move ] = useState ([])
    useEffect ( () => {
        fav.length == 0 ? setFav_move([]) : setFav_move(fav)
    } , [fav] ) 

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
        <>
            <section className="contant all_move row justify-content-center bg-dark" > 
            {fav_move.map( (mov , id) => {
                return (
                <div className=" col-6 col-sm-4 col-md-3 col-lg-2" key={id}>
                    <div className="card moves bg-dark "  >
                        <img src={`https://image.tmdb.org/t/p/original${mov.poster_path}`} className="card-img-top" alt="photo"/>
                        <FiStar className="star_move star_move_fill" onClick={(e)=> rate(e , mov )} />
                        <div className="card-body">
                            <Link to={`/showmovi/${mov.id}`} ><h6>{mov.title}</h6></Link>
                            <p className="card-text">{mov.release_date}</p>
                        </div>
                    </div>
                </div>
            )
        })}
    
        </section>
        
        </>
    );
} 

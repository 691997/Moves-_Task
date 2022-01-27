import { useParams  } from "react-router-dom";
import { useState , useEffect } from "react";
import { FaStar } from "react-icons/fa"; 
import axios from "axios";

function ShowMovie (props) {
    const params = useParams()
    const [moveInfo , setMovi] = useState({}) 

    useEffect ( () =>{
        axios
        .get (`https://api.themoviedb.org/3/movie/${params.id}?api_key=d398ad7620416e249bb56b2050050189`)
        .then( (info) => {
            setMovi(info.data)
        })
        .catch((err) => console.log("Error") )
    } ,[])

    return (
        <section className="bg-dark details_movi ">
            
            <div className="d-flex flex-wrap flex-md-nowrap justify-content-sm-center">
                <div>
                    <img src={`https://image.tmdb.org/t/p/original/${moveInfo.poster_path}`} className="details_img rounded "></img>
                </div>
                <div className="details_info text-sm-center">
                    <h2 className="mb-4 "> {moveInfo.title} </h2>
                    <p> {moveInfo.overview} </p>
                    <h6 className="text-start mt-5"> {moveInfo.release_date} 
                                                <span className="new_badge badge rounded-pill bg-warning text-dark p-1.5">POPULAR</span>
                                                <span className="all_details_stars_fill ">
                                                    <FaStar className="details_stars details_stars_fill" /> 
                                                    <FaStar className="details_stars details_stars_fill" /> 
                                                    <FaStar className="details_stars details_stars_fill" /> 
                                                    <FaStar className="details_stars details_stars_fill" /> 
                                                    <FaStar className="details_stars"  /> 
                                                </span>
                                               
                    </h6>
                </div>
            </div>
        </section>
    );
}
export default ShowMovie;



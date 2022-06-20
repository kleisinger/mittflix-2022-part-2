import placeholder from '../assets/image-not-available.jpg';
import { useState, } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";

const Proivder = ({provider}) => {
    const { provider_id, provider_name, logo_path } = provider;
    //const [queryValue, setQueryValue] = useState("");
    const navigate = useNavigate();

    const handleClick =() => {
        console.log("this works")
        console.log({provider_id})
 
        //navigate({ pathname: "/provider", })
        //(queryValue) => setQueryValue()

        navigate({ pathname: "/provider", search: createSearchParams({ id: provider_id }).toString() });
    }


    return (  
<div onClick={handleClick}  className="movie">
            <img src={provider.logo_path == null ? placeholder : `https://image.tmdb.org/t/p/w500${logo_path}`} />
            <div className="overlay">
                <div className="title">{provider_name}</div>
            </div>
        </div>

    );
}
 
export default Proivder;

// /t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg

{/* <div onClick={handleClick} value={provider.provider_id} className="movie">
            <img value={provider.provider_id} src={provider.logo_path == null ? placeholder : `https://image.tmdb.org/t/p/w500${provider.logo_path}`} />
            <div value={provider.provider_id} className="overlay">
                <div className="title">{provider.provider_name}</div>
            </div>
        </div> */}

        // <div className="movie">
        //     <Link to={`/provider?id=${provider.provider_id}`} >
        //         <img src={provider.logo_path == null ? placeholder : `https://image.tmdb.org/t/p/w500${provider.logo_path}`} />
        //         <div className="overlay">
        //             <div className="title">{provider.provider_name}</div>
        //         </div>
        //     </Link>
        // </div>
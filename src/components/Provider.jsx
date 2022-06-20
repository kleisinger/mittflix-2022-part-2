import placeholder from '../assets/image-not-available.jpg';

const Proivder = ({provider}) => {
    return (  
        <div className="movie">
            <img src={provider.logo_path == null ? placeholder : `https://image.tmdb.org/t/p/w500${provider.logo_path}`} />
            <div className="overlay">
            <div className="title">{provider.provider_name}</div>
            </div>
        </div>
    );
}
 
export default Proivder;

// /t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg
import placeholder from '../assets/image-not-available.jpg';
import { useState, } from "react";
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import styles from "./Provider.module.css";

const Proivder = ({provider}) => {

    const { provider_id, provider_name, logo_path } = provider;
    const navigate = useNavigate();

    const handleClick =() => {
        navigate({ pathname: "/provider", search: createSearchParams({ id: provider_id }).toString() });
    }

    return (  
        <div onClick={handleClick}  className={styles.provider}>
            <img src={provider.logo_path == null ? placeholder : `https://image.tmdb.org/t/p/w500${logo_path}`} />
            <div className={styles.overlay}>
                <div className={styles.title}>{provider_name}</div>
            </div>
        </div>

    );
}
 
export default Proivder;
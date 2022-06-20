import Provider from "./Provider";
import styles from "./ProviderList.module.css";

const ProviderList = ({providers, watchList, toggle}) => {
   
    return (  
    <div className={styles.titleList}> 
        <div className={styles.title}> 
            <h1>Providers</h1> 
            <div className={styles.titlesWrapper}>
                {providers === null ? <p>No Results Found</p> :
                providers.map((provider) =>
                    <Provider 
                        key={provider.provider_id} 
                        provider={provider} 
                        toggle={toggle}
                        watchList={watchList}
                    />)
                }
            </div>
        </div>
    </div>
    );
}
 
export default ProviderList;
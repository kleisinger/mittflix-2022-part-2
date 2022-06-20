import Provider from "./Provider";

const ProviderList = ({providers, watchList, toggle}) => {

    console.log(providers)

   
    return (  
    <div className="titleList"> 
        <div className="title"> 
            <h1>Providers</h1> 
            <div className="titles-wrapper">
                {providers === null ? <p>No Results Found</p> :
                providers.map((provider) =>
                    <Provider key={provider.id} provider={provider} />)
                }
            </div>
        </div>
    </div>
    );
}
 
export default ProviderList;
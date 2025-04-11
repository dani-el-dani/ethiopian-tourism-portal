import { Link } from "react-router-dom"

function Featured({img, name, description}){

    return(
        <div className='featured-card'>
            <div className='fetured-card-content'>
                <Link to={`/destinations/${name}`}>
                    <div className='featured-img-container'>
                        <img className='featured-img' src={img} alt="" />
                    </div>
                    <div className='featured-description-container'>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </Link>
                
            </div>
            
        </div>
        
    )

}

export default Featured
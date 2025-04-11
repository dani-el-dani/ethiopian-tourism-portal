import Footer from "./Footer";
import { useEffect, useState } from "react";
import Header from "./Header";
import Featured from "./Featured";
import { touristDestinations } from "./destinationsData";
import { useSearchParams } from "react-router-dom";

function TabButtons(props){
    return(
        <button 
            className={props.active ? 'destinations-nav-btn destinations-nav-btn-active' : 'destinations-nav-btn'} 
            onClick={() => props.handleTabButton(props.catagory)}>
                {props.catagory}
        </button>
    )
}

function Destinations() {
    const [searchparam] = useSearchParams()
    const [filter, setFilter] = useState(searchparam.get("category") || "All")
    const catagories = ["All", "Wildlife & Safari", "Adventure & Trekking", "Cultural & Historical Sites", "Relaxation & Nature Escapes"]
    const destinations = filter === "All" ? touristDestinations.slice() : touristDestinations.filter(destination => destination.category.includes(filter))
    function handleTabButton(filterString){
        setFilter(filterString)
    }

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <header>
                <Header>
                    <h1 className='hero-title'>Discover the Wonders of <br /> Ethiopia</h1>
                    <p className='hero-description'>From the rock-hewn churches of Lalibela to the breathtaking landscapes of <br /> the Simien Mountains, Ethiopia is a land of ancient wonders and vibrant culture. <br /> Discover timeless heritage, diverse traditions, <br /> and unforgettable adventures in the heart of Africa</p>
                </Header>
            </header>
            <section>
                <div className="destinations-section">
                    <div className="destinations-nav">
                        {catagories.map(cat => 
                            <TabButtons key={cat} catagory={cat} handleTabButton={handleTabButton} active={filter === cat}/>
                        )}
                    </div>
                    <div className='featured-container destinatoins-container'>
                    {destinations.map(destination => (
                        <Featured 
                            key={destination.id} 
                            img={destination.imageUrl} 
                            name={destination.name} 
                            description={destination.description}
                        />
                    ))}
                </div>
                </div>
            </section>
        </>
    )
}

export default Destinations
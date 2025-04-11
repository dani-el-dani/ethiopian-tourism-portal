import Featured from "./Featured"
import {touristDestinations, events} from './destinationsData'
import Header from "./Header"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import LowerOmo from '../assets/Lower-Omo-Valley1.jpg'
import Negashi from '../assets/Negash.jpg'
import OmoPark from '../assets/The-Omo-National-park.jpg'
import PaleontologicalSite from '../assets/The-Paleontological-site-of-Hadar.jpg'
import SemienMountain from '../assets/The-Semien-Mountains-National-park1.jpg'
import Wonchi from '../assets/Wonchi-crater-lake.jpeg'

function Home(){

    const featuredDestinations = touristDestinations.slice(0,4)
    const featuredEvents = events.slice(0,6)
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])

    return(
        <>
        <header>
            <Header>
                <h1 className='hero-title'>Discover the Wonders of <br /> Ethiopia</h1>
                <p className='hero-description'>From the rock-hewn churches of Lalibela to the breathtaking landscapes of <br /> the Simien Mountains, Ethiopia is a land of ancient wonders and vibrant culture. <br /> Discover timeless heritage, diverse traditions, <br /> and unforgettable adventures in the heart of Africa</p>
                <Link to="/destinations" className="hero-CTA">Go to Destinations</Link>
            </Header>
        </header>
        <section>
            <div className='featured-section'>
                <h1 className='section-title'>Featured Destinations</h1>
                <div className='featured-container'>
                    {featuredDestinations.map(featuredDestination => (
                        <Featured 
                            key={featuredDestination.id} 
                            img={featuredDestination.imageUrl} 
                            name={featuredDestination.name} 
                            description={featuredDestination.description}
                        />
                    ))}
                </div>
                <div className='featured-section-CTA'>
                    <a className='hero-CTA' href="">See All Destinations</a>
                </div>
            </div>
        </section>
        <section>
            <div className='activities-section'>
                <h1 className='section-title'>Unforgettable Experiences in Ethiopia</h1>
                <div className='activities'>
                    <div className='activity-grid activity-grid-left'>
                        <div className='activity-container'>
                            <img 
                                className='activity-img' 
                                src={touristDestinations.find(touristDestination => touristDestination.category.includes('Wildlife & Safari')).imageUrl} 
                                alt="image of wonchi" 
                            />
                            <div className="activity-description-overlay">
                                <div className='activity-description-container'>
                                    <h2>Safari & Wildlife</h2>
                                    <p>Spot rare wildlife in Ethiopia’s national parks, from lions to the Ethiopian wolf.</p>
                                    <Link className='btn' to="/destinations?category=Wildlife%20%26%20Safari">Learn More</Link>
                                </div>
                            </div>  
                        </div>
                        <div className='activity-container'>
                            <img 
                                className='activity-img' 
                                src={touristDestinations.find(touristDestination => touristDestination.category.includes('Adventure & Trekking')).imageUrl} 
                                alt="" 
                            />
                            <div className="activity-description-overlay">
                                <div className='activity-description-container'>
                                    <h2>Adventure & Trekking</h2>
                                    <p>Hike through dramatic landscapes, from the Simien Mountains to the Danakil Depression.</p>
                                    <Link className='btn' to="/destinations?category=Adventure%20%26%20Trekking">Learn More</Link>
                                </div>   
                            </div>     
                        </div>
                    </div>
                    <div className='activity-grid activity-grid-right'>
                        <div className='activity-container'>
                            <img 
                                className='activity-img' 
                                src={touristDestinations.find(touristDestination => touristDestination.category.includes('Cultural & Historical Sites')).imageUrl} 
                                alt="image of wonchi" 
                            />
                            <div className="activity-description-overlay">
                                <div className='activity-description-container'>
                                    <h2>Cultural & Historical Tours</h2>
                                    <p>Walk through ancient history at Ethiopia’s UNESCO Heritage Sites.</p>
                                    <Link className='btn' to="/destinations?category=Cultural%20%26%20Historical%20Sites">Learn More</Link>
                                </div>
                            </div>                           
                        </div>
                        <div className='activity-container'>
                            <img 
                                className='activity-img' 
                                src={touristDestinations.find(touristDestination => touristDestination.category.includes('Relaxation & Nature Escapes')).imageUrl} 
                                alt="" 
                            />
                            <div className="activity-description-overlay">
                                <div className='activity-description-container'>
                                    <h2>Relaxation & Nature Escapes</h2>
                                    <p>Unwind at breathtaking lakes, hot springs, and stunning landscapes.</p>
                                    <Link className='btn' to="/destinations?category=Relaxation%20%26%20Nature%20Escapes">Learn More</Link>
                                </div> 
                            </div>                            
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
        <section>
            <div className='event-section'>
                <h1 className='section-title'>Festivals & Cultural Events</h1>
                <div className='events-container'>
                    <div className='events-grid'>
                        {featuredEvents.map((featuredEvent, index) => (
                            <div key={featuredEvent.id} className={!index? 'event main-event': 'event'}>
                                <div className='event-detail-container'>
                                    <img src={featuredEvent.imageUrl} alt="" />
                                    <div className='event-detail'>
                                        <h3>{featuredEvent.name}</h3>
                                        <p>{featuredEvent.description}</p>
                                        <p>{featuredEvent.date}</p>
                                    </div>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className='visa-info-section'>
                <h1 className='section-title'>Visa & Entry Requirements</h1>
                <p className='visa-info'>Visitors to Ethiopia typically require a visa to enter the country. Ethiopia offers an eVisa system for travelers from many countries, allowing them to apply online before arrival. Visa-on-arrival is also available for select nationalities at Bole International Airport. Travelers should ensure their passport is valid for at least six months beyond their stay. For the latest visa regulations and application details, visit the Ethiopian Immigration website.</p>
                <a className='btn' href="https://www.evisa.gov.et/" target='_blank'>Check Visa Requirements</a>
            </div>
        </section>
        </>
        
    )
}

export default Home
import Markdown from 'react-markdown'
import Header from "./Header";
import Footer from './Footer';
import { touristDestinations } from './destinationsData';
import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';

function DestinationsDetail(){
    const markdown = touristDestinations.find(destination => destination.name === useParams().name)
    useEffect(()=>{
            window.scrollTo(0, 0);
    },[])
    return(
        <>
            <header>
                <Header img={markdown.imageUrl}>
                    <h1 className='hero-title hero-title-destination'>{markdown.name}</h1>
                </Header>
            </header>
            <section>    
                <div className='detail-section'>
                    <div className='toc'>
                        <Link to='/destinations'>&larr; Back to destinations</Link>
                        <h3>Content</h3>
                        <ul>
                            <li><a className='toc-link' href="#overview">Overview</a></li>
                            <li><a className='toc-link' href="#key-attractions">Key Attractions</a></li>
                            <li><a className='toc-link' href="#best-time-to-visit">Best Timeto Visit</a></li>
                            <li><a className='toc-link' href="#travel-tips">Travel Tips</a></li>
                            <li><a className='toc-link' href="#near-by-destinations">Nearby Destinations</a></li>
                        </ul>
                    </div>
                    <div className='detail-container'>
                        <h1>{markdown.name}</h1>
                        <p><i>"{markdown.tagline}"</i></p>
                        <h2 id='overview'>Overview</h2>
                        <p >{markdown.overview}</p>
                        <h2 id='key-attractions'>Key Attractions</h2>
                        <ul>
                            {markdown.keyAttractions.map(attraction => <li key={attraction}>{attraction}</li>)}
                        </ul>
                        <h2 id='best-time-to-visit'>Best Time to Visit</h2>
                        <p>{markdown.bestTimeToVisit}</p>
                        <h2 id='travel-tips'>Travel Tips</h2>
                        <p>{markdown.travelTips}</p>
                        <h2 id='near-by-destinations'>Nearby Destinations</h2>
                        <p>{markdown.nearbyDestinations}</p>

                    </div>
                </div>
                
            </section>
        </>
        
        
        
    )
}

export default DestinationsDetail
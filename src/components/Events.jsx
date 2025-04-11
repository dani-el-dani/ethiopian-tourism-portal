import { useEffect } from "react";
import Header from "./Header"
import { events } from "./destinationsData"

function Events(){
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
            <div className='event-page-section'>
                <h1 className='section-title'>Festivals & Cultural Events</h1>
                <div className="event-cards-container">
                    {
                        events.map((eventElement, index) => (
                            <div key={eventElement.id} className='event-card'>
                                <div className={index & 1 ? 'event-image-container event-image-container-reverse' : 'event-image-container'}>
                                    <img src={eventElement.imageUrl} alt="" />
                                </div>
                                <div className='event-detail-info'>
                                    <h2>{eventElement.name}</h2>
                                    <p>{eventElement.description}</p>
                                    <p>{eventElement.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </section>
        </>
    )
}

export default Events
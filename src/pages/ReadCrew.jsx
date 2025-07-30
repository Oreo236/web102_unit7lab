import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'


const ReadCrew = (props) => {

    const [crew, setCrew] = useState([])

    useEffect( () => {
        const fetchCrew = async () => {
        const {data} = await supabase
            .from('Crew')
            .select();

        // set state of posts
        setCrew(data)
        }
        fetchCrew()
    }, [props])
    
    return (
        <div className="ReadCrew">
            <h1>Crewmate Gallery</h1>
            {
                crew && crew.length > 0 ?
                [...crew]
                .sort((a, b) => a.id - b.id)
                .map((crew,index) => 
                    <Card 
                        key={crew.id}
                        id={crew.id} 
                        name={crew.name}
                        speed={crew.speed}
                        color={crew.color}
                    />
                ) : <h2>{"You haven't made a crewmate yet"}</h2>
            }
            <a href="/new" className="create-link">Create one here!</a>
        </div>  
    )
}

export default ReadCrew
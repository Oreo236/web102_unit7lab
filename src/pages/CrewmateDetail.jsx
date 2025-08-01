import {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import './CrewmateDetail.css'
import { supabase } from '../client'

const CrewmateDetail = () => {
    const {id} = useParams()
    const [crew, setCrew] = useState(null)

    useEffect(() => {
        const fetchCrew = async () => {
                const {data} = await supabase
                    .from('Crew')
                    .select()
                    .eq('id', id)
                    .single()
                
                setCrew(data)
        } 
        fetchCrew()
    }, [id])

    if (!crew) return <div className="crewmate-detail">Crewmate not found</div>

    return (
        <div className="crewmate-detail">
            <div 
                className="crewmate-card" 
                style={{
                    borderColor: crew.color, 
                    '--crewmate-color': crew.color
                }}
            >
                <h2>Crewmate: {crew.name}</h2>
                <h2>Stats: </h2>
                <p>Speed: {crew.speed} mph</p>
                <p>Color: {crew.color}</p>
                <Link to={`/edit/${crew.id}`} className="edit-button">
                    Edit Crewmate
                </Link>
            </div>
        </div>
    )
}

export default CrewmateDetail
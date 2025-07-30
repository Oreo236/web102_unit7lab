import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import './EditCrew.css'

import { supabase } from '../client'


const EditCrew = () => {
    const {id} = useParams()
    const [crew, setCrew] = useState({name: "", speed: 1, color: ""})
    useEffect(() => {
        const fetchCrew = async () => {
            const {data} = await supabase
                .from('Crew')
                .select()
                .eq('id', id)
                .single()
            if (data) setCrew(data)
        } 
        fetchCrew()
    }, [id])
    const updateCrew = async (event) => {
        event.preventDefault()
        await supabase
            .from('Crew')
            .update({name: crew.name, speed: crew.speed, color: crew.color})
            .eq('id', id)
        window.location = "/"
    }
    const deleteCrew = async (event) => {
        event.preventDefault()
        await supabase
            .from('Crew')
            .delete()
            .eq('id', id)
        window.location = "/"
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form className='edit-form'>
                <label htmlFor="name">Name: </label> <br />
                <input type="text" id="name" name="name" value={crew.name} onChange={handleChange} placeholder="Enter crewmate's name" required/>

                <label htmlFor="speed">Speed(mph): </label><br />
                <input type="number" id="speed" name="speed" value={crew.speed} onChange={handleChange} placeholder="Speed (1-10)" min="1" max="10" required/>

                <label htmlFor="color">Color: </label><br />
                <select id="color" name="color" value={crew.color} onChange={handleChange} required>
                    <option value="">Select a color</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Green">Green</option>
                    <option value="Yellow">Yellow</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Purple">Purple</option>
                    <option value="Orange">Orange</option>
                    <option value="Pink">Pink</option>
                    <option value="Brown">Brown</option>
                    <option value="Cyan">Cyan</option>
                    <option value="Lime">Lime</option>
                </select>
                <button type="submit" value="Submit" onClick={updateCrew}>Update Crewmate</button>
                <button className="deleteButton" onClick={deleteCrew} >Delete</button>
            </form>
        </div>
    )
}

export default EditCrew
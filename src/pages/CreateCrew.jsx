import { useState } from 'react'
import './CreateCrew.css'
import { supabase } from '../client'

const CreateCrew = () => {

    const createCrew = async (event) => {
        event.preventDefault()
        await supabase
            .from('Crew')
            .insert({name: crew.name, speed: crew.speed, color: crew.color})
            .select()
        window.location = "/"
        
    }

    const [crew, setCrew] = useState({name: "", speed: 1, color: ""})

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
            <form className='create-form'>
                <label htmlFor="name">Name: </label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} placeholder="Enter crewmate's name" required/>

                <label htmlFor="speed">Speed(mph): </label><br />
                <input type="number" id="speed" name="speed" onChange={handleChange} placeholder="Speed (1-10)" min="1" max="10" required/>

                <label htmlFor="color">Color: </label><br />
                <select id="color" name="color" onChange={handleChange} required>
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
                <button type="submit" value="Submit" onClick={createCrew}>Create Crewmate</button>
            </form>
        </div>
    )
}

export default CreateCrew
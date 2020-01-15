import React,{ useState, useEffect } from 'react'
import api from '../../services/Api'

function DevForm({ devItems,setDevs }) {
    
   const [ user, setUser ] = useState('');
   const [ techs, setTechs ] = useState('');

   const [ latitude, setLatitude ] = useState('');
   const [ longitude, setLongitude ] = useState('');

   useEffect(function() {
     navigator.geolocation.getCurrentPosition(
       position => {
         const { latitude, longitude } = position.coords
         setLatitude(latitude)
         setLongitude(longitude)
       },
       error => console.log(error),
       {timeout:3000}
       )
   },[])

    async function handleSubmit(e){
        e.preventDefault()
        const response = await api.post('/devs',{
           github_username:user,
           techs,
           latitude,
           longitude
        })
        setUser('')
        setTechs('')
        setDevs([...devItems,response.data ])
      }


   return (
    <form>
    <div className="input-block">
      <label htmlFor="github_username">Usuario github</label>
      <input onChange={(e) => setUser(e.target.value)} name="github_username" id="github_username" type="text" value={ user }/>
    </div>

    <div className="input-block">
      <label htmlFor="techs">Tecnologias</label>
      <input onChange={(e) => setTechs(e.target.value)} name="techs" id="techs" type="text" value={ techs }/>
    </div>

    <div className="input-group">
      <div className="input-block">
        <label htmlFor="latitude">Latitude</label>
        <input onChange={(e) => setLatitude(e.target.value)} value={ latitude } name="latitude" id="latitude" type="text"/>
      </div>
      <div className="input-block">
        <label htmlFor="longitude">Longitude</label>
        <input onChange={(e) => setLongitude(e.target.value)} value={ longitude } name="longitude" id="longitude" type="text"/>
      </div>
    </div>
    <button onClick={ handleSubmit } type="submit">Salvar</button>
  </form>
   )
}

export default DevForm
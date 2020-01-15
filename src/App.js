import React, { useEffect, useState } from 'react'
import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'



function App() {
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

  return   (
   <div id="app">
     <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuario github</label>
            <input name="github_username" id="github_username" type="text"/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" type="text"/>
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
          <button type="submit">Salvar</button>
        </form>
     </aside>
     <main>
        <ul>
          <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/12118814?s=460&v=4" alt=""/>
                <div className="user-info">
                  <strong>Thiago kauai</strong>
                  <span>React js,React Native,Js,Php</span>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ratione?</p>
              <a href="https://gitub.com/kauai">Acessar perfil</a>
          </li>

          <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/12118814?s=460&v=4" alt=""/>
                <div className="user-info">
                  <strong>Thiago kauai</strong>
                  <span>React js,React Native,Js,Php</span>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ratione?</p>
              <a href="https://gitub.com/kauai">Acessar perfil</a>
          </li>

          <li className="dev-item">
              <header>
                <img src="https://avatars2.githubusercontent.com/u/12118814?s=460&v=4" alt=""/>
                <div className="user-info">
                  <strong>Thiago kauai</strong>
                  <span>React js,React Native,Js,Php</span>
                </div>
              </header>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ratione?</p>
              <a href="https://gitub.com/kauai">Acessar perfil</a>
          </li>
        </ul>
     </main>
   </div>
  )
}

export default App;

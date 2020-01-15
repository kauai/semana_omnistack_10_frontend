import React, { useEffect, useState } from 'react'
import api from './services/Api'
import ListItem from './components/DevItem/index'
import DevForm from './components/DevForm/index'

import './Global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
   const [ devs, setDevs ] = useState([])

   useEffect(() => {
      (async function loadDevs() {
        const response = await api.get('/devs')
        setDevs(response.data)
        console.log(response.data)
      })()
   },[])

  return   (
   <div id="app">
     <aside>
        <strong>Cadastrar</strong>
        <DevForm devItems={ devs } setDevs={ setDevs }/>
     </aside>
     <main>
        <ul>
          {devs.map(item => <ListItem key={item._id} item={ item }/> )}
        </ul>
     </main>
   </div>
  )
}

export default App;

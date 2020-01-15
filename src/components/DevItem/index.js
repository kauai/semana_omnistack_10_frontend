import React from 'react'
import './style.css'



function ListItem({ item }) {
    return (
        <li className="dev-item">
            <header>
            <img src={item.avatar_url && item.avatar_url} alt=""/>
            <div className="user-info">
                <strong>{item.name}</strong>
                <span>Tecnologias:{item.techs && item.techs.join(' ,')}</span>
            </div>
            </header>
            <p>{item.bio}</p>
            <a href={`https://github.com/${item.name}`}>Acessar perfil</a>
    </li>
 )
}

export default ListItem
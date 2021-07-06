import React from "react"

export default function NavBar(){

    return(
      <div className='nb_container flex'>
        <div className='nb_image' >
          <img src='https://emprelatam.com/wp-content/uploads/2019/10/logos-coderhouse-01.png'></img>
        </div>
        <div className='nb_routes flex flow-r'>
          <ul className='nb_routes flex flow-r'>
              <li className='nb_route'>
                <p>Productos</p>
              </li>
              <li className='nb_route'>
                <p>Nosotros</p>
              </li>
              <li className='nb_route'>
                <p>Carrito</p>
              </li>
          </ul>
        </div>
      </div>
    )
  }
import React from 'react'

{/** un Archivo JS o JSX puede tener uno o varios componentes */}

{/**export default hace referencia que este es siempre va a dibujarse por defecto */}
export default function Jsx() {
    return (
        <div>
            {/**
             * JSX es una Extension de JAVA script que nos permite
             * escribir codigo usando una Syntaxis muy similar a HTML
             */}
             <Component/>
             {/**el Componente que acabamos de llamar es una function
              * y se la podemos pasar de la forma que escribimos una etiqueta en HTMl
              * tomando en cuenta que:
              * -El componente siempre debe Inicial con la primera letra mayuscula,
              * de lo contrario sera entendida como un etiqueta HTML comun
              * -si importamos un componente otro que esta en otra parte con el App.js
              * debemos importarlo usando la Syntaxys
              * 
              * import nombre-de-componente from 'direcion-de-componente'
              * 
              */}
              <buton onClick='' onMouseDown=''></buton>
              {/**las Etiquetas HTML se escriben igual, pero ahora sus controles son llamados midiante camelCase
               * Ejemplos: 
               * HTML Clasico : onclick, onchange,onsubmit
               * HTML JSX:      onClick, onChange,onSubmit
               */}

        </div>
    )
}
{/**export se usa para poder llamar un componente desde otra*/}
export function Component1() { 
    return(
    <h1>Soy un Componente</h1>
    )
}

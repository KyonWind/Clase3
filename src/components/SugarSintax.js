import React from 'react'

export default function SugarSintax() {

    var array = [5,6,7];
    //BUCLE FOR..OF
    const loopFOROF = () =>{
        let bucleforOF = ``;
        for (let index of array) {
           bucleforOF += ` ${index}`;
        }
        return bucleforOF;
    }
    //BUCLE FOR
    const loopFOR = () =>{
        let buclefor = '';
        for (let i = 0; i < array.length; i++) {
           buclefor += ` ${array[i]}`;
        }
        return buclefor;
    }
    //TERNARY
    const ternary = (boolean) =>{
        let result;

        boolean? result = true: result `${boolean}`
        return result;
    }
    //IFELSE
    const ifelse = (boolean) =>{
        let result;
        if (boolean) { 
            return `${boolean}`
        } else {
            return `${boolean}`
        }
    }
    //SPREAD...
    const spreadOperator = () =>{
       //agregar un item al array
        let newElement = 10;
     let array2  = [...array, newElement]
       return `${array2}`
    }
    const push = () =>{
        //agregar un item al array
         let newElement = 10;
        let array3 = array;
        array3.push(newElement);
        return `${array3}`
     }
     const filter = () =>{
        //agregar un item al array
        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

        const result = words.filter(element => element.length > 6);
        return `${result}`
     }
     


    return (
        <div className='container flex jc'>
        <div className='box flex jc ai flow-c'>
            <h2>Loop of</h2>
            <p>Sugar-Syntax</p>
            <h3>for(let index of array){"{}"}</h3>
            <p>Normal sintax</p>
            <h3>{"for (let index = 0; index < array.length; index++){}"}</h3>
            
        </div>

        <div className='box flex jc ai flow-c'>
            <h2>Ternary Operator</h2>
            <p>Sugar-Syntax</p>
            <h3>condition ? true:false</h3>
            <p>Normal sintax</p>
            <h3>'if (condition) {"{true}"} else {"{false}"}'</h3>
        </div>
        <div className='box flex jc ai flow-c'>
            <h2>spread Operator</h2>
            <p>Sugar-Syntax</p>
            <h3>let array2  = [...array, newElement]</h3>
            <p>Normal sintax</p>
            <h3>let array3 = array; array.push(newElement);</h3>
        </div>
        <div className='box flex jc ai flow-c'>
            <h2>.filter(condition)</h2>
            <p>Sugar-Syntax</p>
            <h3>let newArray = oldArray.filter(condition);</h3>
            {filter()}
            <p>Normal sintax</p>
            <h3>{"array.forEach(element => {if(condition){array2.push(element)}})"}</h3>
            {}
        </div>
        

        </div>
    )
}

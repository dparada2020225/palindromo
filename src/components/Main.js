import React from 'react'
import { useState} from "react";


const Main = () => {

    const [title, setTitle] = useState("");
    
    // ESTA ES OTRA FORMA DE HACERLO CON CASE SENSITIVE
    // function polindromo(str) {
    //     const strReversed = str.split("").reverse().join("");
    //     if(str === "") return "";
    //     return strReversed === str ? "es palindromo" : "no es palindromo";
    //   }

    // ESTA ES OTRA FORMA DE HACERLO SIN CASE SENSITIVE Y EXPRECIONES REGULARES
    function polindromo(str) {
        var re = /[\W_]/g;
        var lowRegStr = str.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        if(str === "") return "";
        return reverseStr === lowRegStr ? "es palindromo" : "no es palindromo";
      }

      
      
      function handleInputChange(e) {
        setTitle(e.target.value);
      }
    
    return (
        <>
            <div>
                <h3>polindromos</h3>
                <label for="name">Ingrese la palabra:</label>
                <input type="text" onChange={handleInputChange} id="name" name="name" required minlength="4" maxlength="50" size="10"></input>
                <h1> {polindromo(title)}</h1>
            </div>
        </>
    );
}

export default Main;
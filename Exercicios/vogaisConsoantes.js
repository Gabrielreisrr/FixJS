const analisaVogais = (string) => {
    const vogais = ["a", "e", "i", "o", "u"];
    let x = "";
    
    for (let letra of string) {
        if (vogais.includes(letra)) x += letra;
    }
    
    return x;
}

console.log(analisaVogais("abcdeddvb")); 
console.log(analisaVogais("javascript")); 
function commonCharacter() {
    let count = 0
    const strArray1 = arguments[0].split('') 
    const strArray2 = arguments[1].split('')
     for (let i = 0; i < strArray1.length; i++) {
         const index = strArray2.indexOf(strArray1[i])
          if (index !== -1) { 
              //console.log(strArray2[index])
              //strArray2.slice(index, 1)
              strArray2.splice(index, 1)

                count += 1 
             } 
        
        }
        
        return count
        
 }
 console.log(commonCharacter("aabcc", "adcaa"))
   
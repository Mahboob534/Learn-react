
function sortByHeight(args) {
 const sortedArgs = [...args].filter(function(num){return num !== -1})
 sortedArgs.sort()
 let Index = 0
 for (let i = 0; i < args.length; i++) {
      if (args[i] === -1) continue
         else {

             args[i] = sortedArgs[Index++]
        }
    }
    return args;
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log(sortByHeight([-1, '150', 190, 170, -1, -1, 160,180]))

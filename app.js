
//console.log (process.argv)
const Movie = require ('./utils')
const movieArray = ['one','two,','three']
addmov = 0
const app =(argv) => {
     switch(argv[2]){
        case "add":
             //const movie = argv[3]// grab movie rfrom argument vector
           //console.log(movie)
           for ()
           const newMovie = new Movie(argv[3], argv[4]) 
           movieArray[addmov] = new Movie(argv[3], argv[4]) 
           addmov ++
           
           console.log(newMovie)
  
           console.log(movieArray)
           console.log(addmov)
           
           break;
        case "showall":
        default:
          console.log(movieArray)
            break

     }
}

app (process.argv)
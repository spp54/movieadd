const movieArr = [];

class movie {
    constructor(title, actor = "Not There matey"){
              this.title = title
              this.actor = actor
}
 add(){
    movieArr.push(this)
    console.log(movieArr)
 }
}

module.exports = movie
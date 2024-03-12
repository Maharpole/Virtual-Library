// create your Media class:
class Media{
    constructor(title,year,genre,totalMediaCount){
    this.title = title;
    this.genre = genre;
    this.year = year;
    this.totalMediaCount = totalMediaCount;
    }
    summary(){
        return `Title: ${title}, Year: ${year}, Genre: ${genre} `
    }
}
// uncomment below to export it:
module.exports = Media;

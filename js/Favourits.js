// let movies;
//     const add2Fav = (movie) => {
//          movies = localStorage.getItem("favMovies")
//     ? JSON.parse(localStorage.getItem("favMovies"))
//     : [];
//   const movieIndex = movies.findIndex((m) => m.id == movie.id);//movie ده الفيلم ال دوست عليه
//   if (movieIndex >= 0) {
//     alert("movie already exist in your fav");
//     return true;
//   }
//   movies.push(movie);
//   movies = JSON.stringify(movies);
//   localStorage.setItem("favMovies", movies);
//       };
//       console.log(movies);
function getCart(){
    let cart=JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    let cartona=``;
    for(let i=0;i<cart.length;i++){
        cartona+=`
        <div class="col-lg-4 col-md-6 my-2">
            <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500${cart[i].poster_path}" class="w-100"/>
                <div class="movieCaption">
                    <h2>${cart[i].title}</h2>
                    <p> ${cart[i].overview}</p>
                    <p>${cart[i].vote_average}</p>
                    <p>${cart[i].release_date}</p>
                    <br>
                </div>         
            </div>
        </div>
        `
    }
    document.getElementById('body').innerHTML=cartona;
}
// import axios from 'axios';


// export const phonebookApi = () => {
//     const url = 'https://619b80902782760017445631.mockapi.io/api/v1/';
//     axios.get(url)
//         .then((result) => {
//             console.log(result.data);
//             return result.data;
//         })
//         .catch((error) => console.log(error));
// }
// trendingMovies() {
//     const url = "https://api.themoviedb.org/3/";
//     const apiKey = "7c2b2b3c6c797e2889781dee57c7a6ae";
//     const params = `trending/all/day?api_key=${apiKey}&page=${this._page}`;
//     const fetch = url + params;
//     return axios
//       .get(fetch)
//       .then((result) => {
//         // console.log(result);
//         return result.data;
//       })
//       .then((data) => {
//         // console.log(data.results);
//         return data.results;
//       })
//       .catch((error) => console.log(error));
//   }
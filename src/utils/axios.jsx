import axios from 'axios';

const instace = axios.create ({
    baseURL : "https://api.themoviedb.org/3/",
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDYzYTQ1YmI1OWJhMWVmNzc5MWQyNWIwYmFkOTE4YiIsInN1YiI6IjY2NTdmZjU3ZGFiNzdjY2E0ZTFkMWRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RGR5gC7zh96Z_0PTAUeFf1Zp_6X2VTvnXorTR1iVB6c'
  }
});

export default instace;
import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie"
})
instance.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjQ5ODZhYTE5ZDUzNTg3NDQ5ZDhiODBiODU1YjFjNyIsIm5iZiI6MTcyNjIyMzYzNy40MjksInN1YiI6IjY2ZTQxNTE1ZjQ2N2MyYWQ2MmY5NzdkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19NVhgz2WoxtSETp-WEkKlolPAhKDB0tVehS9DpZ1wY'


export default instance;
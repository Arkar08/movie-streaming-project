import Login from "../pages/auth/Login/Login";
import Signup from "../pages/auth/Signup/Signup";
import Movies from "../pages/Movies/Movies";
import Series from "../pages/Series/Series";
import Shows from "../pages/Shows/Shows";
import Trending from "../pages/Trending/Trending";
import Notfound from "../pages/NotFound/Notfound";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import Anime from "../pages/Anime/Anime";
import MovieParams from "../pages/movieId/MovieParams";
import SeriresParams from "../pages/seriesId/SeriresParams";

export const data = [
    {
        path:'auth/login',
        title:'Login',
        Component: Login
    },
    {
        path:'/auth/signup',
        title:'Signup',
        Component:Signup
    },
    {
        path:'/',
        title:'Main',
        Component:Main,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/movies',
                title:'Movies',
                Component:Movies
            },
            {
                path:'/series',
                title:'Series',
                Component:Series
            },
            {
                path:'/shows',
                title:'Shows',
                Component:Shows
            },
            {
                path:'/trending',
                title:'Trending',
                Component:Trending
            },
            {
                path:'/anime',
                title:'Anime',
                Component:Anime
            },
            {
                path:'/movies/:id',
                title:"Movies",
                Component:MovieParams
            },
            {
                path:'/series/:id',
                title:"Series",
                Component:SeriresParams
            }
        ]
    },
    {
        path:'*',
        title:'Notfound',
        Component:Notfound
    }
]

export default data;
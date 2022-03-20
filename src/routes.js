import Users from './components/pages/Users';
import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
// 컴포넌트를 가져와서 값처럼 쓰기 . 
export default [
    {
        path:'/',
        component:Home
        //여기 component에는 Home이라는 컴포넌트가 담긴다.
    },
    {
        path:'/movies',
        component:Movies
    },
    {
        path:'/users',
        component:Users
    },
]
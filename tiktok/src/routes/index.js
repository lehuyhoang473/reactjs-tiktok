
// Layouts
import{ HeaderOnly} from "~/components/Layout";


// pages
import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
// không đăng nhập vẫn xem được
const publicRouter = [
    { path: '/', component: Home},
    { path: '/following', component: Following},
    { path: '/profile', component: Profile},
    { path: '/upload', component: Upload, layout:HeaderOnly },
    { path: '/search', component: Search, layout:null },
]

// đăng nhập mới xem được
const privateRoutes = [

]

export {publicRouter , privateRoutes}
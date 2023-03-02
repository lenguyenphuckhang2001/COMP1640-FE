import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Navbar } from './Components/NavBar/Navbar';
import { CreatePost } from './Pages/CreatePost/CreatePost';
import { Home } from './Pages/Home/Home';
import { UserInfo } from './Pages/UserInfo/UserInfo';
import { Question } from './Pages/Question/Question';
import { Login } from './Pages/Member/Login';
import { Logout } from './Pages/Logout/Logout';
import { Register } from './Pages/Member/Register';
import { Forgotpassword } from './Pages/Member/Forgotpassword';
import { ListPost } from './Components/ListPost/Listpost';
import Index from './Index';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index/>}>
      <Route path='/' element={<Home />} />
      <Route path='create-post' element={<CreatePost />} />
      <Route path='question' element={<Question />} />
      <Route path='Account/user-info' element={<UserInfo />} />
      <Route path='Account/login' element={<Login />} />
      <Route path='Account/register' element={<Register />} />
      <Route path='logout' element={<Logout />} />
      <Route path='Account/forgotpass' element={<Forgotpassword />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

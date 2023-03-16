import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { CreatePost } from './Pages/CreatePost/CreatePost';
import { Home } from './Pages/Home/Home';
import { UserInfo } from './Pages/UserInfo/UserInfo';
import { Saved } from './Pages/UserInfo/Saved/Saved';
import { History } from './Pages/UserInfo/History/History';
import { Edit } from './Pages/UserInfo/Edit/Edit';
import { ChangePassword } from './Pages/UserInfo/Edit/ChangePassword/ChangePassword';
import { Question } from './Pages/Question/Question';
import { Login } from './Pages/Member/Login';
import { Logout } from './Pages/Logout/Logout';
import { Register } from './Pages/Member/Register';
import { Forgotpassword } from './Pages/Member/Forgotpassword';
import { QaManagement } from './Pages/QaManagement/QaManagement';
import Index from './Index';
import { QuestionDetail } from './Pages/QuestionDetail/QuestionDetail';
import { Admin } from './Pages/Admin/Index';
import { MainDash } from './Components/Admin/MainDash/MainDash';
import { Postmanage } from './Components/Admin/PostManage/Postmanage';
import { Usermanage } from './Components/Admin/UserManage/Usermanage';
import { Analytics } from './Components/Admin/Analytics/Analytics';

import { Analyticstag } from './Components/Admin/Analytics Tag/Analyticstag';
import { AnalyticsPost } from './Components/Admin/AnalyticsPost/AnalyticsPost';

import { ListPost } from './Components/ListPost/Listpost';
import Index from './Index';
import { QuestionDetail } from './Pages/QuestionDetail/QuestionDetail';
import QaManagement from './Pages/QaManagement/QaManagement';
import { Department } from './Pages/QaManagement/Department/Department';
import { Categories } from './Pages/QaManagement/Categories/Categories';
import { DownloadData } from './Pages/QaManagement/DownloadData/DownloadData';
import { Statistical } from './Pages/QaManagement/Statistical/Statistical';
import { Academic } from './Pages/QaManagement/Academic/Academic';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index />}>
      <Route path='/' element={<Home />} />
      <Route path='create-post' element={<CreatePost />} />
      <Route path='question' element={<Question />} />
      <Route path='Account/user-info' element={<UserInfo />}>
        <Route path='saved' element={<Saved />} />
        <Route path='history' element={<History />} />
        <Route path='edit' element={<Edit />} />
      </Route>
      <Route path='change-password' element={<ChangePassword />} />
      <Route path='Account/login' element={<Login />} />
      <Route path='Account/register' element={<Register />} />
      <Route path='logout' element={<Logout />} />
      <Route path='Account/forgotpass' element={<Forgotpassword />} />
      <Route path='Qamanagement' element={<QaManagement />}>
        <Route path='department' element={<Department />} />
        <Route path='categories' element={<Categories />} />
        <Route path='downloadData' element={<DownloadData />} />
        <Route path='statistical' element={<Statistical />} />
        <Route path='academic' element={<Academic />} />
      </Route>
      <Route path='QuestionDetail' element={<QuestionDetail />} />
      <Route path='Account/admin' element={<Admin />}>
        <Route path='' element={<MainDash />} />
        <Route path='post' element={<Postmanage />} />
        <Route path='user' element={<Usermanage />} />
        <Route path='analytics' element={<Analytics />}>
          <Route path='' element={<Analyticstag />} />
          <Route path='post' element={<AnalyticsPost />} />
        </Route>
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

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
import { Forgotpassword } from './Pages/Member/Forgotpassword';
import Index from './Index';
import { QuestionDetail } from './Pages/QuestionDetail/QuestionDetail';
import { Admin } from './Pages/Admin/Index';
import { MainDash } from './Components/Admin/MainDash/MainDash';
import { Postmanage } from './Components/Admin/PostManage/Postmanage';
import { Usermanage } from './Components/Admin/UserManage/Usermanage';
import { Analytics } from './Components/Admin/Analytics/Analytics';
import Manage from './Pages/Manage/Manage';
import { Department } from './Components/Manage/Department/Department';
import { Categories } from './Components/Manage/Categories/Categories';
import { DownloadData } from './Components/Manage/DownloadData/DownloadData';
import { Statistical } from './Components/Manage/Statistical/Statistical';
import { Analyticstag } from './Components/Admin/Analytics Tag/Analyticstag';
import { AnalyticsPost } from './Components/Admin/AnalyticsPost/AnalyticsPost';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './Pages/Protected/ProtectedRoute';
import ChakaraProvi from './Pages/Protected/ChakaraProvi';
import AdminProtectedRoute from './Pages/Protected/AdminProtectedRoute';
import CreateDepartment from './Components/Manage/Department/CreateDepartment';
import DepartmentDetail from './Components/DepartmentDetail/DepartmentDetail';
import Academic from './Components/Academic/Academic';
import CreateAcademic from './Components/Academic/CreateAcademic';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Index />}>
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<Home />} />
        <Route element={<ChakaraProvi />}>
          <Route path='create-post' element={<CreatePost />} />
        </Route>
        <Route path='question' element={<Question />} />
        <Route path='Account/user-info' element={<UserInfo />}>
          <Route path='' element={<Saved />} />
          <Route path='edit' element={<Edit />} />
        </Route>
      </Route>
      <Route path='change-password' element={<ChangePassword />} />
      <Route path='Account/login' element={<Login />} />
      <Route path='Account/forgotpass' element={<Forgotpassword />} />
      <Route path='QuestionDetail/:postId' element={<QuestionDetail />} />
      <Route path='Account/Manage' element={<Manage />}>
        <Route path='' element={<Categories />} />
        <Route path='downloadData' element={<DownloadData />} />
        <Route path='statistical' element={<Statistical />} />
      </Route>
      <Route element={<AdminProtectedRoute />}>
        <Route path='Account/admin' element={<Admin />}>
          <Route path='' element={<MainDash />} />
          <Route path='post' element={<Postmanage />} />
          <Route path='user' element={<Usermanage />} />
          <Route element={<ChakaraProvi />}>
            <Route path='academic' element={<Academic />} />
            <Route path='create-academic' element={<CreateAcademic />} />
            <Route path='departments' element={<Department />} />
            <Route path='create-department' element={<CreateDepartment />} />
            <Route path='department/:departmentId' element={<DepartmentDetail />} />
          </Route>
          <Route path='analytics' element={<Analytics />}>
            <Route path='' element={<Analyticstag />} />
            <Route path='post' element={<AnalyticsPost />} />
          </Route>
        </Route>
      </Route>
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer theme='dark' />
    </>
  );
}

export default App;

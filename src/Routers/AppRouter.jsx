import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import User from "../pages/User/User";
import UserProtected from "./UserProtected";
import Login from "../pages/Login/Login";
import Category from "../pages/Category/Category";
import CategoryItem from "../pages/CategoryItem/CategoryItem";
import ItemPage from "../pages/ItemPage/ItemPage";
import NoUrl from "../pages/404/NoUrl";
import AdminProtected from "./AdminProtected";
import Admin from "../pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category",
        children: [
          {
            index: true,
            element: <Category />,
          },
          {
            path: ":categoryId",
            children: [
              {
                index: true,
                element: <CategoryItem />,
              },
              {
                path: ":itemId",
                element: <ItemPage />,
              },
            ],
          },
        ],
      },
      {
        element: <UserProtected />,
        children: [
          {
            path: "profile",
            element: <User />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/404",
    element: <NoUrl />,
  },
  {
    path: "/admin",
    element: <AdminProtected />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;

  //   return (
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<MainLayout />}>
  //           <Route index element={<Home />} />
  //           <Route element={<UserProtected />}>
  //             <Route path="user" element={<User />} />
  //           </Route>
  //         </Route>
  //         <Route path="/login" element={<Login />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
};

export default AppRouter;

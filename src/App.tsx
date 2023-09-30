// import { ThemeSwitcher } from '#features/theme-switcher/theme-switcher';
// import './App.css';
// import { Blog } from './pages/all-posts';
// import { SearchResults } from './pages/search-results';
// import { SelectedPost } from './pages/selected-post';
// import { SignIn } from './pages/sign-in';
// import { SignUp } from './pages/sign-up';
// import { Success } from './pages/success';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";

// function App() {
//   return (
//     <div className="App">
//       <ThemeSwitcher />
//       <Success></Success>
//       <SignUp></SignUp>
//       <SignIn></SignIn> 
//       <Blog ></Blog>
//       <SelectedPost></SelectedPost>
//       <SearchResults></SearchResults>
//     </div>
//   );
// }

// export default App;

const router = createBrowserRouter ([{path: '*', Component: Root}])

export default function App()
{
  return <RouterProvider router={router} />
} 
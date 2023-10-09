import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { SignUp } from './pages/sign-up';
import { Blog } from './pages/all-posts';
import { SelectedPost } from './pages/selected-post';
import { SignIn } from './pages/sign-in';

function Root() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<Link to="/posts">Go to posts</Link>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/posts" element ={<Blog />} />
          <Route path="/posts/:postId" element={<SelectedPost />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Root;

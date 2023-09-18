import './App.css';
import { Blog } from './pages/all-posts';
import { SelectPost } from './pages/selected-post';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import { Success } from './pages/success';

function App() {
  return (
    <div className="App">
      <Success></Success>
      <SignUp></SignUp>
      <SignIn></SignIn> 
      <Blog ></Blog>
      <SelectPost></SelectPost>
    </div>
  );
}

export default App;


import './App.css';
import { Title } from './ui/title/title';
import { Menu } from './ui/header/menu';
import { cardArray } from './arrayData';
import { ListCard } from './ui/list-posts/list-posts';
import { useState } from 'react';
import { TabsPanel } from '#ui/tabs/tabs';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';

function App() {
  const tabItems = [
    { id: "1", name: "All" },
    { id: "2", name: "My favorites" },
    { id: "3", name: "Popular" },
  ];
  const [activeTabId, setActiveTabId] = useState(tabItems[0].id);
  return (
    <div className="App">
      <Title>Sign In</Title>
      <SignUp></SignUp>
      <SignIn></SignIn>
      <Menu />
      <TabsPanel
        items={[
          { id: "1", name: "All" },
          { id: "2", name: "My favorites" },
          { id: "3", name: "Popular" },
        ]}
        activeId={activeTabId}
        onTabClick={setActiveTabId}
      />
      <ListCard value={cardArray}></ListCard>
    </div>
  );
}

export default App;

// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Root from './Root';

// const router = createBrowserRouter([
//   {
//     path: '*',
//     Component: Root,
//   },
// ]);

// export default function App() {
//   return <RouterProvider router={router} />;
// }

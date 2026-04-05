import { useState } from 'react';
import './App.css';
import DefaultPage from './pages/DefaultPage';
import { Route, Routes } from 'react-router-dom';
import GuestBookInsertPage from './pages/guestbook/GuestBookInsertPage';
import GuestBookListPage from './pages/guestbook/GuestBookListPage';
import ErrorPage from './pages/error/ErrorPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/*" element={<DefaultPage />}>
          <Route path="insert" element={<GuestBookInsertPage />} />
          <Route path="list" element={<GuestBookListPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

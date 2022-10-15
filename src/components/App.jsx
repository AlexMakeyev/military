import { Routes, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
export const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </>
  );
};

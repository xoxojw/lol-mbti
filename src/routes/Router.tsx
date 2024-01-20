import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "pages/Main";
import Test from "pages/Test";
import Result from "pages/Result";
import LoadingTest from "pages/LoadingTest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
        <Route path="/development" element={<LoadingTest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
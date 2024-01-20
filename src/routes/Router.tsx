import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from "pages/Main";
import Test from "pages/Test";
import Result from "pages/Result";
import NotFound from "pages/NotFound";

import LoadingTest from "pages/LoadingTest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result" element={<Result />} />
        <Route path="/development" element={<LoadingTest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
import { Routes, Route } from 'react-router-dom';

import Main from "pages/Main";
import Test from "pages/Test";
import Result from "pages/Result";
import NotFound from "pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/test" element={<Test />} />
      <Route path="/result/:result" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router;
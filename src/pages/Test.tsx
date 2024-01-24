import QnA from "components/QnA";
import MetaData from "components/meta/MetaData";
import { useEffect } from "react";

const Test = () => {
  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", preventClose);
    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  return (
    <>
      <MetaData title="테스트 시작!" />
      <QnA />
    </>
  )
}

export default Test
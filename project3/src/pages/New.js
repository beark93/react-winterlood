import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../util";
import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";

const New = () => {

  useEffect(() => {
    setPageTitle('새 일기 쓰기');
  });

  const { onCreate } = useContext(DiaryDispatchContext);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const { date, content, emotionId } = data;
    onCreate(date, content, emotionId);
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default New;
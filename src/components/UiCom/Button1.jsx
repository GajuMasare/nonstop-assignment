import { useNavigate } from "react-router-dom";
import "../../css/components/UiCom/buttons.css";

export default function Button1({ goToLink, BtnTitle }) {
  const navigateTo = useNavigate();
  return (
    <>
      <button className="button1" onClick={() => navigateTo(goToLink)}>
        {BtnTitle}
      </button>
    </>
  );
}

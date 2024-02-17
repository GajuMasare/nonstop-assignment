import "../../css/components/UiCom/buttons.css";

export default function Button2({ BtnTitle, onClick }) {
  return (
    <>
      <button className="button2" onClick={onClick}>
        {BtnTitle}
      </button>
    </>
  );
}

import "../../css/components/UiCom/buttons.css";

export default function Button4({ BtnTitle, AddStuff }) {
  return (
    <>
      <button className="button4" onClick={AddStuff}>
        {BtnTitle}
      </button>
    </>
  );
}

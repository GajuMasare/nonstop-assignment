import "../../css/components/UiCom/buttons.css";

export default function Button5({ BtnTitle }) {
  return (
    <>
      <label htmlFor="uploadpfp" className="button5">
        {BtnTitle}
      </label>
      <input type="file" id="uploadpfp" className="button5-input" />
    </>
  );
}

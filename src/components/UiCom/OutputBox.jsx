import "../../css/components/UiCom/outputBox.css";

export default function OutputBox({ OutputTitle, OutputText }) {
  return (
    <>
      <div className="outputBox-mainDiv">
        <label for="outputBox">{OutputTitle}</label>
        <input type="text" id="outputBox" value={OutputText} />
      </div>
    </>
  );
}

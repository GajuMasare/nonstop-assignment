import "../../css/components/UiCom/inputBox.css";

export default function InputBox({ type, lable, name, value, onChange }) {
  return (
    <>
      <div className="InputBox-mainDiv">
        <label>{lable}</label>
        <input type={type} name={name} value={value} onChange={onChange} />
      </div>
    </>
  );
}

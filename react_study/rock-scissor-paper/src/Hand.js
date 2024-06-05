import HandIcon from "./HandIcon";
import "./Hand.css";
function Hand({ value, valueBg = "hand", winBg = "" }) {
  const classNames = `${valueBg} ${winBg}`;
  return (
    <button className={classNames}>
      <HandIcon value={value} />
    </button>  );
}
export default Hand;
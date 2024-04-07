import { useSelector, useDispatch } from "react-redux";
import "./mfSidebar.css";
export const MfSidebar = () => {
  var hoverId = useSelector((state) => state.mf.hoverId);
  var sData = useSelector((state) => state.mf.sideBarData);
  if (!hoverId) {
    return <></>;
  }

  var result = sData.find((obj) => obj.id === hoverId);
  result = result.value;
  return (
    <ul>
      {result.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

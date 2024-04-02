import "./selectedFunds.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useSelector, useDispatch } from "react-redux";
import { deleteFund } from "../redux/mfSlice";
export const SelectedFunds = () => {
  const funds = useSelector((state) => state.mf.data);
  const dispatch = useDispatch();
  return (
    <div className="selected-funds-outer">
      <div className="selected-fund-header">Funds</div>
      <div className="selected-funds">
        {funds.map((_, i) => (
          <div key={i} className="selected-fund">
            {funds[i]}
            <CloseOutlinedIcon
              onClick={() => dispatch(deleteFund(i))}
              className="remove-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

import "./selectedFunds.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useSelector, useDispatch } from "react-redux";
import { deleteFund, setDetails } from "../../redux/mf/mfSlice";
import { getDetails } from "../../services/apiCalls/mf/detailsAPI";

export const SelectedFunds = () => {
  const funds = useSelector((state) => state.mf.funds);
  const dispatch = useDispatch();

  const compare = async () => {
    var details = [];
    for (var i = 0; i < funds.length; i++) {
      var deet = await getDetails(funds[i].search_id);
      details.push(deet);
    }

    dispatch(setDetails(details));
  };

  return (
    <div className="selected-funds-outer">
      <div className="selected-fund-header">
        Funds{" "}
        <div className="compare-btn" onClick={() => compare()}>
          Compare
        </div>
      </div>

      <div className="selected-funds">
        {funds.map((_, i) => (
          <div key={i} className="selected-fund">
            {funds[i].scheme_name}
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

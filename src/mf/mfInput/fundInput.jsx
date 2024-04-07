import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewFund } from "../../redux/mf/mfSlice";
import "./fundInput.css";
import { getSuggestions } from "../../services/apiCalls/mf/suggestionsAPI";

export const FundInput = () => {
  const [items, setitems] = useState([]);

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = async (e) => {
    setInputValue(e.target.value);
    // control to fire only in timeout
    var res = await getSuggestions(e.target.value);
    setitems(res);
  };

  const handleItemClick = (item) => {
    dispatch(addNewFund(item));
    setitems([]);
    setInputValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to add fund"
      />
      <ul>
        {items.map((item, index) => (
          <div key={index} onClick={() => handleItemClick(item)}>
            {item.scheme_name}
          </div>
        ))}
      </ul>
    </div>
  );
};

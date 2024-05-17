import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewFund } from "../redux/mfSlice";
import "./fundInput.css";
import { getSuggestions } from "../services/apiCalls/mfAPis";

export const FundInput = () => {
  const [items, setitems] = useState([]);

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  // const filterItems = () => {
  //   return items.filter((item) =>
  //     item.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  // };

  const handleInputChange = async (e) => {
    setInputValue(e.target.value);
    //fire api here

    var res = await getSuggestions(e.target.value);
    console.log(res);
    setitems(res);
  };

  const handleItemClick = (item) => {
    // item
    // dispatch(addNewFund());
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
            {item}
          </div>
        ))}
      </ul>
    </div>
  );
};

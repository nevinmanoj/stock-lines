import { useSelector, useDispatch } from "react-redux";
import { PieChart } from "@mui/x-charts/PieChart";
import { setHover } from "./../../redux/mf/mfSlice";
export const MfPie = () => {
  const data = useSelector((state) => state.mf.pieData);
  const dispatch = useDispatch();
  const handleClick = (e, itemIdentifier, item) => {
    console.log(e, itemIdentifier, item);
    dispatch(setHover(item.id));
  };
  return (
    <>
      <PieChart
        series={[
          {
            cornerRadius: 10,
            data: data,
          },
        ]}
        onClick={handleClick}
        width={800}
        height={500}
      />
    </>
  );
};

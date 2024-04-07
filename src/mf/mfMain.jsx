import { FundInput } from "./mfInput/fundInput";
import { MfPie } from "./mfOutput/mfPie";
import { SelectedFunds } from "./mfInput/selectedFunds";
import { MfSidebar } from "./mfOutput/mfSidebar";
import "./mfMain.css";
export const MfMain = () => {
  return (
    <>
      <FundInput />
      <SelectedFunds />
      <div className="mfOutput">
        <MfPie />
        <MfSidebar />
      </div>
    </>
  );
};

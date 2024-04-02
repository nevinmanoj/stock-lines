import { useState } from "react";
import { FundInput } from "./fundInput";
import { Venn } from "./mfVenn";
import { SelectedFunds } from "./selectedFunds";
import "./mfMain.css";
export const MfMain = () => {
  return (
    <>
      <FundInput />
      <SelectedFunds />
      <Venn />
    </>
  );
};

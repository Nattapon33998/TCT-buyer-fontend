import React from "react";
import { useCall } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

import { FarmerContractAddress } from "../../../config/constants/addresses";
import farmerContract from "../../../config/abis/farmerContract.json";

import { GiFarmer } from "react-icons/gi";

const FarmerDetail: React.FC<{ farmerAddress: string }> = ({
  farmerAddress,
}) => {
  const farmerContractInterface = new Interface(farmerContract);
  const contract = new Contract(FarmerContractAddress, farmerContractInterface);
  const { value } =
    useCall({ contract, method: "getFarmer", args: [farmerAddress] }) ?? {};

  if (value) {
    return (
      <div className="flex flex-col text-gray-700">
        <div className="flex flex-row items-center gap-2 font-bold text-lg">
          <GiFarmer size={30} />
          <p>เกษตรกรผู้รับผิดชอบการปลูก</p>
        </div>
        <div className="ml-10">
          <p>
            - {value[0].farmerFirstName} {value[0].farmerLastName}
          </p>
        </div>
      </div>
    );
  } else {
    return <div> Loading... </div>;
  }
};

export default FarmerDetail;

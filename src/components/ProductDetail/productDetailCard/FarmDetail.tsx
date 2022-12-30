import React from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useCall } from "@usedapp/core";
import { Contract } from "ethers";
import { Interface } from "@ethersproject/abi";

import { FarmContractAddress } from "../../../constants/contractAddress";
import farmContract from "../../../constants/contractAbis/farmContract.json";

import { GiBarn } from "react-icons/gi";

const FarmDetail: React.FC<{ farmAddress: string }> = ({ farmAddress }) => {
  const farmContractInterface = new Interface(farmContract);
  const contract = new Contract(FarmContractAddress, farmContractInterface);
  const { value } =
    useCall({ contract, method: "getFarm", args: [farmAddress] }) ?? {};

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDxnRRzn_NokG3ngxYWCzcYyiLbr8oB2_E",
  });

  if (value) {
    const center = {
      lat: Number(value[0].location.latitude),
      lng: Number(value[0].location.longitude),
    };
    return (
      <>
        <div className="flex flex-col text-gray-700 lg:w-96 w-full">
          <div className="flex flex-row items-center gap-2 font-bold text-lg">
            <GiBarn size={30} />
            <p>สถานที่ผลิต</p>
          </div>
          <div className="ml-10">
            <p>{value[0].name}</p>
            <p>
              {value[0].farmDetail}
              {/* 1 ซอย ฉลองกรุง 1 แขวง ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520 1
              ซอย */}
            </p>
          </div>
        </div>
        <div className="h-72 w-full">
          {isLoaded ? (
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              // onLoad={onLoad}
              // onUnmount={onUnmount}
            >
              <MarkerF position={center} />
            </GoogleMap>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  } else {
    return <div> Loading... </div>;
  }
};

export default FarmDetail;

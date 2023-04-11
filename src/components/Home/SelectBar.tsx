import React from "react";

const SelectBar: React.FC<{ selectType: string; setSelectType: any }> = ({
  selectType,
  setSelectType,
}) => {
  const selectFresh = () => {
    setSelectType("fresh");
  };
  const selectConsumed = () => {
    setSelectType("consumed");
  };

  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-emerald-800 border-b border-emerald-800 ">
      <li className="mr-2">
        <button
          className={`inline-block p-4 ${
            selectType === "fresh"
              ? "text-white bg-emerald-800"
              : "hover:bg-white"
          } rounded-t-lg active w-24 ease-in-out duration-200`}
          onClick={selectFresh}
        >
          Products
        </button>
      </li>
      <li className="mr-2">
        <button
          className={`inline-block p-4 ${
            selectType === "consumed"
              ? "text-white bg-emerald-800"
              : "hover:bg-white"
          } rounded-t-lg active w-28 ease-in-out duration-200`}
          onClick={selectConsumed}
        >
          Consumed
        </button>
      </li>
    </ul>
  );
};

export default SelectBar;

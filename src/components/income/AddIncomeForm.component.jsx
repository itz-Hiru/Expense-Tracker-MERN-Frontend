import React, { useState } from "react";
import EmojiPickerPopup from "../layouts/EmojiPickerPopup.component";
import InputLayout from "../inputs/InputLayout.component";

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  return (
    <div className="">
      <EmojiPickerPopup
        icon={income.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />
      <InputLayout
        value={income.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Income Source"
        placeholder="Enter your income source (eg: Salary, Freelance)"
        type="text"
      />
      <InputLayout
        value={income.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder="Enter income amount"
        type="number"
      />
      <InputLayout
        value={income.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />
      <div className="flex justify-end mt-6">
        <button
          className="add-btn add-btn-fill"
          type="submit"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;

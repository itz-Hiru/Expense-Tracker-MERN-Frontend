import React, { useState } from "react";
import EmojiPickerPopup from "../layouts/EmojiPickerPopup.component";
import InputLayout from "../inputs/InputLayout.component";

const AddExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setExpense({ ...expense, [key]: value });

  return (
    <div className="">
      <EmojiPickerPopup
        icon={expense.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />
      <InputLayout
        value={expense.source}
        onChange={({ target }) => handleChange("source", target.value)}
        label="Expense Category"
        placeholder="Enter your expense category (eg: Food, Medical)"
        type="text"
      />
      <InputLayout
        value={expense.amount}
        onChange={({ target }) => handleChange("amount", target.value)}
        label="Amount"
        placeholder="Enter expense amount"
        type="number"
      />
      <InputLayout
        value={expense.date}
        onChange={({ target }) => handleChange("date", target.value)}
        label="Date"
        placeholder=""
        type="date"
      />
      <div className="flex justify-end mt-6">
        <button
          className="add-btn add-btn-fill"
          type="submit"
          onClick={() => onAddExpense(expense)}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;

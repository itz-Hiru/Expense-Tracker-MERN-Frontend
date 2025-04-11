import React from 'react'
import { LuDownload } from "react-icons/lu";
import TransactionInforCard from "../cards/TransactionInfoCard.component";
import moment from "moment";

const ExpenseList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Expense History</h5>
        <button className="card-btn" onClick={onDownload}>
          <LuDownload className="text-base" />
          Download History
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {transactions?.map((expense) => (
          <TransactionInforCard
            key={expense._id}
            title={expense.source}
            icon={expense.icon}
            date={moment(expense.date).format("DD MMM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense._id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ExpenseList
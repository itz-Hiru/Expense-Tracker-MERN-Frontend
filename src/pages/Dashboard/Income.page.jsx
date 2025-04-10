import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout.component";
import IncomeOverview from "../../components/income/IncomeOverview.component";
import Modal from "../../components/Modal.component"
import AddIncomeForm from "../../components/income/AddIncomeForm.component";
import { useUserAuth } from "../../hooks/useUserAuth.hook";
import axiosInstance from "../../utils/axiosInstance.util";
import { API_PATHS } from "../../utils/apiPath.util";

const Income = () => {
  useUserAuth();

  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });
  const [openAddIncomeModal, setOpenAddIncomeModal] = useState(false);

  const fetchIncomeDetails = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosInstance.get(
        `${API_PATHS.INCOME.GET_ALL_INCOMES}`
      );
      if (response.data) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.log("Something went wrong. Please try again ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddIncome = async (income) => {};

  const deleteIncome = async (id) => {};

  const handleDownloadIncomeDetails = async () => {};

  useEffect(() => {
    fetchIncomeDetails();

    return () => {};
  }, []);

  return (
    <DashboardLayout activeMenu="Income">
      <div className="my-5 mx-auto">
        <div className="grid grid-cols-1 gap-6">
          <div className="">
            <IncomeOverview
              transactions={incomeData}
              onAddIncome={() => setOpenAddIncomeModal(true)}
            />
          </div>
        </div>
        <Modal 
          isOpen={openAddIncomeModal}
          onClose={() => setOpenAddIncomeModal(false)}
          title="Add Income"
        >
          <AddIncomeForm onAddIncome={handleAddIncome} />
        </Modal>
      </div>
    </DashboardLayout>
  );
};

export default Income;

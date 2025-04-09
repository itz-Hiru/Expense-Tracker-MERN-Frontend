export const BASIC_URL = "http://localhost:3000";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/v1/auth/register",
    LOGIN: "/v1/auth/login",
    GET_USER_INFO: "/v1/auth/get/user",
  },
  IMAGE: {
    UPLOAD_IMAGE: "/v1/auth/uploads/image",
  },
  DASHBOARD: {
    GET_STATS: "/dashboard/stats",
  },
  INCOME: {
    ADD_INCOME: "/income/add",
    GET_ALL_INCOMES: "/income/get",
    DELETE_INCOME: (incomeID) => `/income/delete/${incomeID}`,
    DOWNLOAD_INCOME_DATE: "/income/get/download",
  },
  EXPENSE: {
    ADD_EXPENSE: "/expense/add",
    GET_ALL_EXPENSE: "/expense/get",
    DELETE_EXPENSE: (expenseID) => `/expense/delete/${expenseID}`,
    DOWNLOAD_EXPENSE_DATE: "/expense/get/download",
  },
};

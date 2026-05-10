import api from './axios';

export const getExpenses = async (tripId) => {
  const { data } = await api.get(`/expenses/trip/${tripId}`);
  return data;
};

export const addExpense = async (tripId, expenseData) => {
  const { data } = await api.post(`/expenses/trip/${tripId}`, expenseData);
  return data;
};

export const deleteExpense = async (id) => {
  const { data } = await api.delete(`/expenses/item/${id}`);
  return data;
};

export const getBudgetSummary = async (tripId) => {
  const { data } = await api.get(`/expenses/trip/${tripId}/summary`);
  return data;
};

export const getBudgetBreakdown = async (tripId) => {
  const { data } = await api.get(`/expenses/trip/${tripId}/breakdown`);
  return data;
};

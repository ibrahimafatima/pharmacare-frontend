import { createSelector } from "reselect";

const selectTable = (state) => state.medecineTable;

export const selectTableElements = createSelector(
  selectTable,
  (medecineTable) => medecineTable.elements
);

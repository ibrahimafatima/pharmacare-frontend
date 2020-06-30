const quantityLabel = (quantity) => {
  if (quantity < 10) return "label-danger";
  if (quantity < 30 && quantity > 10) return "label-warning";
  return "label-success";
};

export default quantityLabel;

export const getLabel = (parentLabel, label) => {
  if (parentLabel?.trim() === "") return label;
  return parentLabel + "." + label;
};

export const isDescriptionValid = (val) => {
  return val?.description?.trim() !== "";
};

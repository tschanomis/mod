export const checkingRequiredFields = (requireFields, requestFields) => {
  const checkedFields = requireFields.reduce(
    (accumulator, currentValue) =>
      !requestFields[currentValue] && { ...accumulator, [currentValue]: true },
    false
  );
  return checkedFields;
};

export const validateForm = (data) => {
  const errors = {};

  if (!data.fullName || data.fullName.trim() === "") {
    errors.fullName = "Full Name is required.";
  }

  if (!data.email || data.email.trim() === "") {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.address || data.address.trim() === "") {
    errors.address = "Address is required.";
  }

  if (!data.paymentMethod || data.paymentMethod.trim() === "") {
    errors.paymentMethod = "Please select a payment method.";
  }

  return errors;
};

import React, { useState } from "react";
import InputField from "../components/InputField";
import RadioGroup from "../components/RadioGroup";
import OrderSummary from "../components/OrderSummary";
import { validateForm } from "../utils/validation";
// import { submitCheckout } from "../services/api";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    paymentMethod: "Card",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmissionError(
        "Please fix the highlighted errors before submitting."
      );
      setSuccess(false);
      return;
    }

    setErrors({});
    setSubmissionError("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      const response = await fetch(`${apiUrl}/api/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(" Form submitted successfully!");
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          address: "",
          paymentMethod: "Card",
        });
      } else {
        setSubmissionError(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      setSubmissionError("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        className="bg-white rounded shadow-md p-6 w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4 border-b pb-2">
          Billing Address
        </h2>

        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />

        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={errors.address}
        />

        <RadioGroup
          name="paymentMethod"
          selected={formData.paymentMethod}
          onChange={handleChange}
          options={[
            { label: "Card", value: "Card" },
            { label: "UPI", value: "UPI" },
            { label: "Cash on Delivery", value: "COD" },
          ]}
        />

        {errors.paymentMethod && (
          <p className="text-red-500 text-sm mb-2">{errors.paymentMethod}</p>
        )}

        {submissionError && (
          <p className="text-red-500 text-sm mb-2">{submissionError}</p>
        )}

        <OrderSummary />

        <button
          type="submit"
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Proceed to Checkout
        </button>

        {/* {success && (
          <p className="text-green-600 text-center mt-3">
             Form submitted successfully!
          </p>        )} */}
      </form>
    </div>
  );
};

export default CheckoutPage;

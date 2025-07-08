import React from "react";

const OrderSummary = () => {
  const items = [
    { name: "Product A", price: 20 },
    { name: "Product B", price: 15 },
    { name: "Shipping", price: 5 },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded shadow p-4 mt-6">
      <h2 className="text-lg font-semibold mb-2 border-b pb-1">
        Order Summary
      </h2>
      <div className="space-y-1">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex justify-between"
          >
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="flex justify-between font-bold border-t pt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

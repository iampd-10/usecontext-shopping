import { FiTrash2 } from "react-icons/fi";
import { useAddToCart } from "../../../context/Context"; // adjust your path

export default function Carti() {
  const { items, setItems } = useAddToCart();

  // Handle Quantity Increase
  const increaseQuantity = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setItems(updatedItems);
  };

  // Handle Quantity Decrease
  const decreaseQuantity = (id) => {
    const updatedItems = items.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setItems(updatedItems);
  };

  // Handle Remove Item
  const removeItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  // Calculate subtotal, tax, total
  const subtotal = items.reduce(
    (sum, item) => sum + ((item.price * 87) * (item.quantity || 1)),
    0
  );
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  return (
    <div className="w-screen min-h-[calc(100vh-64px)] bg-gray-100 py-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>

        {/* Cart Items */}
        {items.length > 0 ? (
          <div className="space-y-6 mb-8">
            {items.map((item) => {
              const { id, title, price, quantity, images } = item;
              const realPrice = price * 87;

              return (
                <div
                  key={id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b pb-6"
                >
                  <div className="flex items-start sm:items-center space-x-4 w-full sm:w-auto">
                    <img
                      src={images?.[0] || "https://via.placeholder.com/80"}
                      alt={title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                      <p className="text-gray-600">₹{realPrice.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => decreaseQuantity(id)}
                          className="text-gray-500 hover:text-gray-700 px-2 text-xl"
                        >
                          −
                        </button>
                        <span className="mx-2 text-gray-700">{quantity || 1}</span>
                        <button
                          onClick={() => increaseQuantity(id)}
                          className="text-gray-500 hover:text-gray-700 px-2 text-xl"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0">
                    <p className="text-lg font-medium text-gray-800">
                      ₹{(realPrice * (quantity || 1)).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(id)}
                      className="ml-6 text-gray-400 hover:text-red-500 transition"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          </div>
        )}

        {/* Divider */}
        {items.length > 0 && <div className="border-t border-gray-300 my-6"></div>}

        {/* Summary */}
        {items.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-600">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">GST (18%)</span>
              <span className="font-medium text-gray-600">₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-4 pt-4 border-t border-gray-200">
              <span className="text-gray-600">Total</span>
              <span className="text-gray-600">₹{total.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <div className="mt-8">
              <button
                className={`w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-medium transition ${
                  items.length === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={items.length === 0}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

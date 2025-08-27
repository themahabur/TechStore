import React from "react";

const AddProduct = () => {
  return (
    <main class="flex-1 p-6 md:p-10 overflow-y-auto">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-xl shadow-soft p-6 md:p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Add New Product</h2>
          <form class="space-y-6">
            <div>
              <label
                class="block text-gray-700 text-sm font-medium mb-2"
                for="productName"
              >
                Product Name
              </label>
              <input
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                id="productName"
                placeholder="e.g. Ergonomic Office Chair"
                type="text"
              />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  class="block text-gray-700 text-sm font-medium mb-2"
                  for="price"
                >
                  Price
                </label>
                <div class="relative">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span class="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    class="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                    id="price"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <label
                  class="block text-gray-700 text-sm font-medium mb-2"
                  for="category"
                >
                  Category
                </label>
                <select
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                  id="category"
                  name="category"
                >
                  <option>Furniture</option>
                  <option>Accessories</option>
                  <option>Apparel</option>
                </select>
              </div>
            </div>
            <div>
              <label
                class="block text-gray-700 text-sm font-medium mb-2"
                for="description"
              >
                Description
              </label>
              <textarea
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
                id="description"
                placeholder="Describe the product..."
                rows="4"
              ></textarea>
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-medium mb-2">
                Product Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg
                    aria-hidden="true"
                    class="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      for="file-upload"
                    >
                      <span>Upload a file</span>
                      <input
                        class="sr-only"
                        id="file-upload"
                        name="file-upload"
                        type="file"
                      />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div class="flex justify-end pt-4 space-x-4">
              <button
                class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                type="button"
              >
                Cancel
              </button>
              <button
                class="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
                type="submit"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddProduct;

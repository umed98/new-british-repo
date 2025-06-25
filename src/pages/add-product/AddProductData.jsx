import axios from "axios";
import { useEffect, useState } from "react";

function AddProduct() {
  const [categories, setCategories] = useState([]);
 
  // Color State
  const [color, setColor] = useState([]);
  // Suppliers
  const [supplier, setSupplier] = useState([]);
  const [selectedSupplierId, setSelectedSupplierId] = useState("");
  const [supplierCode, setSupplierCode] = useState("");

  // Category API
  const displayCat = async () => {
    const cat_res = await axios.get(
      `https://britishquilting.fastranking.tech/api/category-new`
    );
    setCategories(cat_res.data.data);
  };

  const handleSupplierChange = (e) => {
    const selectedId = e.target.value;
    setSelectedSupplierId(selectedId);

    const selected = supplier.find((s) => s.id.toString() === selectedId);
    setSupplierCode(selected ? selected.supplier_code : "");
  };

  //Suppliear API
  const supDisplay = async () => {
    const sup_res = await axios.get(
      `https://britishquilting.fastranking.tech/api/suppliers`
    );
    setSupplier(sup_res.data.data);
    console.log(sup_res.data.data);
  };

  // Color API
  const displayColor = async () => {
    const color_res = await axios.get(
      `https://britishquilting.fastranking.tech/api/colors`
    );
    setColor(color_res.data.data);
    console.log(color_res.data.data);
  };

  useEffect(() => {
    displayCat();
    displayColor();
    supDisplay();
  }, []);

  return (
    <>
      <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px]">
        <div className="w-full min-h-[90vh] px-5 pr-5 lg:pr-10 pt-14 lg:pt-6 py-6 bg-[#F7F7F7]">
          <h1 className="font-[600] text-[28px]">Add Product</h1>
          <p>Please enter product details</p>
          <div className="p-5 bg-white box-shadow mt-5">
            <div>
              <div>
                <label className="font-[600]">Product Name</label>
                <input
                  type="text"
                  className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                  name="product_name"
                  placeholder="Enter Product Name"
                />
              </div>
              <div className="mt-4">
                <label className="font-[600]">Product Description</label>
                <textarea
                  name=""
                  id=""
                  className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px] h-[200px] flex items-center"
                  placeholder="Enter Product Description"
                ></textarea>
              </div>
              <div className="flex mt-5 gap-5">
                <div>
                  <label className="font-[600]">Supplier Name</label>
                  <select
                    name="supplier"
                    className="p-3 border border-gray-300 rounded-[7px] w-full mt-2 text-[16px]"
                    value={selectedSupplierId}
                    onChange={handleSupplierChange}
                  >
                    <option value="">-Select Supplier-</option>
                    {supplier.map((supplier_d) => (
                      <option key={supplier_d.id} value={supplier_d.id}>
                        {supplier_d.supplier_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-[600]">Supplier Code</label>
                  <input
                    type="text"
                    value={supplierCode}
                    className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px] bg-gray-white"
                    placeholder="Supplier Code"
                  />
                </div>

                <div>
                  <label className="font-[600]">Product Category</label>
                  <nav className="bg-white shadow-md p-4">
                    <ul className="flex gap-6">
                      {categories.map((mainCat) => (
                        <li key={mainCat.id} className="relative group">
                          <button className="text-[16px] font-semibold text-gray-800 hover:text-purple-700">
                            {mainCat.category_name}
                          </button>

                          {/* Subcategories */}
                          {mainCat.children_recursive?.length > 0 && (
                            <ul className="absolute top-full left-0 z-10 bg-white border shadow-md rounded-md w-48 p-2 hidden group-hover:block">
                              {mainCat.children_recursive.map((subCat) => (
                                <li
                                  key={subCat.id}
                                  className="relative group/sub"
                                >
                                  <button className="w-full text-left px-2 py-1 hover:bg-gray-100 text-[15px]">
                                    {subCat.category_name}
                                  </button>

                                  {/* Child Categories */}
                                  {subCat.children_recursive?.length > 0 && (
                                    <ul className="absolute top-0 left-full z-20 bg-white border shadow-md rounded-md w-48 p-2 hidden group-hover/sub:block">
                                      {subCat.children_recursive.map(
                                        (child) => (
                                          <li key={child.id}>
                                            <button className="w-full text-left px-2 py-1 hover:bg-gray-100 text-[14px]">
                                              {child.category_name}
                                            </button>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-5">
              <div className="w-[25%]">
                <label className="font-[600]">Product Code</label>
                <input
                  type="text"
                  name="availability"
                  className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                  placeholder="Enter Product Code"
                />
              </div>
              <div className="w-[25%]">
                <label className="font-[600]">Product Color</label>
                <select
                  name="color"
                  className="p-3 border border-gray-300 rounded-[7px] w-full mt-2 text-[16px]"
                  value={color}
                >
                  <option value="">-Select Category-</option>
                  {color.map((color_data) => (
                    <option key={color_data.id} value={color_data.color_code}>
                      {color_data.color_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-[25%]">
                <label className="font-[600]">Availability</label>
                <input
                  type="text"
                  name="availability"
                  className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                  placeholder="Enter Availability"
                />
              </div>
              <div className="w-[25%]">
                <label className="font-[600]">Stock Count</label>
                <input
                  type="text"
                  name="stock_count"
                  className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                  placeholder="Enter Stock Count"
                />
              </div>
            </div>

            {/* ADD MORE VARIANT */}
            <div>
              <div className="mt-5 flex gap-5">
                <div className="w-[25%]">
                  <label className="font-[600]">Product Width</label>
                  <input
                    type="text"
                    className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                    placeholder="Enter Product Width"
                  />
                </div>
                <div className="w-[25%]">
                  <label className="font-[600]">Default Price (Exc VAT)</label>
                  <input
                    type="text"
                    name="availability"
                    className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                    placeholder="Enter Default Price"
                  />
                </div>
                <div className="w-[25%]">
                  <label className="font-[600]">Price 2 (Exc VAT)</label>
                  <input
                    type="text"
                    name="stock_count"
                    className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                    placeholder="Enter Price 2"
                  />
                </div>
                <div className="w-[25%]">
                  <label className="font-[600]">Discount %</label>
                  <input
                    type="text"
                    name="stock_count"
                    className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                    placeholder="Enter Discount %"
                  />
                </div>
              </div>
              <div className="mt-5 flex gap-5">
                <div className="w-[50%]">
                  <label className="font-[600]">Upload Featured Image</label>
                  <input
                    type="file"
                    className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                    placeholder="Enter Product Width"
                  />
                </div>
                <div className="w-[50%]">
                  <label className="font-[600]">Upload Product Images</label>
                  <input
                    type="file"
                    name="availability"
                    className="p-3 border-[1px] border-gray-300 rounded-[7px] px-3 w-[100%] mt-2 text-[16px]"
                    placeholder="Enter Default Price"
                  />
                </div>
              </div>
              <div className="mt-5 text-right ">
                <button className="cursor-pointer p-[12px] rounded-[30px] px-5 text-[18px] text-[#4B215F] bg-[#fffff9] border-[1px] border-gray-300 font-[500]">
                  Add Variant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;

import axios from "axios";
import { useEffect, useState } from "react";

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState("");
  const [childCategories, setChildCategories] = useState([]);
  
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

  // Handle Sub Category change
  const handleMainCategoryChange = (e) => {
    const selectedId = e.target.value;
    setSelectedCategoryId(selectedId);
    setSelectedSubCategoryId("");
    setChildCategories([]);

    const selectedCat = categories.find(
      (cat) => cat.id.toString() === selectedId
    );
    if (selectedCat && selectedCat.children_recursive) {
      setSubCategories(selectedCat.children_recursive);
    } else {
      setSubCategories([]);
    }
  };

  // Handle Child Category change
  const handleSubCategoryChange = (e) => {
    const selectedId = e.target.value;
    setSelectedSubCategoryId(selectedId);

    const selectedSub = subCategories.find(
      (sub) => sub.id.toString() === selectedId
    );
    if (selectedSub && selectedSub.children_recursive) {
      setChildCategories(selectedSub.children_recursive);
    } else {
      setChildCategories([]);
    }
  };

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
                <label className="font-[600]">Product Name</label>
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
                  <select
                    name="category"
                    className="p-3 border border-gray-300 rounded-[7px] w-full mt-2 text-[16px]"
                    onChange={handleMainCategoryChange}
                    value={selectedCategoryId}
                  >
                    <option value="">-Select Category-</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Sub Category */}
                {subCategories.length > 0 && (
                  <div>
                    <label className="font-[600]">Sub Category</label>
                    <select
                      name="subcategory"
                      className="p-3 border border-gray-300 rounded-[7px] w-full mt-2 text-[16px]"
                      onChange={handleSubCategoryChange}
                      value={selectedSubCategoryId}
                    >
                      <option value="">-Select Sub Category-</option>
                      {subCategories.map((sub) => (
                        <option key={sub.id} value={sub.id}>
                          {sub.category_name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Child Category */}
                {childCategories.length > 0 && (
                  <div>
                    <label className="font-[600]">Child Category</label>
                    <select
                      name="childcategory"
                      className="p-3 border border-gray-300 rounded-[7px] w-full mt-2 text-[16px]"
                    >
                      <option value="">-Select Child Category-</option>
                      {childCategories.map((child) => (
                        <option key={child.id} value={child.id}>
                          {child.category_name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
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

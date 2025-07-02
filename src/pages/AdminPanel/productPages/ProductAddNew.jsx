//Working Properly

import React, { useState, useEffect } from "react";
import API from "../../../api/API.jsx";


export default function Uploadpro() {
  // Product state
  const [product, setProduct] = useState({
    product_name: "",
    brand_id: "",
    supplier_id: "",
    base_sku: "",
    category_id: "",
    description: "",
    base_price: "",
    base_discount: "",
    created_by: "5",
    is_active: true,
  });

  // Variants state: array of variants
  const [variants, setVariants] = useState([
    {
      sku: "",
      color_id: "",
      width_cm: "",
      stock_qty: "",
      use_meter_pricing: false,
      slug: "",
      price: "",
      discount: "",
      description: "",
      is_active: true,
      meta_description: "",
      meta_keywords: "",
      og_title: "",
      og_description: "",
      meter_ranges: [],
      images: [], // files here
    },
  ]);

  // Main image file
  const [mainImageFile, setMainImageFile] = useState(null);

  // Handlers for product fields
  const handleProductChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handlers for variant fields
  const handleVariantChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    setVariants((prev) => {
      const newVariants = [...prev];
      if (name === "is_active" || name === "use_meter_pricing") {
        newVariants[index][name] = checked;
      } else {
        newVariants[index][name] = value;
      }
      return newVariants;
    });
  };

  // Meter range handlers
  const addMeterRange = (variantIdx) => {
    setVariants((prev) => {
      const newVariants = [...prev];
      newVariants[variantIdx].meter_ranges.push({
        meter_range_id: "",
        price: "",
        discount: "",
      });
      return newVariants;
    });
  };
  const removeMeterRange = (variantIdx, rangeIdx) => {
    setVariants((prev) => {
      const newVariants = [...prev];
      newVariants[variantIdx].meter_ranges = newVariants[variantIdx].meter_ranges.filter((_, i) => i !== rangeIdx);
      return newVariants;
    });
  };
  const handleMeterRangeChange = (variantIdx, rangeIdx, e) => {
    const { name, value } = e.target;
    setVariants((prev) => {
      const newVariants = [...prev];
      newVariants[variantIdx].meter_ranges[rangeIdx][name] = value;
      return newVariants;
    });
  };

  // Add a new variant
  const addVariant = () => {
    setVariants((prev) => [
      ...prev,
      {
        sku: "",
        color_id: "",
        width_cm: "",
        stock_qty: "",
        use_meter_pricing: false,
        slug: "",
        price: "",
        discount: "",
        description: "",
        is_active: true,
        meta_description: "",
        meta_keywords: "",
        og_title: "",
        og_description: "",
        meter_ranges: [],
        images: [],
      },
    ]);
  };

  // Remove a variant
  const removeVariant = (index) => {
    setVariants((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle main image file change
  const handleMainImageChange = (e) => {
    setMainImageFile(e.target.files[0]);
  };

  // Handle variant images change (multiple files)
  const handleVariantImagesChange = (index, e) => {
    const newFiles = Array.from(e.target.files);

    setVariants((prev) => {
      const newVariants = [...prev];
      const existingFiles = newVariants[index].images;

      // Avoid duplicates based on name + size
      const filteredFiles = newFiles.filter(
        (newFile) =>
          !existingFiles.some(
            (existingFile) =>
              existingFile.file?.name === newFile.name &&
              existingFile.file?.size === newFile.size
          )
      );

      // Create image objects with unique ID and preview
      const processedImages = filteredFiles.map((file) => ({
        id: `${file.name}-${file.size}-${Date.now()}`,
        file,
        preview: URL.createObjectURL(file),
      }));

      newVariants[index].images = [...existingFiles, ...processedImages];
      return newVariants;
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product.category_id || isNaN(Number(product.category_id))) {
      alert("Please select a valid category.");
      return;
    }
    if (!product.brand_id || isNaN(Number(product.brand_id)) || Number(product.brand_id) === 0) {
      alert("Please select a valid brand.");
      return;
    }
    if (!product.created_by || isNaN(Number(product.created_by)) || Number(product.created_by) === 0) {
      alert("Please enter a valid Created By (User ID).");
      return;
    }
    for (let i = 0; i < variants.length; i++) {
      if (!variants[i].color_id || isNaN(Number(variants[i].color_id)) || Number(variants[i].color_id) === 0) {
        alert(`Please select a valid color for variant #${i + 1}.`);
        return;
      }
    }
    // Prepare product data object (cast numbers)
    const productData = {
      ...product,
      brand_id: Number(product.brand_id),
      supplier_id: Number(product.supplier_id),
      category_id: Number(product.category_id),
      base_price: Number(product.base_price),
      base_discount: Number(product.base_discount),
      created_by: Number(product.created_by),
      is_active: product.is_active ? 1 : 0,
    };

    // Prepare variants data
    const variantsData = variants.map((v) => ({
      ...v,
      color_id: Number(v.color_id),
      width_cm: Number(v.width_cm),
      stock_qty: Number(v.stock_qty),
      use_meter_pricing: !!v.use_meter_pricing,
      price: Number(v.price),
      discount: Number(v.discount),
      is_active: v.is_active ? 1 : 0,
      meter_ranges: v.meter_ranges.map((mr) => ({
        meter_range_id: Number(mr.meter_range_id),
        price: Number(mr.price),
        discount: Number(mr.discount),
      })),
      images: v.images.map((_, i) => ({
        order: i + 1,
        is_primary: i === 0 ? 1 : 0,
      })),
    }));

    // Create FormData
    const formData = new FormData();
    formData.append("product", JSON.stringify(productData));
    formData.append("variants", JSON.stringify(variantsData));
    if (mainImageFile) formData.append("main_image", mainImageFile);

    // Append variant images files by index
    variants.forEach((v, i) => {
      v.images.forEach((imgObj) => {
        formData.append(`variant_images[${i}][]`, imgObj.file);
      });
    });

    try {
      const response = await API.post(
        "/api/upload-product-new",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
      alert("Product uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed.");
    }
  };

  /*------------- Fetching Brand Id ---------------*/
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    API
      .get("/api/brands")
      .then((response) => {
        if (response.data.status) {
          setBrands(response.data.data);
        } else {
          console.error("Failed to fetch brands:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  /*------------- Fetching Category Id ---------------*/
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API
      .get("/api/category")
      .then((response) => {
        if (response.data.status) {
          setCategories(response.data.data);
        } else {
          console.error("Failed to fetch categories:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  /*------------- Fetching Colors Id ---------------*/
  const [colors, setColors] = useState([]);

  useEffect(() => {
    API
      .get("/api/colors")
      .then((response) => {
        if (response.data.status) {
          setColors(response.data.data);
        } else {
          console.error("Failed to fetch colors:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching colors:", error);
      });
  }, []);

  /*------------- Fetching Sizes Id ---------------*/
  const [sizes, setSizes] = useState([]);

  useEffect(() => {
    API
      .get("/api/sizes")
      .then((response) => {
        if (response.data.status) {
          setSizes(response.data.data);
        } else {
          console.error("Failed to fetch sizes:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching sizes:", error);
      });
  }, []);

  return (
    <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px]">
      <div className="w-full min-h-[90vh] px-5 pr-5 lg:pr-10 pt-14 lg:pt-6 py-6 bg-[#F7F7F7]">
        <h1 className="font-[600] text-[28px]">Add Product</h1>
        <form onSubmit={handleSubmit} className="mt-5 rounded-[12px] bg-white">
          <div className="py-6 px-8  bg-white border-b-1 border-gray-200">
            <h2 className="text-[20px] font-[600] mb-4">Product Info</h2>
            <div className="grid grid-cols-2 gap-5">
              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Product Name</span>
                <input
                  type="text"
                  name="product_name"
                  placeholder="Product Name"
                  value={product.product_name}
                  onChange={handleProductChange}
                  required
                  className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Brand</span>
                <div className="relative w-full cursor-pointer">
                  <select
                    name="brand_id"
                    id="brand_id"
                    value={product.brand_id}
                    onChange={handleProductChange}
                    required
                    className="cursor-pointer w-full pr-10 appearance-none bg-white border border-gray-300 rounded-[8px] px-4 py-2"
                  >
                    <option value="" disabled>
                      -- Select Brand --
                    </option>
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.id} - {brand.brand_name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Supplier ID</span>
                <input
                  type="number"
                  name="supplier_id"
                  placeholder="Supplier ID"
                  value={product.supplier_id}
                  onChange={handleProductChange}
                  required
                  className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Base SKU</span>
                <input
                  type="text"
                  name="base_sku"
                  placeholder="Base SKU"
                  value={product.base_sku}
                  onChange={handleProductChange}
                  required
                  className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Base Price</span>
                <input
                  type="number"
                  name="base_price"
                  placeholder="Base Price"
                  value={product.base_price}
                  onChange={handleProductChange}
                  required
                  className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Base Discount</span>
                <input
                  type="number"
                  name="base_discount"
                  placeholder="Base Discount"
                  value={product.base_discount}
                  onChange={handleProductChange}
                  required
                  className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={product.is_active}
                  onChange={handleProductChange}
                  className="mr-2"
                />
                <span className=" text-[16px] font-[500]">Is Active</span>
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Description</span>
                <textarea
                  name="description"
                  placeholder="Description"
                  value={product.description}
                  onChange={handleProductChange}
                  rows={4}
                  required
                  className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Category</span>
                <div className="relative w-full">
                  <select
                    name="category_id"
                    id="category_id"
                    value={product.category_id}
                    onChange={handleProductChange}
                    required
                    className=" cursor-pointer block w-full appearance-none border border-gray-300 rounded-[8px] px-4 py-2 pr-10 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="" disabled>
                      -- Select Category --
                    </option>
                    {categories.map((category) => (
                      <option
                        className="cursor-pointer"
                        key={category.id}
                        value={category.id}
                      >
                        {category.id} - {category.category_name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div className="py-5 px-8 border-b-1 border-gray-200">
            <h2 className="text-[20px] font-[600] mb-4">Main Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleMainImageChange}
              required
              className="mb-2"
            />

            {mainImageFile && (
              <div className="mb-6">
                <p className="mb-2 font-semibold text-gray-700">Preview:</p>
                <img
                  src={URL.createObjectURL(mainImageFile)}
                  alt="Main Preview"
                  className="h-40 w-auto border border-gray-300 rounded-md"
                />
              </div>
            )}
          </div>

          <div className="py-5 px-8">
            <h2 className="text-xl font-bold mb-4">Variants</h2>
            {variants.map((variant, idx) => (
              <div
                key={idx}
                className="border-1 border-gray-300 p-4 pt-8 mb-6 rounded-md bg-white/10 relative flex flex-wrap gap-4 w-full"
              >
                {idx === 0 ? (
                  ""
                ) : (
                  <button
                    type="button"
                    onClick={() => removeVariant(idx)}
                    className="absolute top-4 right-4 text-white font-medium bg-red-500 px-3 py-1"
                  >
                    Remove
                  </button>
                )}

                <div className="w-full flex gap-5">
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">SKU</span>
                    <input
                      type="text"
                      name="sku"
                      placeholder="SKU"
                      value={variant.sku}
                      onChange={(e) => handleVariantChange(idx, e)}
                      required
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">Color</span>
                    <div className="relative w-full">
                      <select
                        name="color_id"
                        value={variant.color_id}
                        onChange={(e) => handleVariantChange(idx, e)}
                        required
                        className="cursor-pointer appearance-none border border-gray-300 rounded-[8px] py-2 px-4 pr-10 w-full mb-2 bg-white text-gray-700"
                      >
                        <option value="" disabled>
                          -- Select Color --
                        </option>
                        {colors.map((color) => (
                          <option key={color.id} value={color.id}>
                            {color.color_name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 -top-1 right-0 flex items-center px-3 text-gray-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="w-full flex gap-5">
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">Width (cm)</span>
                    <input
                      type="number"
                      name="width_cm"
                      placeholder="Width in cm"
                      value={variant.width_cm}
                      onChange={(e) => handleVariantChange(idx, e)}
                      required
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
                  <label className="flex items-center gap-2 w-[50%]">
                    <input
                      type="checkbox"
                      name="use_meter_pricing"
                      checked={variant.use_meter_pricing}
                      onChange={(e) => handleVariantChange(idx, e)}
                      className="mr-2"
                    />
                    <span className=" text-[16px] font-[500]">Use Meter Pricing</span>
                  </label>
                </div>
                <div className="w-full flex gap-5">
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">Slug</span>
                    <input
                      type="text"
                      name="slug"
                      placeholder="Slug"
                      value={variant.slug}
                      onChange={(e) => handleVariantChange(idx, e)}
                      required
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">Meta Description</span>
                    <input
                      type="text"
                      name="meta_description"
                      placeholder="Meta Description"
                      value={variant.meta_description}
                      onChange={(e) => handleVariantChange(idx, e)}
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
                </div>
                <div className="w-full flex gap-5">
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">Meta Keywords</span>
                    <input
                      type="text"
                      name="meta_keywords"
                      placeholder="Meta Keywords"
                      value={variant.meta_keywords}
                      onChange={(e) => handleVariantChange(idx, e)}
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">OG Title</span>
                    <input
                      type="text"
                      name="og_title"
                      placeholder="OG Title"
                      value={variant.og_title}
                      onChange={(e) => handleVariantChange(idx, e)}
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
                </div>
                <div className="w-full flex gap-5">
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">OG Description</span>
                    <input
                      type="text"
                      name="og_description"
                      placeholder="OG Description"
                      value={variant.og_description}
                      onChange={(e) => handleVariantChange(idx, e)}
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">Is Active</span>
                    <input
                      type="checkbox"
                      name="is_active"
                      checked={variant.is_active}
                      onChange={(e) => handleVariantChange(idx, e)}
                      className="mr-2"
                    />
                  </label>
                </div>
                {/* Meter Ranges UI */}
                <div className="w-full mt-2">
                  <label className="block font-[600] text-[16px] mb-2">Meter Ranges</label>
                  {variant.meter_ranges.map((range, rangeIdx) => (
                    <div key={rangeIdx} className="flex gap-2 mb-2 items-center">
                      <input
                        type="number"
                        name="meter_range_id"
                        placeholder="Meter Range ID"
                        value={range.meter_range_id}
                        onChange={(e) => handleMeterRangeChange(idx, rangeIdx, e)}
                        className="border-1 border-gray-300 rounded-[8px] py-1 px-2 w-24"
                      />
                      <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={range.price}
                        onChange={(e) => handleMeterRangeChange(idx, rangeIdx, e)}
                        className="border-1 border-gray-300 rounded-[8px] py-1 px-2 w-24"
                      />
                      <input
                        type="number"
                        name="discount"
                        placeholder="Discount"
                        value={range.discount}
                        onChange={(e) => handleMeterRangeChange(idx, rangeIdx, e)}
                        className="border-1 border-gray-300 rounded-[8px] py-1 px-2 w-24"
                      />
                      <button type="button" onClick={() => removeMeterRange(idx, rangeIdx)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                    </div>
                  ))}
                  <button type="button" onClick={() => addMeterRange(idx)} className="bg-green-500 text-white px-3 py-1 rounded">+ Add Meter Range</button>
                </div>

                <div className="w-full flex gap-5">
                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">Price</span>
                    <input
                      type="number"
                      step="0.01"
                      name="price"
                      placeholder="Price"
                      value={variant.price}
                      onChange={(e) => handleVariantChange(idx, e)}
                      required
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>

                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">Discount</span>
                    <input
                      type="number"
                      name="discount"
                      placeholder="Discount"
                      value={variant.discount}
                      onChange={(e) => handleVariantChange(idx, e)}
                      required
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
                </div>

                <div className="w-full flex gap-5">
                  <div className="flex flex-col gap-1  w-[50%]">
                    <label htmlFor="" className="flex flex-col gap-2">
                      <span className=" text-[16px] font-[500]">
                        Inventory Quantity
                      </span>
                      <input
                        type="number"
                        name="stock_qty"
                        placeholder="Inventory Quantity"
                        value={variant.stock_qty}
                        onChange={(e) => handleVariantChange(idx, e)}
                        required
                        className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                      />
                    </label>
                    <label className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        name="is_active"
                        checked={variant.is_active}
                        onChange={(e) => handleVariantChange(idx, e)}
                        className="mr-2"
                      />
                      Is Active
                    </label>
                  </div>

                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">
                      Variant Description
                    </span>
                    <textarea
                      name="description"
                      placeholder="Variant Description"
                      value={variant.description}
                      onChange={(e) => handleVariantChange(idx, e)}
                      rows={4}
                      required
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
                </div>

                <div className="w-full">
                  <label className="block mb-1 font-[600] text-[18px]">
                    Variant Images
                  </label>
                  <div className="w-full">
                    <label
                      htmlFor={`variant-image-input-${idx}`}
                      className="inline-flex items-center px-4 py-2 bg-gray-100 border-1 border-dashed border-gray-300 text-purple-900 text-sm font-medium rounded-md shadow-sm cursor-pointer hover:bg-white transition"
                    >
                      Upload Images
                    </label>
                    <input
                      id={`variant-image-input-${idx}`}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(e) => handleVariantImagesChange(idx, e)}
                      className="hidden"
                    />
                    <p className="mt-2 text-sm text-gray-500">
                      You can select upto 10 images per variant
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4 border-1 bg-gray-50 border-gray-300 rounded-[8px] p-4 min-h-38">
                    {variant.images.length === 0 ? (
                      <p className="text-gray-500 font-[600] text-sm w-full flex justify-center items-center">
                        No image is selected
                      </p>
                    ) : (
                      variant.images.map((image, i) => (
                        <div key={image.id} className="relative">
                          <img
                            src={image.preview}
                            alt={`variant-${idx}-img-${i}`}
                            className="h-30 w-30 object-cover border-1 border-gray-300 rounded-[8px]"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setVariants((prev) => {
                                const updated = [...prev];
                                updated[idx].images = updated[
                                  idx
                                ].images.filter((img) => img.id !== image.id);
                                return updated;
                              });
                            }}
                            className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full px-1"
                          >
                            X
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addVariant}
              className="cursor-pointer text-sm px-4 py-2 border-1 border-[#4B215F] text-[#4B215F] hover:bg-[#4B215F] hover:text-white font-[500] rounded"
            >
              + Add Variant
            </button>
          </div>
          <div className="w-full text-right pb-8 pr-8">
            <button
              type="submit"
              className="px-6 py-3 hover:bg-[#4B215F] bg-[#593668] text-white font-bold rounded-full cursor-pointer"
            >
              Submit Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
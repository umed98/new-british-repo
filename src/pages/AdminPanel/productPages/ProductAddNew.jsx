//Working Properly

import React, { useState } from "react";
import axios from "axios";

export default function Uploadpro() {
  // Product state
  const [product, setProduct] = useState({
    product_name: "",
    brand_id: "",
    category_id: "",
    slug: "",
    description: "",
    created_by: "",
  });

  // Variants state: array of variants
  const [variants, setVariants] = useState([
    {
      color_id: "",
      size_id: "",
      description: "",
      price: "",
      discount: "",
      is_active: true,
      inventory: { quantity: "" },
      images: [], // files here
    },
  ]);

  // Main image file
  const [mainImageFile, setMainImageFile] = useState(null);

  // Handlers for product fields
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handlers for variant fields
  const handleVariantChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    setVariants((prev) => {
      const newVariants = [...prev];
      if (name === "is_active") {
        newVariants[index][name] = checked;
      } else if (name === "quantity") {
        newVariants[index].inventory.quantity = value;
      } else {
        newVariants[index][name] = value;
      }
      return newVariants;
    });
  };

  // Add a new variant
  const addVariant = () => {
    setVariants((prev) => [
      ...prev,
      {
        color_id: "",
        size_id: "",
        description: "",
        price: "",
        discount: "",
        is_active: true,
        inventory: { quantity: "" },
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

    // Prepare product data object (cast numbers)
    const productData = {
      ...product,
      brand_id: Number(product.brand_id),
      category_id: Number(product.category_id),
      created_by: Number(product.created_by),
    };

    // Prepare variants data without files
    // We'll send images separately in formData as files
    const variantsData = variants.map((v) => ({
      color_id: Number(v.color_id),
      size_id: Number(v.size_id),
      description: v.description,
      price: Number(v.price),
      discount: Number(v.discount),
      is_active: v.is_active ? 1 : 0,
      inventory: { quantity: Number(v.inventory.quantity) },
      images: v.images.map((_, i) => ({
        order: i + 1,
        is_primary: i === 0, // first image primary
      })),
    }));

    // Create FormData
    const formData = new FormData();
    formData.append("product", JSON.stringify(productData));
    formData.append("variants", JSON.stringify(variantsData));
    if (mainImageFile) formData.append("main_image", mainImageFile);

    // Append variant images files by index
    variants.forEach((v, i) => {
      v.images.forEach((file) => {
        formData.append(`variant_images[${i}][]`, file);
      });
    });

    try {
      const response = await axios.post(
        "https://britishquilting.fastranking.tech/api/upload-product",
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
                <span className=" text-[16px] font-[500]">Brand ID</span>
                <input
                  type="number"
                  name="brand_id"
                  placeholder="Brand ID"
                  value={product.brand_id}
                  onChange={handleProductChange}
                  required
                  className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Category ID</span>
                <input
                  type="number"
                  name="category_id"
                  placeholder="Category ID"
                  value={product.category_id}
                  onChange={handleProductChange}
                  required
                  className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Slug</span>
                <input
                  type="text"
                  name="slug"
                  placeholder="Slug"
                  value={product.slug}
                  onChange={handleProductChange}
                  required
                  className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
              </label>

              <label htmlFor="" className="flex flex-col gap-2">
                <span className=" text-[16px] font-[500]">Created By</span>
                <input
                  type="number"
                  name="created_by"
                  placeholder="Created By (User ID)"
                  value={product.created_by}
                  onChange={handleProductChange}
                  required
                  className="border-1  border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696]"
                />
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
                    <span className=" text-[16px] font-[500]">Color ID</span>
                    <input
                      type="number"
                      name="color_id"
                      placeholder="Color ID"
                      value={variant.color_id}
                      onChange={(e) => handleVariantChange(idx, e)}
                      required
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>

                  <label htmlFor="" className="flex flex-col gap-2 w-[50%]">
                    <span className=" text-[16px] font-[500]">Size ID</span>
                    <input
                      type="number"
                      name="size_id"
                      placeholder="Size ID"
                      value={variant.size_id}
                      onChange={(e) => handleVariantChange(idx, e)}
                      required
                      className="border-1 border-gray-300 rounded-[8px] py-2 px-4 mb-2 w-full placeholder:text-[#969696] bg-white"
                    />
                  </label>
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
                        name="quantity"
                        placeholder="Inventory Quantity"
                        value={variant.inventory.quantity}
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

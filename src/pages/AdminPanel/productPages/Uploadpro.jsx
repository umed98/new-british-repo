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
    created_by: ""
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
    }
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
    const files = Array.from(e.target.files);
    setVariants((prev) => {
      const newVariants = [...prev];
      newVariants[index].images = files;
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
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Product Info</h2>
      <input
        type="text"
        name="product_name"
        placeholder="Product Name"
        value={product.product_name}
        onChange={handleProductChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        name="brand_id"
        placeholder="Brand ID"
        value={product.brand_id}
        onChange={handleProductChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        name="category_id"
        placeholder="Category ID"
        value={product.category_id}
        onChange={handleProductChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="slug"
        placeholder="Slug"
        value={product.slug}
        onChange={handleProductChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleProductChange}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="number"
        name="created_by"
        placeholder="Created By (User ID)"
        value={product.created_by}
        onChange={handleProductChange}
        required
        className="border p-2 mb-4 w-full"
      />

      <h2 className="text-xl font-bold mb-4">Main Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleMainImageChange}
        required
        className="mb-6"
      />

      <h2 className="text-xl font-bold mb-4">Variants</h2>
      {variants.map((variant, idx) => (
        <div
          key={idx}
          className="border p-4 mb-6 rounded-md bg-gray-50 relative"
        >
          <button
            type="button"
            onClick={() => removeVariant(idx)}
            className="absolute top-2 right-2 text-red-600 font-bold"
          >
            Remove
          </button>

          <input
            type="number"
            name="color_id"
            placeholder="Color ID"
            value={variant.color_id}
            onChange={(e) => handleVariantChange(idx, e)}
            required
            className="border p-2 mb-2 w-full"
          />
          <input
            type="number"
            name="size_id"
            placeholder="Size ID"
            value={variant.size_id}
            onChange={(e) => handleVariantChange(idx, e)}
            required
            className="border p-2 mb-2 w-full"
          />
          <textarea
            name="description"
            placeholder="Variant Description"
            value={variant.description}
            onChange={(e) => handleVariantChange(idx, e)}
            required
            className="border p-2 mb-2 w-full"
          />
          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Price"
            value={variant.price}
            onChange={(e) => handleVariantChange(idx, e)}
            required
            className="border p-2 mb-2 w-full"
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount"
            value={variant.discount}
            onChange={(e) => handleVariantChange(idx, e)}
            required
            className="border p-2 mb-2 w-full"
          />

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

          <input
            type="number"
            name="quantity"
            placeholder="Inventory Quantity"
            value={variant.inventory.quantity}
            onChange={(e) => handleVariantChange(idx, e)}
            required
            className="border p-2 mb-2 w-full"
          />

          <label className="block mb-1">Variant Images (multiple)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleVariantImagesChange(idx, e)}
            className="mb-2"
          />

          <div className="flex space-x-2">
            {variant.images.map((file, i) => (
              <img
                key={i}
                src={URL.createObjectURL(file)}
                alt={`variant-${idx}-img-${i}`}
                className="h-20 w-20 object-cover border"
              />
            ))}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={addVariant}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Variant
      </button>

      <button
        type="submit"
        className="px-6 py-3 bg-green-600 text-white font-bold rounded"
      >
        Submit Product
      </button>
    </form>
  );
}

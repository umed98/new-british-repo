import React, { useState, useEffect } from "react";

const AddProduct = () => {
  // //Sizes of size_id
  // const [sizes, setSizes] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://britishquilting.fastranking.tech/api/sizes")
  //     .then((response) => {
  //       if (response.data.status) {
  //         setSizes(response.data.data);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching sizes:", error);
  //     });
  // }, []);

  const [formData, setFormData] = useState({
    product: {
      product_name: "",
      brand_id: 1,
      category_id: 3,
      slug: "",
      description: "",
      created_by: 1,
    },

    variants: [
      {
        color_id: 2,
        size_id: 1,
        discount: 1,
        price: 1,
        description: "",
        is_active: true,
        meta_description: "",
        meta_keywords: "",
        og_title: "",
        og_description: "",
        inventory: {
          quantity: 0,
        },
        images: [
          {
            color_id: 2,
            image_url: "",
            order: 1,
            is_primary: true,
          },
          {
            color_id: 2,
            image_url: "",
            order: 2,
            is_primary: false,
          },
        ],
      },
    ],
  });

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      product: {
        ...prev.product,
        [name]: value,
      },
    }));
  };

  const handleVariantChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      variants: [
        {
          ...prev.variants[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleInventoryChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      variants: [
        {
          ...prev.variants[0],
          inventory: {
            quantity: Number(value),
          },
        },
      ],
    }));
  };

  //For Image Section
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);

  const colorId = formData.variants[0].color_id; // Assuming color_id is known

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    const previews = imageFiles.map((file, index) => ({
      id: URL.createObjectURL(file), // Temporary unique ID
      file,
      color_id: colorId,
      image_url: URL.createObjectURL(file), // For preview
      order: images.length + index + 1,
      is_primary: false,
    }));

    const updated = [...images, ...previews];

    // Set first image as primary if none is set
    if (!updated.some((img) => img.is_primary) && updated[0]) {
      updated[0].is_primary = true;
    }

    setImages(updated);
    if (!mainImage && previews.length > 0) {
      setMainImage(previews[0]);
    }
    updateFormImages(updated);
  };

  const handleRemove = (id) => {
    const updated = images.filter((img) => img.id !== id);

    // If removed image is primary, set the next one as primary
    if (images.find((img) => img.id === id)?.is_primary && updated.length) {
      updated[0].is_primary = true;
    }

    setImages(updated);
    updateFormImages(updated);
  };

  const handleSetPrimary = (id) => {
    const updated = images.map((img) => ({
      ...img,
      is_primary: img.id === id,
    }));

    setImages(updated);
    updateFormImages(updated);
  };

  const updateFormImages = (updatedImages) => {
    const formattedImages = updatedImages.map((img, idx) => ({
      color_id: img.color_id,
      image_url: img.image_url, // This will be replaced with real URL if uploaded before form submit
      order: idx + 1,
      is_primary: img.is_primary,
    }));

    const updatedFormData = { ...formData };
    updatedFormData.variants[0].images = formattedImages;
    setFormData(updatedFormData);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dt = new DataTransfer();
    [...e.dataTransfer.files].forEach((file) => dt.items.add(file));
    handleImageUpload({ target: { files: dt.files } });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClickBrowse = () => {
    document.getElementById("imageInput").click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const fd = new FormData();
    images.forEach((img, index) => {
      fd.append("images[]", img.file); // image.file from the uploaded file
    });

    fd.append("product", JSON.stringify(formData.product));
    fd.append("variants", JSON.stringify(formData.variants));

    try {
      const res = await axios.post(
        "https://britishquilting.fastranking.tech/api/upload-product",
        fd,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Uploaded", res.data);
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  return (
    <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px]">
      <div className="w-full min-h-[90vh] px-5 pr-5 lg:pr-10 pt-14 lg:pt-6 py-6 bg-[#F7F7F7]">
        <h1 className="font-[600] text-[28px]">Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col rounded-[8px] w-full h-[80%] mt-5 pb-5">
            <div className="w-full flex justify-between gap-5">
              <div className="w-[50%]">
                <div className="flex flex-col gap-4 bg-white mb-5 p-8 rounded-[8px]">
                  <h1 className="text-[18px] font-[600]">
                    Product Information
                  </h1>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="productName"
                      className="text-[14px] font-[500]"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="product_name"
                      value={formData.product.product_name}
                      onChange={handleProductChange}
                      placeholder="Enter Product Name"
                      className={`py-2 px-4 ${
                        formData.product_name != null ? "bg-[#FFFEF7]" : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="productId"
                      className="text-[14px] font-[500]"
                    >
                      Brand ID
                    </label>
                    <input
                      type="number"
                      name="brand_id"
                      value={formData.product.brand_id}
                      onChange={handleProductChange}
                      placeholder="Enter Product Id"
                      className={`py-2 px-4 ${
                        formData.product.brand_id != null ? "bg-[#FFFEF7]" : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="productCategory"
                      className="text-[14px] font-[500]"
                    >
                      Category ID
                    </label>
                    <input
                      type="number"
                      name="category_id"
                      value={formData.product.category_id}
                      onChange={handleProductChange}
                      placeholder="Enter Product Category"
                      className={`py-2 px-4 ${
                        formData.product.category_id != null
                          ? "bg-[#FFFEF7]"
                          : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="slug" className="text-[14px] font-[500]">
                      Slug
                    </label>
                    <input
                      type="text"
                      name="slug"
                      value={formData.product.slug}
                      onChange={handleProductChange}
                      placeholder="Enter Slug"
                      className={`py-2 px-4 ${
                        formData.product.slug != null ? "bg-[#FFFEF7]" : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="slug" className="text-[14px] font-[500]">
                      Created By
                    </label>
                    <input
                      type="text"
                      name="created_by"
                      value={formData.product.created_by}
                      onChange={handleProductChange}
                      placeholder="Enter Created By"
                      className={`py-2 px-4 ${
                        formData.product.created_by != null
                          ? "bg-[#FFFEF7]"
                          : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="description"
                      className="text-[14px] font-[500]"
                    >
                      Description
                    </label>
                    <textarea
                      rows="6"
                      name="description"
                      value={formData.product.description}
                      onChange={handleProductChange}
                      placeholder="Enter Product Description"
                      className={`py-2 px-4 ${
                        formData.product.description != null
                          ? "bg-[#FFFEF7]"
                          : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 bg-white mb-5 p-8 rounded-[8px]">
                  <h1 className="text-[18px] font-[600]">
                    Inventory and Pricing
                  </h1>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="sellingPrice"
                      className="text-[14px] font-[500]"
                    >
                      Selling Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      value={formData.variants.price}
                      onChange={handleVariantChange}
                      placeholder="Enter Selling Price"
                      className={`py-2 px-4 ${
                        formData.variants.price != null ? "bg-[#FFFEF7]" : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="discount"
                      className="text-[14px] font-[500]"
                    >
                      Discount
                    </label>
                    <input
                      type="text"
                      name="discount"
                      value={formData.variants.discount}
                      onChange={handleVariantChange}
                      placeholder="Enter Product Discount"
                      className={`py-2 px-4 ${
                        formData.variants.discount != null ? "bg-[#FFFEF7]" : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="quantity"
                      className="text-[14px] font-[500]"
                    >
                      Quanity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.variants[0].inventory.quantity}
                      onChange={handleInventoryChange}
                      placeholder="Enter Product Quantity"
                      className={`py-2 px-4 ${
                        formData.variants[0].quantity != null
                          ? "bg-[#FFFEF7]"
                          : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="size" className="text-[14px] font-[500]">
                      Size
                    </label>
                    <div className="relative w-full">
                      <select
                        name="size"
                        value={formData.variants.size_id}
                        onChange={handleVariantChange}
                        className={`appearance-none py-2 px-4 pr-5 lg:pr-10 border border-[#C5C5C5] text-[14px] rounded-[8px] w-full
                          ${
                            formData.variants.size_id === ""
                              ? "text-gray-400 "
                              : "text-black bg-[#FFFEF7]"
                          }`}
                      >
                        <option value="" disabled>
                          Select Product Size
                        </option>
                        <option value="S" className="text-black">
                          Small
                        </option>
                        <option value="M" className="text-black">
                          Medium
                        </option>
                        <option value="L" className="text-black">
                          Large
                        </option>
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <svg
                          className="h-4 w-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 12a.75.75 0 01-.53-.22l-4-4a.75.75 0 111.06-1.06L10 10.19l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="size" className="text-[14px] font-[500]">
                      Color ID
                    </label>
                    <div className="relative w-full">
                      <select
                        name="color_id"
                        value={formData.variants.color_id}
                        onChange={handleVariantChange}
                        className={`appearance-none py-2 px-4 pr-5 lg:pr-10 border border-[#C5C5C5] text-[14px] rounded-[8px] w-full
                          ${
                            formData.variants.color_id === ""
                              ? "text-gray-400 "
                              : "text-black bg-[#FFFEF7]"
                          }`}
                      >
                        <option value="" disabled>
                          Select Color ID
                        </option>
                        <option value="1" className="text-black">
                          1
                        </option>
                        <option value="2" className="text-black">
                          2
                        </option>
                        <option value="3" className="text-black">
                          3
                        </option>
                      </select>

                      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <svg
                          className="h-4 w-6 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 12a.75.75 0 01-.53-.22l-4-4a.75.75 0 111.06-1.06L10 10.19l3.47-3.47a.75.75 0 111.06 1.06l-4 4A.75.75 0 0110 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                    <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="discount"
                      className="text-[14px] font-[500]"
                    >
                      Active
                    </label>
                    <input
                      type="text"
                      name="is_active"
                      value={formData.variants.is_active}
                      onChange={handleVariantChange}
                      
                      className={`py-2 px-4 ${
                        formData.variants.is_active != null ? "bg-[#FFFEF7]" : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                         <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="discount"
                      className="text-[14px] font-[500]"
                    >
                      OG Title
                    </label>
                    <input
                      type="text"
                      name="og_title"
                      value={formData.variants.og_title}
                      onChange={handleVariantChange}
                      
                      className={`py-2 px-4 ${
                        formData.variants.og_title != null ? "bg-[#FFFEF7]" : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                   <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="discount"
                      className="text-[14px] font-[500]"
                    >
                      OG Description
                    </label>
                    <input
                      type="text"
                      name="og_title"
                      value={formData.variants.og_description}
                      onChange={handleVariantChange}
                      
                      className={`py-2 px-4 ${
                        formData.variants.og_description != null ? "bg-[#FFFEF7]" : ""
                      } border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]`}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 bg-white p-8 rounded-[8px]">
                  <h1 className="text-[18px] font-[600]">Media</h1>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="color" className="text-[14px] font-[500]">
                      Tag
                    </label>
                    <input
                      type="text"
                      name="tag"
                      placeholder="Enter Tags Here"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] w-[100%] text-[14px]"
                    />
                  </div>
                  <div>
                    <label className="block font-[500] text-[14px] mb-2">
                      Product image
                    </label>

                    {/* Main Image Preview */}
                    {/* Main Image Preview */}
                    <div className="min-h-[200px] w-full rounded-xl overflow-hidden bg-[#f7f7f7] border border-gray-300 flex items-center justify-center mb-4">
                      {mainImage ? (
                        <img
                          src={mainImage.image_url}
                          alt="Main preview"
                          className="h-[200px] w-full object-contain"
                        />
                      ) : (
                        <p className="text-gray-400">No image selected</p>
                      )}
                    </div>

                    {/* Thumbnails Section */}
                    <div className="grid grid-cols-4 gap-2">
                      {images.map((img) => (
                        <div
                          key={img.id}
                          className={`relative h-28 w-full rounded-lg overflow-hidden cursor-pointer border 
                            ${
                              mainImage?.id === img.id
                                ? "border-blue-500 ring-2 ring-blue-300"
                                : "border-gray-300"
                            }`}
                        >
                          <img
                            src={img.image_url}
                            alt="thumb"
                            onClick={() => {
                              setMainImage(img); // ✅ Set the whole image object
                              handleSetPrimary(img.id);
                            }}
                            className="h-28 w-full object-contain"
                          />
                          <button
                            onClick={() => handleRemove(img.id)}
                            className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-[500] cursor-pointer rounded-full py-1 px-2 shadow hover:bg-red-600 hover:text-white transition"
                          >
                            X
                          </button>
                        </div>
                      ))}
                      {/* Upload Thumbnail */}
                      <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onClick={handleClickBrowse}
                        className="h-28 w-full rounded-lg border border-dashed border-gray-400 flex flex-col items-center justify-center text-gray-500 cursor-pointer"
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 31 31"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.83333 30.8799C2.91667 30.8799 2.13222 30.5538 1.48 29.9015C0.827778 29.2493 0.501111 28.4643 0.5 27.5465V4.21322C0.5 3.29655 0.826667 2.51211 1.48 1.85988C2.13333 1.20766 2.91778 0.880994 3.83333 0.879883H27.1667C28.0833 0.879883 28.8683 1.20655 29.5217 1.85988C30.175 2.51322 30.5011 3.29766 30.5 4.21322V27.5465C30.5 28.4632 30.1739 29.2482 29.5217 29.9015C28.8694 30.5549 28.0844 30.881 27.1667 30.8799H3.83333ZM3.83333 27.5465H27.1667V4.21322H3.83333V27.5465ZM5.5 24.2132H25.5L19.25 15.8799L14.25 22.5465L10.5 17.5465L5.5 24.2132ZM9.66667 12.5465C10.3611 12.5465 10.9517 12.3038 11.4383 11.8182C11.925 11.3327 12.1678 10.7421 12.1667 10.0465C12.1656 9.35099 11.9228 8.76099 11.4383 8.27655C10.9539 7.79211 10.3633 7.54877 9.66667 7.54655C8.97 7.54433 8.38 7.78766 7.89667 8.27655C7.41333 8.76544 7.17 9.35544 7.16667 10.0465C7.16333 10.7377 7.40667 11.3282 7.89667 11.8182C8.38667 12.3082 8.97667 12.551 9.66667 12.5465Z"
                            fill="#B9B9B9"
                          />
                        </svg>
                        <span className="text-[12px] text-[#A1A1A1] font-[500] text-center leading-4 mt-1">
                          Drag your image here <br /> or
                          <span className="underline"> Click to Browser</span>
                        </span>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          id="imageInput"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-[50%]">
                <div className="flex flex-col gap-4 bg-white mb-5 p-8 rounded-[8px]">
                  <h1 className="text-[18px] font-[600]">Meta Tags</h1>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="metaTag" className="text-[14px] font-[500]">
                      Meta Tag
                    </label>
                    <input
                      type="text"
                      name="meta_tag"
                      placeholder="Enter Product Name"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="metaKeyword"
                      className="text-[14px] font-[500]"
                    >
                      Meta Keyword
                    </label>
                    <input
                      type="text"
                      name="meta_keywords"
                      value={formData.variants.meta_keywords}
                      onChange={handleVariantChange}
                      placeholder="Enter Product Id"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="metaDescription"
                      className="text-[14px] font-[500]"
                    >
                      Meta Description
                    </label>
                    <textarea
                      rows="8"
                      name="meta_description"
                      value={formData.variants.meta_description}
                      onChange={handleVariantChange}
                      placeholder="Enter Product Description"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 bg-white mb-5 p-8 rounded-[8px]">
                  <h1 className="text-[18px] font-[600]">Revenue</h1>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="totalSales"
                      className="text-[14px] font-[500]"
                    >
                      Total Sales
                    </label>
                    <input
                      type="text"
                      name="total_sales"
                      placeholder="Enter Total Sales"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="totalSale"
                      className="text-[14px] font-[500]"
                    >
                      Total Sale Value
                    </label>
                    <input
                      type="text"
                      name="total_sale_value"
                      placeholder="Enter Total Sale Value"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 bg-white mb-5 p-8 rounded-[8px]">
                  <h1 className="text-[18px] font-[600]">Information</h1>

                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="productInformationn"
                      className="text-[14px] font-[500]"
                    >
                      Product Information
                    </label>
                    <textarea
                      rows="8"
                      name="product_information"
                      placeholder="Enter Product Information"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="shippingInformation"
                      className="text-[14px] font-[500]"
                    >
                      Shipping Information
                    </label>
                    <textarea
                      rows="8"
                      name="shipping_information"
                      placeholder="Enter Shipping Information"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label
                      htmlFor="returnPolicy"
                      className="text-[14px] font-[500]"
                    >
                      Return Policy
                    </label>
                    <textarea
                      rows="8"
                      name="return_policy"
                      placeholder="Enter Reurn Policy"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%] text-[14px]"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 w-full text-right">
                  <button className="mr-4 rounded-[40px] border-1 border-[#4B215F] bg-white font-[500] text-[18px] text-[#4B215F] py-2 px-12 cursor-pointer hover:bg-[#704385] hover:text-white">
                    Draft
                  </button>
                  <button className="rounded-[40px] bg-[#4B215F] border-1 border-[#4B215F] font-[500] text-[18px] text-white py-2 px-12 cursor-pointer hover:bg-[#704385]">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

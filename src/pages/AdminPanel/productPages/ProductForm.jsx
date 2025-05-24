import React, { useRef, useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const ProductForm = () => {
  const fileInputRef = useRef(null);
  const [previewImages, setPreviewImages] = useState([]);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const images = [];

    files.forEach((file) => {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          images.push(reader.result);

          if (images.length === files.length) {
            setPreviewImages((prev) => [...prev, ...images]);
          }
        };
        reader.readAsDataURL(file);
      }
    });

    // Clear input value so user can select same file again if needed
    event.target.value = "";
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const files = Array.from(event.dataTransfer.files);
    const images = [];

    files.forEach((file) => {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          images.push(reader.result);

          if (images.length === files.length) {
            setPreviewImages((prev) => [...prev, ...images]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleRemoveImage = (index) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (

      <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px]">
        <div className="w-full min-h-[90vh] px-5 pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
          <h1 className="font-[600] text-[28px]">Product Information Form</h1>
          <p className="text-[#656565] text-[16px] font-[500]">
            Please provide the following information about your product.
          </p>

          <form>
            <div className="bg-white flex flex-col rounded-[8px] w-full h-[80%] mt-5 pb-5 px-8">
              <div className="w-full pt-5 flex gap-6 ">
                <div className="w-[50%] flex flex-col gap-2">
                  <label htmlFor="productName" className="font-[500]">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Product Name"
                    className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                  />
                </div>
                <div className="w-[50%] flex flex-col gap-2">
                  <label htmlFor="productName" className="font-[500]">
                    Product Category
                  </label>
                  <div className="relative w-full">
                    <select className="appearance-none py-2 px-4 pr-5 lg:pr-10 border border-[#C5C5C5] text-[#969696] rounded-[8px] w-full ">
                      <option value="Select Product category" selected disabled>
                        Select Product category
                      </option>
                      <option value="abc">abc</option>
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
              </div>
              <div className="w-full flex gap-6 pt-5">
                <div className="w-[50%] flex flex-col gap-4">
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="productName" className="font-[500]">
                      Product Brand Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Product Brand Name"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="productName" className="font-[500]">
                      Product Price
                    </label>
                    <input
                      type="text"
                      placeholder="e.g.₤150"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="productName" className="font-[500]">
                      Updated Date
                    </label>
                    <input
                      type="date"
                      placeholder="Select Updated Date"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                </div>
                <div className="w-[50%] bg-[#F7F7F7] rounded-[12px] p-4">
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="productName" className="font-[500]">
                      Product Color
                    </label>
                    <div className="relative w-full bg-white">
                      <select className="appearance-none py-2 px-4 pr-5 lg:pr-10 border border-[#C5C5C5] text-[#969696] rounded-[8px] w-full ">
                        <option
                          value="Select Product category"
                          selected
                          disabled
                        >
                          Select Product Color
                        </option>
                        <option value="abc">abc</option>
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
                  <div className="w-full flex gap-6 mt-3">
                    <div className="w-[50%] flex flex-col gap-2">
                      <label htmlFor="productName" className="font-[500]">
                        Product Size
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Product Size"
                        className="py-2 px-4 border-1 bg-white border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>
                    <div className="w-[50%] flex flex-col gap-2">
                      <label htmlFor="productName" className="font-[500]">
                        Product Quantity
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Product Quantity"
                        className="py-2 px-4 border-1 bg-white border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                      />
                    </div>
                  </div>
                  <div className="w-[50%] flex flex-col gap-2 mt-3">
                    <label htmlFor="productName" className="font-[500]">
                      Availability
                    </label>
                    <div className="relative w-full bg-white">
                      <select className="appearance-none py-2 px-4 pr-5 lg:pr-10 border border-[#C5C5C5] text-[#969696] rounded-[8px] w-full ">
                        <option
                          value="Select Product category"
                          selected
                          disabled
                        >
                          Select
                        </option>
                        <option value="abc">abc</option>
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
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 mt-4">
                <label htmlFor="ProductDescription" className="font-[500]">
                  Product Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows="8"
                  placeholder="Enter Product Description"
                  className="w-full border-1 border-[#C5C5C5] px-4 py-2 rounded-[8px]"
                ></textarea>
              </div>
              <div className="w-full mt-4">
                <div className="flex flex-col gap-2">
                  <label className="font-[500]">Product image</label>

                  {/* Upload Box */}
                  <div
                    className="flex flex-col w-full items-center p-5 justify-center border border-gray-300 rounded-lg min-h-[220px] cursor-pointer hover:border-purple-600 transition overflow-hidden relative"
                    onClick={previewImages.length ? undefined : handleClick}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    {previewImages.length > 0 ? (
                      <>
                        <div className="flex gap-7 w-full">
                          {/* Show selected images */}
                          <div className="flex flex-wrap gap-7 items-center max-w-[82%]">
                            {previewImages.map((img, index) => (
                              <div
                                key={index}
                                className="relative group flex justify-center items-center"
                              >
                                <img
                                  src={img}
                                  alt={`Preview ${index}`}
                                  className="object-contain w-[200px] h-[200px] rounded-md border-1 border-gray-300"
                                />
                                {/* Remove button */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveImage(index);
                                  }}
                                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100"
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>

                          {/* Choose More Files */}
                          <div className="h-auto w-[16%]">
                            <div className="flex flex-col justify-center items-center w-full h-[200px] border-1 border-[#4B215F] rounded-[9px]">
                              <svg
                                width="47"
                                height="46"
                                viewBox="0 0 47 46"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.02515 45.5691C4.63249 45.5691 3.44071 45.0736 2.44982 44.0827C1.45892 43.0918 0.962626 41.8992 0.960938 40.5049V5.05542C0.960938 3.66276 1.45723 2.47099 2.44982 1.48009C3.4424 0.489192 4.63418 -0.00710099 6.02515 -0.00878906H41.4746C42.8673 -0.00878906 44.0599 0.487504 45.0525 1.48009C46.0451 2.47267 46.5405 3.66445 46.5388 5.05542V40.5049C46.5388 41.8975 46.0434 43.0902 45.0525 44.0827C44.0616 45.0753 42.869 45.5708 41.4746 45.5691H6.02515ZM6.02515 40.5049H41.4746V5.05542H6.02515V40.5049ZM8.55725 35.4407H38.9425L29.4471 22.7802L21.8508 32.9086L16.1536 25.3123L8.55725 35.4407ZM14.8875 17.7159C15.9426 17.7159 16.8398 17.3471 17.5791 16.6094C18.3185 15.8717 18.6874 14.9745 18.6857 13.9178C18.684 12.8611 18.3151 11.9647 17.5791 11.2287C16.8431 10.4927 15.9459 10.123 14.8875 10.1196C13.8291 10.1163 12.9327 10.4859 12.1984 11.2287C11.4641 11.9714 11.0944 12.8678 11.0894 13.9178C11.0843 14.9678 11.454 15.865 12.1984 16.6094C12.9429 17.3539 13.8392 17.7227 14.8875 17.7159Z"
                                  fill="#4B215F"
                                />
                              </svg>
                              <p className="text-gray-400 text-sm text-center">
                                <br />
                              </p>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleClick();
                                }}
                                className="text-[#A1A1A1] text-[14px] font-[500] hover:text-purple-900 cursor-pointer"
                              >
                                Drop your image here <br />
                                <span className="underline">
                                  to Select Click to Browser
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Dropzone when no images */}
                        <svg
                          width="47"
                          height="46"
                          viewBox="0 0 47 46"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.02515 45.5691C4.63249 45.5691 3.44071 45.0736 2.44982 44.0827C1.45892 43.0918 0.962626 41.8992 0.960938 40.5049V5.05542C0.960938 3.66276 1.45723 2.47099 2.44982 1.48009C3.4424 0.489192 4.63418 -0.00710099 6.02515 -0.00878906H41.4746C42.8673 -0.00878906 44.0599 0.487504 45.0525 1.48009C46.0451 2.47267 46.5405 3.66445 46.5388 5.05542V40.5049C46.5388 41.8975 46.0434 43.0902 45.0525 44.0827C44.0616 45.0753 42.869 45.5708 41.4746 45.5691H6.02515ZM6.02515 40.5049H41.4746V5.05542H6.02515V40.5049ZM8.55725 35.4407H38.9425L29.4471 22.7802L21.8508 32.9086L16.1536 25.3123L8.55725 35.4407ZM14.8875 17.7159C15.9426 17.7159 16.8398 17.3471 17.5791 16.6094C18.3185 15.8717 18.6874 14.9745 18.6857 13.9178C18.684 12.8611 18.3151 11.9647 17.5791 11.2287C16.8431 10.4927 15.9459 10.123 14.8875 10.1196C13.8291 10.1163 12.9327 10.4859 12.1984 11.2287C11.4641 11.9714 11.0944 12.8678 11.0894 13.9178C11.0843 14.9678 11.454 15.865 12.1984 16.6094C12.9429 17.3539 13.8392 17.7227 14.8875 17.7159Z"
                            fill="#4B215F"
                          />
                        </svg>
                        <p className="text-gray-400 text-sm text-center">
                          Drop your image here to <br />
                          <span className="text-purple-800 underline">
                            Select Click to Browse
                          </span>
                        </p>
                      </>
                    )}

                    {/* Hidden input */}
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 pb-5 mt-4">
                <label className="font-[500]">Product Features</label>
                <div className="flex items-center gap-5 w-full">
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="feature1"
                      className="accent-[#005D67]"
                    />
                    <span className="text-[#005D67] text-[15px] font-[500]">
                      Feature 1
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="feature2"
                      className="accent-[#005D67]"
                    />
                    <span className="text-[#005D67] text-[15px] font-[500]">
                      Feature 2
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="feature3"
                      className="accent-[#005D67]"
                    />
                    <span className="text-[#005D67] text-[15px] font-[500]">
                      Feature 3
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="feature4"
                      className="accent-[#005D67]"
                    />
                    <span className="text-[#005D67] text-[15px] font-[500]">
                      Feature 4
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="feature5"
                      className="accent-[#005D67]"
                    />
                    <span className="text-[#005D67] text-[15px] font-[500]">
                      Feature 5
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      name="feature6"
                      className="accent-[#005D67]"
                    />
                    <span className="text-[#005D67] text-[15px] font-[500]">
                      Feature 6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full py-5 pb-8 text-right">
              <button className="rounded-[40px] bg-[#4B215F] font-[500] text-[20px] text-white py-2 px-12 cursor-pointer hover:bg-[#704385]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

  );
};

export default ProductForm;

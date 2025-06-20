import React, { useState } from "react";

import { asset } from "../../../assets/asset";

const AddUser = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  return (

      <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px]">
        <div className="w-full min-h-[90vh] px-5 pr-5 lg:pr-10 py-6 bg-[#F7F7F7]">
          <h1 className="font-[600] text-[28px]">Add User </h1>

          <form>
            <div className="bg-white flex flex-col rounded-[8px] w-full h-[80%] mt-5 pb-5">
              <div className="flex justify-between items-center pt-5 px-8">
                <h2 className="text-[22px] font-[600] ">
                  Personal Information
                </h2>
                <button className="cursor-pointer flex gap-3 items-center justify-center border border-[#4B215F] rounded-[4px] bg-white py-2 px-4 text-[#4B215F]">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.2505 17.4395C19.6645 17.4395 20.0005 17.7755 20.0005 18.1895C20.0005 18.6035 19.6645 18.9395 19.2505 18.9395H11.9975C11.5835 18.9395 11.2475 18.6035 11.2475 18.1895C11.2475 17.7755 11.5835 17.4395 11.9975 17.4395H19.2505ZM14.6163 0.653643C14.6663 0.692643 16.3393 1.99264 16.3393 1.99264C16.9473 2.35464 17.4223 3.00164 17.6023 3.76764C17.7813 4.52564 17.6513 5.30764 17.2343 5.96864C17.2315 5.97305 17.2287 5.97741 17.2191 5.99037L17.2115 6.00038C17.1439 6.08958 16.8496 6.46164 15.3646 8.32223C15.3508 8.34661 15.3351 8.36945 15.3181 8.39164C15.293 8.42435 15.2658 8.45442 15.2367 8.4818C15.1354 8.60934 15.0284 8.74335 14.9159 8.88424L14.688 9.1697C14.2177 9.75868 13.6599 10.4571 12.9981 11.2855L12.6584 11.7106C11.3807 13.3097 9.74443 15.3572 7.64827 17.9796C7.18927 18.5516 6.50127 18.8846 5.76227 18.8936L2.12327 18.9396H2.11327C1.76627 18.9396 1.46427 18.7016 1.38327 18.3626L0.564274 14.8916C0.395274 14.1726 0.563274 13.4306 1.02427 12.8546L10.4443 1.07264C10.4483 1.06864 10.4513 1.06364 10.4553 1.05964C11.4883 -0.175357 13.3563 -0.357357 14.6163 0.653643ZM9.394 4.787L2.19527 13.7916C2.02427 14.0056 1.96127 14.2816 2.02427 14.5466L2.70527 17.4316L5.74427 17.3936C6.03327 17.3906 6.30027 17.2616 6.47727 17.0416C7.38876 15.9012 8.53433 14.4679 9.71213 12.994L10.1288 12.4726L10.5462 11.9502C11.6508 10.5679 12.7421 9.20207 13.6551 8.05886L9.394 4.787ZM11.6103 2.01664L10.331 3.615L14.5918 6.88593C15.4119 5.8587 15.9514 5.18214 16.0013 5.11764C16.1653 4.85164 16.2293 4.47564 16.1433 4.11364C16.0553 3.74264 15.8243 3.42764 15.4913 3.22664C15.4203 3.17764 13.7353 1.86964 13.6833 1.82864C13.0493 1.32064 12.1243 1.40864 11.6103 2.01664Z"
                      fill="#4B215F"
                    />
                  </svg>
                  Edit
                </button>
              </div>
              <div className="flex gap-4 items-center py-3 px-8">
                <img
                  src={asset.demo}
                  alt="profile"
                  className="rounded-full w-24 h-24"
                />

                <button className="font-[600] text-white rounded-[4px] bg-[#4B215F] text-[12px] lg:text-[14px] py-2 px-4 lg:h-[40px] flex items-center gap-1 cursor-pointer">
                  <svg
                    wpostalCodeth="15"
                    height="15"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.16797 15.6465C8.16797 15.9449 8.2865 16.231 8.49747 16.442C8.70845 16.653 8.9946 16.7715 9.29297 16.7715C9.59134 16.7715 9.87749 16.653 10.0885 16.442C10.2994 16.231 10.418 15.9449 10.418 15.6465V10.7715H15.293C15.5913 10.7715 15.8775 10.653 16.0885 10.442C16.2994 10.231 16.418 9.94485 16.418 9.64648C16.418 9.34812 16.2994 9.06197 16.0885 8.85099C15.8775 8.64001 15.5913 8.52148 15.293 8.52148H10.418V3.64648C10.418 3.34812 10.2994 3.06197 10.0885 2.85099C9.87749 2.64001 9.59134 2.52148 9.29297 2.52148C8.9946 2.52148 8.70845 2.64001 8.49747 2.85099C8.2865 3.06197 8.16797 3.34812 8.16797 3.64648V8.52148H3.29297C2.9946 8.52148 2.70845 8.64001 2.49747 8.85099C2.2865 9.06197 2.16797 9.34812 2.16797 9.64648C2.16797 9.94485 2.2865 10.231 2.49747 10.442C2.70845 10.653 2.9946 10.7715 3.29297 10.7715H8.16797V15.6465Z"
                      fill="white"
                    />
                  </svg>
                  Upload new picture
                </button>
                <button className="font-[600] text-[#4B215F] rounded-[4px] border-1 border-[#4B215F] bg-white text-[12px] lg:text-[14px] py-2 px-4 h-[35px] lg:h-[40px] flex items-center gap-1 cursor-pointer">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.16797 1.33105L9.17466 9.33775"
                      stroke="#4B215F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M9.45703 1.63672L0.881836 9.03133"
                      stroke="#4B215F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  Remove
                </button>
              </div>

              <div className="pb-6 px-8">
                <div className="w-full pt-5 flex gap-6 ">
                  <div className="w-[50%] flex flex-col gap-2">
                    <label htmlFor="full_name" className="font-[500]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Enter full name"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="w-[50%] flex flex-col gap-2">
                    <label htmlFor="billing_address" className="font-[500]">
                      ID
                    </label>
                    <input
                      type="text"
                      name="id"
                      placeholder="Enter your id"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                </div>
                <div className="w-full pt-5 flex gap-6 ">
                  <div className="w-[50%] flex flex-col gap-2">
                    <label htmlFor="phone" className="font-[500]">
                      Phone Number
                    </label>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Enter your number"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="w-[50%] flex flex-col gap-2">
                    <label htmlFor="email_address" className="font-[500]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col rounded-[8px] mt-5 w-full p-8">
                <h2 className="text-[22px] font-[600]">
                  Heading
                </h2>
                <div className="w-full pt-5 flex gap-6 ">
                  <div className="relative w-[50%] flex flex-col gap-2">
                    <label htmlFor="order_Id" className="font-[500]">
                      Country
                    </label>
                    <select name="country" className="appearance-none py-2 px-4 pr-5 lg:pr-10 border border-[#C5C5C5] text-[#969696] rounded-[8px] w-full ">
                        <option value="Select Country" selected disabled>
                          Select Country
                        </option>
                        <option value="London">London</option>
                        <option value="Paris">Paris</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 top-[50%] right-3 flex items-center">
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
                  <div className="relative w-[50%] flex flex-col gap-2">
                    <label htmlFor="order_Id" className="font-[500]">
                      City
                    </label>
                    <select className="appearance-none py-2 px-4 pr-5 lg:pr-10 border border-[#C5C5C5] text-[#969696] rounded-[8px] w-full ">
                        <option value="Select City" selected disabled>
                          Select City
                        </option>
                        <option value="Croydon">Croydon</option>
                        <option value="Paris">Paris</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 top-[50%] right-3 flex items-center">
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
                <div className="w-full pt-5 flex gap-6 ">
                <div className="relative w-[50%] flex flex-col gap-2">
                    <label htmlFor="state" className="font-[500]">
                      State
                    </label>
                    <select className="appearance-none py-2 px-4 pr-5 lg:pr-10 border border-[#C5C5C5] text-[#969696] rounded-[8px] w-full ">
                        <option value="Select State" selected disabled>
                          Select State
                        </option>
                        <option value="Southwork">Southwork</option>
                        <option value="Paris">Paris</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 top-[50%] right-3 flex items-center">
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
                  <div className="w-[50%] flex flex-col gap-2">
                    <label htmlFor="status" className="font-[500]">
                      Zipcode
                    </label>
                    <input
                      type="text"
                      name="zipcode"
                      placeholder="Enter your zipcode"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                </div>
                <div className="mt-5 w-full flex flex-col gap-2">
                    <label htmlFor="status" className="font-[500]">
                      Address1
                    </label>
                    <input
                      type="text"
                      name="address1"
                      placeholder="Enter your address"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
                  <div className="mt-5 w-full flex flex-col gap-2">
                    <label htmlFor="status" className="font-[500]">
                      Address2
                    </label>
                    <input
                      type="text"
                      name="address2"
                      placeholder="Enter your address"
                      className="py-2 px-4 border-1 border-[#C5C5C5] rounded-[8px] placeholder:text-[#969696] w-[100%]"
                    />
                  </div>
              </div>
            <div className="w-full py-5 pb-8 flex justify-end gap-5">
            <button type="reset" className="rounded-[40px] text-[#4B215F] font-[500] text-[18px] border border-[#4B215F] py-2 px-12 cursor-pointer hover:bg-white">
                Cancel
              </button>
              <button type="submit" className="rounded-[40px] bg-[#4B215F] font-[500] text-[18px] text-white py-2 px-12 cursor-pointer hover:bg-[#704385]">
                Save User
              </button>
            </div>
          </form>
        </div>
      </div>
  
  );
};

export default AddUser;

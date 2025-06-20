import { useState } from "react";
import { asset } from "../../assets/asset";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState("dashboard");
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [dropdown, setDropdown] = useState("");

  const toggleMenu = (menu) => {
    if (openMenu === menu) {
      setOpenMenu("");
      setTimeout(() => setShowSubMenu(false), 500); // Match animation duration
    } else {
      setShowSubMenu(true); // Mount first
      setTimeout(() => setOpenMenu(menu), 0); // Slight delay before starting animation
    }
  };

  return (
    <>
      <div className="z-40 fixed w-[200px] lg:w-[250px] xl:w-[300px] h-screen bg-gray-300">
        <div className="w-[200px] pt-5 lg:w-[250px] xl:w-[300px] h-[100%] bg-white">
          <nav className="space-y-4">
            <div
              className={`flex items-center space-x-3 cursor-pointer ml-7 py-2 px-3 rounded ${
                openMenu === "dashboard"
                  ? "bg-[#4B215F] text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                toggleMenu("dashboard"), navigate("/dashboard");
              }}
            >
              <span>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7225 5.35684L9.83392 1.55451C8.95134 0.867899 7.71533 0.867899 6.83275 1.55451L1.94325 5.35684C1.34779 5.81991 0.999644 6.5321 1 7.28642V13.8864C1 14.8989 1.82081 15.7198 2.83333 15.7198H13.8333C14.8459 15.7198 15.6667 14.8989 15.6667 13.8864V7.28642C15.6667 6.53201 15.3183 5.81976 14.7225 5.35684"
                    stroke={openMenu == "dashboard" ? "white" : "black"}
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.972 11.1227C9.94617 12.3446 6.66267 12.3446 4.63867 11.1227"
                    stroke={openMenu == "dashboard" ? "white" : "black"}
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[12px] lg:text-[14px] font-[600]">
                Dashboard
              </span>
            </div>

            <div
              className={`flex items-center space-x-3 cursor-pointer ml-7 p-2 rounded ${
                openMenu == "order"
                  ? "bg-[#4B215F] text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                toggleMenu("order");
                navigate("/order-display");
              }}
            >
              <span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1332 5.74081C17.5192 5.74081 17.8465 5.99189 17.9607 6.33966L18.8463 9.04115L14.897 9.04159L13.8137 5.7407L17.1332 5.74081ZM12.909 5.741L13.9912 9.04161L10.8794 9.04165L11.9615 5.74061L12.909 5.741ZM9.97358 9.04167L6.02448 9.04141L6.90986 6.33957C7.02407 5.99181 7.35138 5.74072 7.73734 5.74072L11.0572 5.74004L9.97358 9.04167ZM14.0993 12.7093L12.7386 11.9248C12.6921 11.898 12.6383 11.8759 12.5793 11.8758C12.2868 11.8765 12.2864 11.8765 12.2864 11.8765C12.2271 11.8765 12.1729 11.9008 12.1221 11.93L10.7711 12.7092V9.90244L14.0993 9.90203V12.7093ZM7.57372 16.209C7.41578 16.209 7.28799 16.3369 7.28774 16.4949L7.2873 16.7861C7.2872 16.8621 7.31728 16.9351 7.37096 16.9888C7.42464 17.0426 7.4975 17.0728 7.57349 17.0728L10.4747 17.0741C10.5506 17.0737 10.6235 17.0435 10.6772 16.9898C10.7309 16.9361 10.761 16.8632 10.7609 16.7872L10.7607 16.4959C10.7605 16.3379 10.6325 16.2099 10.4745 16.2099L7.57372 16.209ZM7.57396 17.8769C7.41603 17.8769 7.28809 18.0048 7.28785 18.1627L7.28741 18.454C7.2873 18.5299 7.31739 18.6029 7.37107 18.6566C7.42475 18.7104 7.49761 18.7406 7.5736 18.7407L12.174 18.7424C12.2499 18.742 12.3228 18.7118 12.3765 18.6581C12.4302 18.6044 12.4603 18.5315 12.4603 18.4555L12.46 18.1643C12.4599 18.0063 12.3318 17.8783 12.1738 17.8782L7.57396 17.8769ZM13.7237 17.8782C13.5657 17.8782 13.4385 18.0061 13.4383 18.164L13.4378 18.4552C13.4377 18.5312 13.4678 18.6042 13.5215 18.6579C13.5752 18.7117 13.648 18.7419 13.724 18.7419L14.0199 18.7424C14.0958 18.742 14.1687 18.7118 14.2224 18.6581C14.2761 18.6044 14.3062 18.5315 14.3062 18.4555L14.3059 18.1643C14.3058 18.0063 14.1777 17.8783 14.0197 17.8783L13.7237 17.8782ZM19.0096 19.1623C19.0023 19.6359 18.6153 20.019 18.139 20.019C18.1375 20.019 6.73313 20.019 6.73159 20.019C6.25526 20.019 5.86826 19.6366 5.86096 19.1626L5.86085 9.90222L9.90989 9.90247V13.5382C9.90989 13.6961 10.0378 13.8242 10.1958 13.8244L10.4847 13.8248C10.5345 13.8248 10.5839 13.8118 10.6279 13.7865L12.4349 12.7431L14.2426 13.7865C14.2865 13.8119 14.3359 13.8248 14.3858 13.8248C14.3882 13.8248 14.6747 13.8244 14.6747 13.8244C14.8326 13.8242 14.9606 13.6961 14.9606 13.5382V9.90264L19.0097 9.90161L19.0096 19.1623ZM7.74111 4.87988C17.128 4.87995 7.74111 4.87988 7.73489 4.87988C6.97398 4.87988 6.33014 5.37069 6.0978 6.05332L5.02248 9.33384C5.00772 9.37769 5 9.42399 5 9.47112L5.00001 19.1574C5.00473 20.1097 5.7782 20.8798 6.73159 20.8798L18.139 20.8799C19.0924 20.8799 19.8658 20.1098 19.8706 19.1574V9.47119C19.8706 9.42406 19.8628 9.37775 19.8481 9.33391L18.7728 6.05341C18.5404 5.37078 17.8941 4.87997 17.1332 4.87997L7.74111 4.87988Z"
                    fill={openMenu == "order" ? "white" : "black"}
                    stroke={openMenu == "order" ? "white" : "black"}
                    stroke-width="0.3"
                  />
                </svg>
              </span>
              <span className="text-[12px] lg:text-[14px] font-medium">
                Order List
              </span>
            </div>

            {/* Products Menu */}
            <div>
              <div
                className={`flex items-center justify-between cursor-pointer ml-7 p-2 rounded ${
                  openMenu === "products"
                    ? "bg-[#4B215F] text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  toggleMenu("products");
                  navigate("/product-display");
                }}
              >
                <div className="flex items-center space-x-3">
                  <span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.66797 15.2134H10.668V16.5467H6.66797V15.2134ZM6.66797 17.88H13.3346V19.2134H6.66797V17.88Z"
                        fill={openMenu == "products" ? "white" : "black"}
                      />
                      <path
                        d="M18.6667 5.87988H5.33333C4.97987 5.88041 4.64104 6.02106 4.39111 6.27099C4.14117 6.52093 4.00053 6.85976 4 7.21322V20.5465C4.00053 20.9 4.14117 21.2388 4.39111 21.4888C4.64104 21.7387 4.97987 21.8794 5.33333 21.8799H18.6667C19.0201 21.8794 19.359 21.7387 19.6089 21.4888C19.8588 21.2388 19.9995 20.9 20 20.5465V7.21322C19.9995 6.85976 19.8588 6.52093 19.6089 6.27099C19.359 6.02106 19.0201 5.88041 18.6667 5.87988ZM13.3333 7.21322V9.87988H10.6667V7.21322H13.3333ZM5.33333 20.5465V7.21322H9.33333V11.2132H14.6667V7.21322H18.6667L18.6673 20.5465H5.33333Z"
                        fill={openMenu == "products" ? "white" : "black"}
                      />
                    </svg>
                  </span>
                  <span className="font-medium text-[12px] lg:text-[14px]">
                    Products
                  </span>
                </div>
                {/* {openMenu === "products" ? (
                  <img src={asset.arrowUp} alt="arrowUp" />
                ) : (
                  <img src={asset.arrowDown} alt="arrowDown" />
                )} */}
              </div>

              {/* {showSubMenu && (
                <div
                  className={`  mt-2 space-y-2 transform transition-all duration-500 ease-in-out origin-top ${
                    openMenu === "products"
                      ? "opacity-100 scale-y-100 max-h-screen"
                      : "opacity-0 scale-y-0 max-h-0 overflow-hidden"
                  }`}
                >
                  <div onClick={() => {setDropdown("Linen Fabric")}} className={`${(dropdown == "Linen Fabric") ? "bg-[#fcfda6] text-[#4B215F] font-[700] " : ""} hover:bg-[#ebebeb] text-[#656565] text-[12.5px] py-2 px-10  hover:text-[#4B215F] cursor-pointer`}>
                    Linen Fabric
                  </div>
                  <div onClick={() => {setDropdown("Silk Fabric")}} className={`${(dropdown == "Silk Fabric") ? "bg-[#fcfda6] text-[#4B215F] font-[700] " : ""} hover:bg-[#ebebeb] text-[#656565] text-[12.5px] py-2 px-10 hover:text-[#4B215F] cursor-pointer`}>
                    Silk Fabric
                  </div>
                  <div onClick={() => {setDropdown("Cotton Fabric")}} className={`${(dropdown == "Cotton Fabric") ? "bg-[#fcfda6] text-[#4B215F] font-[700]" : ""} hover:bg-[#ebebeb] text-[#656565] text-[12.5px] py-2 px-10 hover:text-[#4B215F] cursor-pointer`}>
                    Cotton Fabric
                  </div>
                  <div onClick={() => {setDropdown("Satin Fabric")}} className={`${(dropdown == "Satin Fabric") ? "bg-[#fcfda6] text-[#4B215F] font-[700]" : ""} hover:bg-[#ebebeb] text-[#656565] text-[12.5px] py-2 px-10 hover:text-[#4B215F] cursor-pointer`}>
                    Satin Fabric
                  </div>
                </div>
              )} */}
            </div>

            {/* Customer List */}
            <div>
              <div
                className={`flex items-center justify-between cursor-pointer ml-7 p-2 rounded ${
                  openMenu === "customers"
                    ? "bg-[#4B215F] text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  toggleMenu("customers");
                  navigate("/customer-display");
                }}
              >
                <div className="flex items-center space-x-3">
                  <span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.353 6.06351C8.49218 6.06351 6.96245 7.55274 6.96245 9.38985C6.96245 10.5479 7.57097 11.5679 8.48633 12.1635C6.25179 12.937 4.64844 15.0618 4.64844 17.5626V19.2668C4.64972 19.5043 4.84165 19.6975 5.0798 19.6982H11.5149C11.6298 19.6982 11.7402 19.6532 11.8217 19.5724C11.9026 19.4915 11.9488 19.3817 11.9495 19.2675C11.9495 19.1519 11.9039 19.0415 11.8224 18.96C11.7409 18.8785 11.6304 18.8329 11.5149 18.8329H5.51363V17.5625C5.51363 14.871 7.66469 12.7162 10.3529 12.7162C11.3171 12.7162 12.2061 12.9928 12.9579 13.473C12.9848 13.4903 13.0144 13.5051 13.0445 13.516H13.0458C13.0753 13.5269 13.1068 13.5346 13.1382 13.5391H13.1402C13.1691 13.5423 13.1973 13.5429 13.2262 13.5404C13.2345 13.5397 13.2429 13.5384 13.2506 13.5372C13.2743 13.534 13.2981 13.5282 13.3212 13.5211C13.3289 13.5185 13.336 13.5153 13.3437 13.5128C13.3668 13.5044 13.3892 13.4935 13.4104 13.4813C13.4175 13.4775 13.4245 13.473 13.4316 13.4685C13.4496 13.4563 13.4663 13.4434 13.4823 13.4287C13.4913 13.421 13.4996 13.4126 13.5073 13.4043C13.5253 13.3857 13.5407 13.3658 13.5548 13.3439C13.5561 13.3433 13.5574 13.342 13.5581 13.3407C13.6852 13.1405 13.6267 12.8747 13.4271 12.7463V12.7431C13.4162 12.7361 13.4053 12.7303 13.3937 12.7245C13.0285 12.4941 12.6356 12.3041 12.2203 12.1609C13.1344 11.5652 13.7397 10.5452 13.7397 9.38786C13.7397 7.55067 12.2139 6.06152 10.3524 6.06152L10.353 6.06351ZM10.353 6.92816C11.7563 6.92816 12.8752 8.02967 12.8752 9.3893C12.8752 10.7489 11.7563 11.8505 10.353 11.8505C8.94982 11.8505 7.82846 10.7489 7.82846 9.3893C7.82846 8.02975 8.94987 6.92816 10.353 6.92816ZM14.5832 12.8948C14.4028 12.8941 14.2417 13.0052 14.1775 13.1733L13.5118 14.9193H12.3294C12.1953 14.9193 12.0682 14.9816 11.9867 15.0875C11.9045 15.1941 11.8769 15.3327 11.9109 15.4624L12.945 19.3754C12.9951 19.5654 13.1665 19.6982 13.3629 19.6982H17.8839C18.0803 19.6982 18.2524 19.5654 18.3018 19.3754L19.3366 15.4624C19.3712 15.3327 19.343 15.1941 19.2615 15.0875C19.1793 14.9816 19.0529 14.9193 18.9187 14.9193H17.7395L17.07 13.1733C16.9846 12.95 16.7343 12.8389 16.5115 12.9237C16.2882 13.0097 16.1771 13.2594 16.2619 13.4821L16.81 14.9187H14.4363L14.9845 13.4821C15.0699 13.2594 14.9595 13.0097 14.7367 12.9237C14.6879 12.905 14.6352 12.8948 14.5832 12.8948ZM12.8911 15.7833H18.357L17.552 18.8324H13.6954L12.8911 15.7833ZM14.6512 16.259C14.621 16.2577 14.5909 16.2609 14.5607 16.266C14.327 16.309 14.1717 16.5324 14.2128 16.7667L14.4355 18.0024C14.4561 18.116 14.5209 18.2162 14.6159 18.2816C14.7103 18.3465 14.8271 18.3715 14.9401 18.351C15.1744 18.3079 15.3297 18.0839 15.288 17.8496L15.0653 16.614C15.0287 16.413 14.856 16.2648 14.6512 16.259ZM16.5962 16.259C16.3921 16.2654 16.222 16.4137 16.1854 16.6139L15.9588 17.8496C15.9171 18.0839 16.0731 18.3079 16.3067 18.3509C16.4197 18.3721 16.5365 18.3471 16.6315 18.2816C16.7259 18.2161 16.7907 18.116 16.8113 18.003L17.0353 16.7674C17.077 16.5331 16.921 16.309 16.6867 16.266C16.6572 16.2609 16.6264 16.2583 16.5962 16.259Z"
                        fill={openMenu == "customers" ? "white" : "black"}
                        stroke={openMenu == "customers" ? "white" : "black"}
                        stroke-width="0.3"
                      />
                    </svg>
                  </span>
                  <span className=" font-medium text-[12px] lg:text-[14px]">
                    Customer List
                  </span>
                </div>
                {/* {openMenu === "customers" ? (
                  <img src={asset.arrowUp} alt="arrowUp" />
                ) : (
                  <img src={asset.arrowDown} alt="arrowDown" />
                )} */}
              </div>
            </div>

            {/* User List */}
            <div>
              <div
                className={`flex items-center justify-between cursor-pointer ml-7 p-2 rounded ${
                  openMenu === "users"
                    ? "bg-[#4B215F] text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  toggleMenu("users");
                  navigate("/user-list");
                }}
              >
                <div className="flex items-center space-x-3">
                  <span>
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 19.8799V18.6299C18 16.5589 16.081 14.8799 13.714 14.8799H10.286C7.919 14.8799 6 16.5589 6 18.6299V19.8799M15 8.87988C15 9.67553 14.6839 10.4386 14.1213 11.0012C13.5587 11.5638 12.7956 11.8799 12 11.8799C11.2044 11.8799 10.4413 11.5638 9.87868 11.0012C9.31607 10.4386 9 9.67553 9 8.87988C9 8.08423 9.31607 7.32117 9.87868 6.75856C10.4413 6.19595 11.2044 5.87988 12 5.87988C12.7956 5.87988 13.5587 6.19595 14.1213 6.75856C14.6839 7.32117 15 8.08423 15 8.87988Z"
                        stroke={openMenu == "users" ? "white" : "black"}
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-medium text-[12px] lg:text-[14px]">
                    User List
                  </span>
                </div>
                {/* {openMenu === "users" ? (
                  <img src={asset.arrowUp} alt="arrowUp" />
                ) : (
                  <img src={asset.arrowDown} alt="arrowDown" />
                )} */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

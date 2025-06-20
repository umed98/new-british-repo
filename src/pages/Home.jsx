import React, { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState();

  useEffect(() => {
    const storage =
      localStorage.getItem("username") || sessionStorage.getItem("username");
    console.log(storage);
    if (storage) {
      const user = JSON.parse(storage);
      console.log(user.username);
      setName(user.username);
    }
  }, []);


  return (
    <div className="w-full min-h-[90vh] pl-[200px] lg:pl-[250px] xl:pl-[300px] bg-[#F7F7F7]">
      {/* <div className="w-full min-h-[90vh] px-5 flex flex-col justify-center items-center">
        <h1 className="text-violet-600 text-4xl font-bold">
          Welcome to Dashboard {name}
        </h1>
      </div> */}

   <div className="flex">
      {/* Sidebar (assumed to already exist) */}

      {/* Main content area */}
      <div className="flex-1">
  
        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-6 p-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Sales</p>
            <h2 className="text-2xl font-bold mt-1">£25,240.00</h2>
            <p className="text-green-500 text-sm mt-1">+3.4%</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Total Orders</p>
            <h2 className="text-2xl font-bold mt-1">3,469</h2>
            <p className="text-green-500 text-sm mt-1">+12.8%</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-sm">Product Views</p>
            <h2 className="text-2xl font-bold mt-1">680K</h2>
            <p className="text-red-500 text-sm mt-1">-2.4%</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-gray-500 text-sm">User</p>
            <h2 className="text-2xl font-bold mt-1">Tommy Style</h2>
          </div>
        </div>

        {/* Balance & Report */}
        <div className="grid grid-cols-2 gap-6 px-6">
          {/* Balance Breakdown */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Balance Breakdown</h2>
            <div className="w-40 h-40 mx-auto relative">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#eee" strokeWidth="4" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="40 60" strokeLinecap="round" transform="rotate(-90 18 18)" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#f97316" strokeWidth="4" strokeDasharray="20 80" strokeDashoffset="-40" strokeLinecap="round" transform="rotate(-90 18 18)" />
                <circle cx="18" cy="18" r="16" fill="none" stroke="#eab308" strokeWidth="4" strokeDasharray="10 90" strokeDashoffset="-60" strokeLinecap="round" transform="rotate(-90 18 18)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-medium">Chart</span>
              </div>
            </div>
            <div className="flex justify-around mt-6 text-sm">
              <div className="text-center">
                <p className="text-gray-500">Net Profit</p>
                <p className="font-bold">£32,340</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Expenses</p>
                <p className="font-bold">£8,068</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Taxes</p>
                <p className="font-bold">£2,560</p>
              </div>
            </div>
          </div>

          {/* Dummy Report Graph */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-2">Report</h2>
            <div className="flex gap-3 mb-3">
              {['1D', '1W', '1M', '3M', '6M'].map((period) => (
                <button key={period} className={`text-xs px-3 py-1 rounded-full ${period === '1W' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}>{period}</button>
              ))}
            </div>
            <div className="h-40 w-full bg-gray-50 rounded-lg flex items-center justify-center text-gray-400">
              Graph Placeholder
            </div>
          </div>
        </div>

        {/* Orders & Products */}
        <div className="grid grid-cols-2 gap-6 px-6 mt-6 pb-10">
          {/* Recent Orders */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <button className="text-sm text-orange-500">See All</button>
            </div>
            <ul className="space-y-3">
              {["iPhone 14 pro", "iPhone 12 pro", "Apple Watch SE", "iPad mini"].map((item, i) => (
                <li key={i} className="flex justify-between text-sm border-b pb-2">
                  <span>{item}</span>
                  <span>£{[999, 999, 249, 357][i]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Products */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Popular Products</h2>
              <button className="text-sm border px-3 py-1 rounded-md">Filter</button>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th>Name</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td>iPhone 15 Pro Max</td>
                  <td>02 Jan 2023</td>
                  <td>Gadget</td>
                  <td>Apple</td>
                  <td>£1299</td>
                  <td><span className="text-green-600">In Stock</span></td>
                </tr>
                <tr className="border-t">
                  <td>MacBook Air M1</td>
                  <td>01 Jan 2023</td>
                  <td>Laptop</td>
                  <td>Apple</td>
                  <td>£0299</td>
                  <td><span className="text-red-500">Out of Stock</span></td>
                </tr>
                <tr className="border-t">
                  <td>iPhone 13 Pro Max</td>
                  <td>05 Jan 2023</td>
                  <td>Gadget</td>
                  <td>Apple</td>
                  <td>£1399</td>
                  <td><span className="text-green-600">In Stock</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default Home;

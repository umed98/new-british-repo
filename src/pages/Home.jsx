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
    <div className="w-full pl-[200px] lg:pl-[250px] xl:pl-[300px] bg-[#F7F7F7]">
      <div className="w-full min-h-[90vh] px-5 flex flex-col justify-center items-center">
        <h1 className="text-violet-600 text-4xl font-bold">
          Welcome to Dashboard {name}
        </h1>
      </div>
    </div>
  );
};

export default Home;

// import { useEffect, useState } from "react";
// import ToysCategoryCard from "../CategoryCard/ToysCategoryCard";

import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToysCategoryCard from "../CategoryCard/ToysCategoryCard";


const Category = () => {
    const [categoryToys, setCategoryToys] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/categories")
        .then((res) => res.json())
        .then((data) => setCategoryToys(data));
    }, []);
  
    const uniqueSubcategories = [...new Set(categoryToys.map((toy) => toy.subcategory))];
    const [activeTab, setActiveTab] = useState(uniqueSubcategories[1]);
  
    const handleTabSelect = (tabName) => {
      setActiveTab(tabName);
    };
  
    return (
      <div className="text-center mt-3 mb-3">
        <h3 className="text-3xl font-bold text-orange-600 mb-2">Toys Categories</h3>
        <p className="w-2/3 mx-auto text-lg">
          Discover, learn, and play with diverse Toys Categories. Explore educational, language, and scientific toys
          that ignite curiosity and inspire young minds. Unleash the joy of learning through interactive playtime
          adventures.
        </p>
        <Tabs
          selectedIndex={uniqueSubcategories.findIndex((subcategory) => subcategory === activeTab)}
          onSelect={(index) => handleTabSelect(uniqueSubcategories[index])}
          className="mt-12 mb-3"
        >
          <TabList className="flex justify-center mb-3">
            {uniqueSubcategories.map((subcategory) => (
              <Tab
                key={subcategory}
                className={`px-4 py-2 text-lg rounded-md mr-2 cursor-pointer ${
                  activeTab === subcategory ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
              >
                {subcategory}
              </Tab>
            ))}
          </TabList>
          {uniqueSubcategories.map((subcategory) => (
            <TabPanel key={subcategory}>
              <div className="grid grid-cols-1 sm:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryToys
                  .filter((toy) => toy.subcategory === subcategory)
                  .map((filteredToy) => (
                    <ToysCategoryCard key={filteredToy._id} toy={filteredToy} />
                  ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    );
  };
  
  export default Category;
  
import { useEffect, useState } from "react";
import ToysCategoryCard from "../CategoryCard/ToysCategoryCard";

const ToysCategory = () => {
    const [categoryToys, setCategoryToys] = useState([]);

    useEffect(()=>{
        fetch('toys.json')
        .then(res => res.json())
        .then(data => setCategoryToys(data))
    }, [])
    return (
        <div className="text-center mt-3 mb-3">
           <h3 className="text-3xl font-bold text-orange-600 mb-2">Toys Categories</h3>
           <p className="w-2/3 mx-auto text-lg">Discover, learn, and play with diverse Toys Categories. Explore educational, language, and scientific toys that ignite curiosity and inspire young minds. Unleash the joy of learning through interactive playtime adventures.</p> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 mb-3">
             {
                categoryToys.map(toy =><ToysCategoryCard key={toy._id}
                toy ={toy}></ToysCategoryCard>)
             }
           </div>
        </div>
    );
};

export default ToysCategory;
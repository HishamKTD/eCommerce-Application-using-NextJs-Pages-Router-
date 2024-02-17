import { useState, useEffect } from 'react';
import { ProductsService } from "../../services/products-service";
import { CategoryDataType } from '@/utils/classes';

export default function HomeMenu() {
  const [categories, setCategories] = useState<CategoryDataType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await ProductsService.getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="row m-auto d-flex justify-content-between" style={{ width: "80%" }}>
      {categories.map((c) => (
        <div key={c.id} className="d-flex flex-row align-items-center bg-primary-subtle rounded-4 p-2 text-decoration-none text-dark fw-bold" style={{ width: "20%", fontWeight: "500", cursor: "pointer" }}>
          <div className="bg-white rounded-4 mt-0">
            <img src={c.assets[0].url} height={70} className="m-auto mb-0 object-fit-cover rounded-4" alt="groceryMenu" width={70} />
          </div>
          <span className="text-center p-3">{c.name}</span>
        </div>
      ))}
    </div>
  );
}

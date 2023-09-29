import { useFilterContext } from "./FilterContext";
import useFetch from "../components/useFetch";
import { Product } from "../data/DataTypes";

const ProductCount = () => {
  const { filters } = useFilterContext();
  const { data } = useFetch<{ products: Product[] }>(
    "https://challenges.brainster.tech/ajax_data/data.json"
  );

  const filteredProducts = data?.products.filter((item: Product) => {
    return (
      (!filters.gender || item.gender === filters.gender) &&
      (!filters.brand || item.brand === filters.brand)
    );
  });

  return (
    <p className="product-counter">
      <span className="counter-text">Number of Products:</span>
      <span className="counter-span">{filteredProducts?.length || 0}</span>
    </p>
  );
};

export default ProductCount;

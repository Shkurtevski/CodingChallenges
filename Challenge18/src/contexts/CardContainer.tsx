import { nanoid } from "nanoid";
import useFetch from "../components/useFetch";
import Card from "../components/Card";
import { Images } from "../data/DataTypes";
import images from "../data/DataImages";
import { useFilterContext } from "./FilterContext";
import { Product } from "../data/DataTypes";
import ProductCount from "./ProductCount";

const getImagePath = (imageName: string, images: Images[]) => {
  const image = images.find((img) => img.name === imageName);
  return image ? image.path : "default-image-path.png";
};

const CardContainer = () => {
  const { filters } = useFilterContext();
  const { data, isLoading, error } = useFetch<{ products: Product[] }>(
    "https://challenges.brainster.tech/ajax_data/data.json"
  );

  const filteredProducts = data?.products.filter((item: Product) => {
    return (
      (!filters.gender || item.gender === filters.gender) &&
      (!filters.brand || item.brand === filters.brand)
    );
  });

  return (
    <div className="card-container">
      <ProductCount/>
      <div className="card-wrapper">
        {error && <div className="error-message">{error}</div>}
        {isLoading && <div>Loading...</div>}
        {!error && !isLoading && filteredProducts?.length ? (
          filteredProducts.map((product) => (
            <Card
              key={nanoid()}
              brand={product.brand}
              price={product.price}
              image={getImagePath(product.image, images)}
            />
          ))
        ) : (
          <div>No products match the selected filters.</div>
        )}
      </div>
    </div>
  );
};

export default CardContainer;

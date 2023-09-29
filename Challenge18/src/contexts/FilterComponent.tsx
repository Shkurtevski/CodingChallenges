import React, { useEffect, useState } from "react";
import { useFilterContext } from "../contexts/FilterContext";
import { Product } from "../data/DataTypes";

interface Filter {
  id: string;
  text: string;
  category: string;
}

interface Props {
  filters: Filter[];
  categoryToDisplay: string;
  onClick: (clickedValue: string) => void;
  numberOfProducts?: number;
}

const FilterComponent: React.FC<Props> = ({
  filters,
  categoryToDisplay,
  onClick,
  numberOfProducts,
}) => {
  const { setFilter } = useFilterContext();
  const [productCounts, setProductCounts] = useState<{ [key: string]: number }>(
    {}
  );

  const fetchProductCounts = async () => {
    try {
      const response = await fetch(
        "https://challenges.brainster.tech/ajax_data/data.json"
      );
      const data = await response.json();
      const products: Product[] = data.products;

      const counts = filters.reduce((acc, filter) => {
        let count = 0;
        if (categoryToDisplay === "brand") {
          count = products.filter((product: Product) => {
            return product.brand === filter.text;
          }).length;
        } else if (
          categoryToDisplay === "MALE" ||
          categoryToDisplay === "FEMALE"
        ) {
          count = products.filter((product: Product) => {
            return product.gender === categoryToDisplay;
          }).length;
        } else {
          count = products.filter((product: Product) => {
            return (
              (categoryToDisplay === "all" && true) ||
              product.gender === categoryToDisplay
            );
          }).length;
        }
        acc[filter.text] = count;
        return acc;
      }, {} as { [key: string]: number });

      setProductCounts(counts);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchProductCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryToDisplay]);

  const handleClick = (clickedValue: string, category: string) => {
    if (category === "brand") {
      setFilter("brand", clickedValue);
    } else if (category === "gender") {
      setFilter("gender", clickedValue);
    }

    onClick(clickedValue);
  };

  return (
    <React.Fragment>
      <ul>
        {filters
          .filter((filter) => filter.category === categoryToDisplay)
          .map((filter) => (
            <li key={filter.id}>
              <p onClick={() => handleClick(filter.text, filter.category)}>
                {filter.text}{" "}
                <span data-testid="product-count">
                  {productCounts[filter.text] || numberOfProducts}
                </span>
              </p>
            </li>
          ))}
      </ul>
    </React.Fragment>
  );
};

export default FilterComponent;

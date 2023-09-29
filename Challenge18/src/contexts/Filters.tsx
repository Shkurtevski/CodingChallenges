import Filter from "./FilterComponent";
import DataFilters from "../data/DataFilters";
import { useFilterContext } from "./FilterContext";

interface Props {
  filterBy: string;
  gender: string;
  brand: string;
}

const Filters = ({ filterBy, gender, brand }: Props) => {
  const { filters, setFilter } = useFilterContext();

  const showAll = "all";
  const showMale = "male";
  const showFemale = "female";
  const showByBrand = "brand";
  console.log(filters);

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h2>{filterBy}</h2>
        <div className="show-all">
          <Filter
            filters={DataFilters}
            categoryToDisplay={showAll}
            onClick={() => {
              setFilter("gender", null);
              setFilter("brand", null);
            }}
          />
        </div>
        <div className="gender">
          <h3>{gender}</h3>
          <div className="show-male">
            <Filter
              filters={DataFilters}
              categoryToDisplay={showMale}
              onClick={() => {
                setFilter("gender", "MALE");
                setFilter("brand", null);
              }}
              numberOfProducts={43}
            />
          </div>
          <div className="show-female">
            <Filter
              filters={DataFilters}
              categoryToDisplay={showFemale}
              onClick={() => {
                setFilter("gender", "FEMALE");
                setFilter("brand", null);
              }}
              numberOfProducts={20}
            />
          </div>
        </div>
        <div className="show-by-brand">
          <h3>{brand}</h3>
          <Filter
            filters={DataFilters}
            categoryToDisplay={showByBrand}
            onClick={(clickedValue: string) => {
              setFilter("brand", clickedValue);
              setFilter("gender", null);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;

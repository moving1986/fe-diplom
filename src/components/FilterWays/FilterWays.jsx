import "./FilterWays.css";

import DateFilter from "./components/DateFilter";
import VagonOpionsFilter from "./components/VagonOpionsFilter"
import PriceFilter from "./components/PriceFilter";
import FromWayFilter from "./components/FromWayFilter";
import ToWayFilter from "./components/ToWaysFilter";

const FilterWays = () => {
   
      return (
        <div className="settings-panel">
            
        <DateFilter />
        <VagonOpionsFilter />
        <PriceFilter /> 
        <FromWayFilter />
        <ToWayFilter />
        </div>
    );
}

export default FilterWays;
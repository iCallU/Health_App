import { useContext } from "react";
import HealthDataContext from "../../context/health-data-context";
import ShowHealthData from "../ShowHealthData/ShowHealthData";
import { VIEW, EDIT } from "../../store/store-types";
import EditHealthData from "../EditHealthData/EditHealthData";

const MainComponent = () => {
    
  const healthContext = useContext(HealthDataContext);

  const { currentPageState} = healthContext;
  console.log('Main curretPageState', currentPageState)
  setTimeout(() => {
      
  }, 1000);
    return (
        <div>
           {currentPageState === VIEW && <ShowHealthData />}
    {currentPageState === EDIT && <EditHealthData />}
        </div>
    )
};

export default MainComponent;
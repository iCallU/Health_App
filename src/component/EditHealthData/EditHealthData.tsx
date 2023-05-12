import { useContext } from "react";
import { stateType } from "../../store/store-types";
import HealthDataContext from "../../context/health-data-context";

const EditHealthData = () => {
    const {userData, changeUserData} = useContext(HealthDataContext);
    
    const submit =() => {
        // changeUserData({bp, name})
    }
    console.log('userData',userData);


    // FormValidation 
    // customHook
    //BP ,name


    const onNameChange = () => {

    }
    return (
        <div>


<form>

<p>ID :- {userData.id}</p>
<input type="text" value={userData.name} onChange={onNameChange} placeholder="name" />

<span>----------------------------</span>

<input 
    type="number" 
    value={userData.BP.value}
    onChange={onNameChange}
    placeholder={userData.BP.name} />


</form>

        </div>
    )
};

export default EditHealthData;
import React, {useState} from "react";
import '../Dropdown/Dropdown.css';


function Dropdown({
    setDropdownSelectedData, 
    selected,
    setSelected,
    extraCss={},
    optionsList = ["Processing", "Delivered", "Completed"]
}){

    const [isActive, setIsActive] = useState(false);
    const [ data, setData ] = useState(selected);
    
    return(
        <div className="dropdown w-full h-2 my-auto cursor-pointer select-none z-50 bg-blue-800" >
            <div className={`dropdown-btn h-10 px-4 py-2 flex justify-between bg-dark-purple text-black rounded-full cursor-pointer `} 
            onClick={(e) => 
            setIsActive(!isActive)}>
                {selected? data :"Processing"} 
                <i class="fa fa-caret-down mt-1 ml-1 text-black" aria-hidden="true"></i>
            </div>
            {isActive && (
                    <div className="dropdown-content bg-gray-400 rounded-md shadow-lg absolute right-0 p-3 bd-white z-50">
                        {optionsList.map((option, key) =>(
                            <div 
                                key={key}
                                onClick={(e) => {
                                setIsActive(!isActive);
                                // window.alert(option)
                                }}  
                                className="drodown-item p-2 cursor-pointer text-black hover:bg-gray-200 sm:text-sm">
                                    {option}
                            </div>
                        ))}
                
                    </div>
                )}
            
    </div>
    );
}

export default Dropdown 

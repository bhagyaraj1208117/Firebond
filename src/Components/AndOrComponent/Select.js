import {useState} from "react"

const SelectComponent=({defaultVal,handeleOptions,id})=>{
    const [userSelectVal,setUserSelectVal]=useState(defaultVal)
    const [childUserSelect,setChildUserSelect]=useState("select")
    const [secondChildUserSelect,setSecondChildUserSelect]=useState("select")


    const handleChange=(e)=>{

        setUserSelectVal(e.target.value)
        if (e.target.value==="and" || e.target.value==="or"){
            handeleOptions(e.target.value,id)
        }


    }

    
    const handleChildChange=(e)=>setChildUserSelect(e.target.value)
    const handleSecondChildChange=(e)=>setSecondChildUserSelect(e.target.value)
    return (<div>       
    {(userSelectVal !=="and" && userSelectVal!=="or")&&<> <select value={userSelectVal} style={{width:"200px",padding:"0.5em",marginTop:"0.5em"}} onChange={(e)=>handleChange(e)}>
        <option value="select">select</option>
        <option value="Constant">Constant</option>
        <option value="Argument">Argument</option>
        <option value="and">and</option>
        <option value="or">or</option>
    </select>
    </>}
    {(userSelectVal==="and" || userSelectVal==="or") &&
  <div>
        <button>{userSelectVal}</button>
        <button>X</button>

        </div>}
    
    
    </div>)

}

export default SelectComponent;
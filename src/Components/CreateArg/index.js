import {useState} from "react"
const CreateArg=({val,index,updateFun})=>{
    const [name,setName]=useState(val.name)
    const [elValue,setElValue]=useState(val.value)

    const handleNameChange=(e,currentValue)=>{
        setName(e.target.value);
        updateFun(e,currentValue,e.target.value,index)

    }
    const handleValueChange=(e,currentName)=>{
        setElValue(e.target.value);
        updateFun(e,e.target.value,currentName,index)

    }
    return (  <div >
        <label htmlFor="selectOption"><input type="text" onChange={(e)=>handleNameChange(e,elValue)} value={name} style={{width:"195px",padding:"0.5em",marginTop:"0.5em"}}/></label>
        <select id="selectOption" value={elValue} onChange={(e)=>handleValueChange(e,name)} style={{padding:"0.5em",marginTop:"0.5em"}}>
          
          <option value={true}>true</option>
          <option value={false}>false</option>
        </select>
      </div>)

}

export default CreateArg
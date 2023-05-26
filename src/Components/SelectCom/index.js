import {useState} from "react"


const Select=({value,handleOptionChange,result={},operation})=>{
    const [selectedVal,setSelectedVal]=useState(value.default);
    const handleChange=(e)=>{
        setSelectedVal(e.target.value)
        handleOptionChange(e.target.value,operation)

    }
    return (<select onChange={(e)=>handleChange(e)} value={selectedVal} style={{width:"200px",padding:"0.5em",marginTop:"0.5em"}}>
        <option value={value.default}>{value.default}</option>
        {value.options.length>0 && value.options.map((eachitem,index)=><option key={index} value={eachitem}>{`${eachitem}`}</option>)}
    </select>)

}

export default Select;
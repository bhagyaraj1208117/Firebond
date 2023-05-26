import { useState } from "react"
import Select from "./Select"
import "./index.css"
const AndOrComponent=({argsList,argNames,optionSelectVal,handleAndOrComponents,isRecursive,mainList})=>{

    const [parentSelect,setParentSelect]=useState(optionSelectVal)
    const [showbutton,setShowButton]=useState(false)
   
    const [valuesList,setValueList]=useState([{
        operation:optionSelectVal,
        id:"0",
        value:"",
        children:(optionSelectVal==="and" || optionSelectVal==="or")?[{
            operation:"select",
            id:"00",
            value:[]
        },{operation:"select",id:"01",value:[]}]:[]
    }])


  const handleAddOptions=(value,id)=>{
    const copyVal=[...valuesList]
    if (id.length===1){
         copyVal.values.push({
            operation:optionSelectVal,

            id:`${copyVal.length}`,
            value:"",

         })
    }
  }

   const handeleOptions=(value,id)=>{
    const copyVal=[...valuesList]
      if (id.length===1){
    
        const finalVal=copyVal.map((item)=>{
            if (item.id===id){
                  
                if (value==="and" || value==="or"){
                    return {...item, operation:value,  children:(value==="and" || value==="or")?[{
                        operation:"select",
                        id:"00",
                    },{operation:"select",id:"01"}]:[]}
                }
                else{
                    return {...item,operation:value}
                }
                
            }
            else return item
        })
        if (value==="and" || value==="or") setShowButton(true)
        setValueList(finalVal)
      }
   }
return (<ul>
      {valuesList.length>0 && valuesList.map((each,index)=><><li key={index}><Select defaultVal={each.operation} key={index} id={each.id} handeleOptions={handeleOptions}/>
      {each.children.length>0 && each.children.map((eachChild,index)=><AndOrComponent argsList={argsList} argNames={argNames} key={eachChild.id} optionSelectVal={eachChild.operation} isRecursive={true} mainList={mainList}/>)}
      </li>
            {(showbutton || optionSelectVal==="and" || optionSelectVal==="or")&&<button>Add Arg</button>}
    </>
      
      )}

      
</ul>)


}

export default AndOrComponent;


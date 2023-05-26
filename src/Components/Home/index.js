import {useState} from "react"
import CreateArg from "../CreateArg/index"
import Select from "../SelectCom/index"
import AndOrComponent from "../AndOrComponent/index"

const Home=()=>{

    const [argList,setArgList]=useState([{
        name:"My Arg",
        value:true,
        id:0,
    }])
    const [optionSelect,setOptionSelect]=useState("select");
    const [finalResult,setFinalResult]=useState("undefined")
    const [defaultArg,setDefaultArg]=useState(["My Arg"])
    const [currentOp,setCurrentOp]=useState("select")
    const [andValuesList,setAndValueList]=useState([{
      
        operation:optionSelect,
        id:"0",
        value:"",
        children:(optionSelect==="and" || optionSelect==="or")?[{
            operation:"select",
            id:"00",
            value:[]
        },{operation:"select",id:"01",value:[]}]:[]
    
    }])

    const defaultSelect={default:"select",options:[ "Constant","Argument","and","or"
    ]}


    const defaultConstant={
      default:"false",options:["true"]
    }

    const defaultArgsList={
      default:defaultArg[0],
      options:defaultArg.filter((each,index)=>index>0)
    }

    const handleAdd=(e)=>{
        const copyArg=[...argList]

        const newList={
            name:"",
            value:true,
            id:copyArg.length

        }
        setArgList([...copyArg,newList])

    }
    const handleArg=(e,elVal,elName,index)=>{
        const updatedList = argList.map((item, idx) => {
            if (idx === index) {

              return { ...item, name: elName, value: elVal };
            }
            return item;
          });
          const valueArg = updatedList.map((each, index) =>each.name);

          setArgList(updatedList);
          setDefaultArg(valueArg)




    }
    const handleOptionChange=(value,op)=>{
      setOptionSelect(value)

      if (value==="Constant") setCurrentOp("Constant")
      else if (value==="Argument") setCurrentOp("Argument")

      


    }

    const handleAndOrComponents=(val)=>{
      setAndValueList(val)
    }
    const result=(value,op,userSelect)=>{

        if (value==="Constant" || op==="Constant"){
          return userSelect
        }
        else if (value==="Argument" || op==="Argument"){
           if (optionSelect==="Argument"){
                   return `${argList[0].value}`
           }
            var copyData=[...argList]
            var filterData=copyData.filter((each)=>each.name===userSelect)
            return `${filterData[0].value}`
          
        }
        return "undefined"
    }

    return (
      <div  style={{padding:"0.5em"}} >
        <div style={{display:"flex",flexDirection:'column'}}>
      <ul style={{listStyle:'none' ,display:"flex",flexDirection:"column" ,padding:"0px"}}   >
     {argList.length>0 && argList.map((eachItem,index)=><CreateArg val={eachItem} key={index} index={index} updateFun={handleArg}/>)}
     </ul>
     <button type="button" style={{width:"85px"}}onClick={(e)=>handleAdd(e)}>Add Args</button>
    
           {optionSelect==="select" && <Select value={defaultSelect} operation="select" handleOptionChange={handleOptionChange}/>}
      {(optionSelect==="Constant" || optionSelect==="true" || optionSelect==="false") && <Select value={defaultConstant} handleOptionChange={handleOptionChange} result={result} operation="Constant"/>}
      {(optionSelect==="Argument" ||defaultArg.includes(optionSelect)) && <Select value={defaultArgsList} handleOptionChange={handleOptionChange} operation="Argument"/>}
      {(optionSelect==="and" || optionSelect==="or") && <AndOrComponent argsList={argList} argNames={defaultArg} optionSelectVal={optionSelect} handleAndOrComponents={handleAndOrComponents} isRecursive={false} mainList={andValuesList} onChange={(value)=>setAndValueList(value)}/>} 
       <p>{finalResult}</p>
      <p>{result(currentOp,optionSelect,optionSelect)}</p>

     </div>
     </div>
    )

}


export default Home;

// {
//   name:"a",
//   children:[{name:"b",children:[{name:"c",children:[{name:"d",children:[{name:"e",}]},{name:"f",children:[{name:"g"}]}]}]}]
// }


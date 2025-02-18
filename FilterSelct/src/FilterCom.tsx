import { Button, Checkbox, Select } from "antd";

interface  FilterComProps {
Options?:string[]
Placehoder?:string,
}


function FilterCom({Options,Placehoder}:FilterComProps) {
   


  const DefaultArray =[
    "OPTION A", "OPTION B", "OPTION C", "OPTION D", "OPTION E", "OPTION F", "OPTION G", "OPTION H", "OPTION I", "OPTION J", "OPTION K", "OPTION L", "OPTION M", "OPTION N", "OPTION O", "OPTION P", "OPTION Q", "OPTION R", "OPTION S", "OPTION T", "OPTION U", "OPTION V", "OPTION W", "OPTION X", "OPTION Y", "OPTION Z"
  ]
 

  const arrayofSelect =Options && Options.length > 0 ? Options : DefaultArray;
  const PlaceholderText = Placehoder ? Placehoder : "Select Options";
  

  const handleclear =()=>{
 console.log("Clear Button Clicked")  

}



   
 


  return (
    <div className='flex justify-center items-center h-screen bg-gray-500 text-black-50'>
    <div>
    
      
    <Select  placeholder={PlaceholderText}  style={{width:"200px"}}
     dropdownRender={()=>(
    
     <div>
    
  

    {arrayofSelect.map((item,index)=>(
       <div key={index}>
        <Checkbox >{item}</Checkbox>
 


      </div>
    ))}

<div className="flex justify-end">
  <Button  style={{"border":"1px solid black"}} onClick={()=> handleclear()}>Clear</Button>
     
    </div> 
    
      
         
      
      </div>
    )}>  
    </Select>
    
    </div>
    
    
        </div>
  )
}

export default FilterCom
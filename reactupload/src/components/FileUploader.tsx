import axios from "axios"
import { ChangeEvent, useState } from "react"
type UploadStatus = 'idle'| 'uploading' | 'done' | 'error'
function FileUploader() {
    const [file,setFile] =useState<File | null>(null)
    const [status,setStatus] =useState<UploadStatus>('idle')
    function handlefileCange (e: ChangeEvent<HTMLInputElement>){
  if(e.target.files)
  {
    setFile(e.target.files[0])
  }
    }


    const handleSubmit =async ()=>{
        if(!file) return;
        setStatus('uploading');
        const formData = new FormData();
        formData.append('file',file)


        try {
            await axios.post('https://httpbin.org/post',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
            })


            setStatus('done')
        } catch (error) {
            setStatus('error')
        }
 

     }
  return (
    <div>
    <input type="file" onChange={handlefileCange} />        
 

 {
    file && (
        <div style={{marginTop: 20, fontSize:20}}>
            <p>File name:{file.name}</p>
            <p>Size: {(file.size/ 1024).toFixed(2)} Kb </p>
            <p>Type: {file.type}</p>
        </div>
    )
 }


 {
    file && status !== 'uploading' && ( <button onClick={()=> handleSubmit()}>Submit</button>)
 }

{
      status === 'done' && ( <p style={{color:"green"}}>File Upload Successfully</p>)
 }
 {
     status === 'error' && ( <p style={{color:"red"}}>Failed In Uploading</p>)
 }

    </div>
  )
}

export default FileUploader
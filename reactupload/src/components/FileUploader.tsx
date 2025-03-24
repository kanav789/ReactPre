import axios from "axios"
import { ChangeEvent, useState } from "react"
type UploadStatus = 'idle'| 'uploading' | 'done' | 'error'
function FileUploader() {
    const [file,setFile] =useState<File | null>(null)
    const [status,setStatus] =useState<UploadStatus>('idle')
    const [uploadProgress, setuploadProgress] =useState(0)
   
    function handlefileCange (e: ChangeEvent<HTMLInputElement>){
 
       
  if(e.target.files)
  {
    setFile(e.target.files[0])
  }
    }


    const handleSubmit =async ()=>{
        if(!file) return;
        setStatus('uploading');
        setuploadProgress(0)
        const formData = new FormData();
        formData.append('file',file)


        try {
            await axios.post('https://httpbin.org/post',formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            },
            onUploadProgress:(progressEvent)=>{
              const progress =progressEvent.total ? Math.round((progressEvent.loaded *100)) : 0;
             setuploadProgress(progress)
           
             }
            })


            setStatus('done')
            setuploadProgress(100)
        } catch (error) {
            setStatus('error')
            setuploadProgress(0)
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


 
{status === 'uploading' && (
        <div className="space-y-2">
          <div className="h-2.5 w-full rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600">{uploadProgress}% uploaded</p>
        </div>
      )}


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
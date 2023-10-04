import { useRef, useState } from "react"

export default function Picture({readablePicture,setReadablePicture,setPicture}) {
    const [error,setError]=useState("");
    const inputRef=useRef();
    const handlePicture=(e)=>{
        let pic=e.target.files[0];
        if (pic.type !== "image/jpeg" && pic.type !== "image/png" && pic.type !== "image/webp" ) { 
            setError(`${pic.name} format is not supported`); 
            return;
        }else if(pic.size>1024*1024*5){
            setError(`${pic.name} size is too large,maximum 5mb allowed`); 
            return;
        }else{
            setError("");
            setPicture(pic);
            // reading the picture
            const reader=new FileReader();
            reader.readAsDataURL(pic);
            reader.onload=(e)=>{
                setReadablePicture(e.target.result);
            }

        }
    }
    const handleChangePic=()=>{
        setPicture("");
        setReadablePicture("");
      
    }
  return (
    <div className="mt-8 content-center dark:text-dark_text_1 space-y-1">
        <label htmlFor="" className="text-sm font-bold tracking-wide">picture (optional)</label>
        {
            readablePicture ? 
            (<div>
                <img src={readablePicture} alt="picture" 
                className="w-20 h-20 object-cover rounded-full"/>
                {/* // change pic */}
                <div className=" mt-2 py-1 w-20 dark:bg-dark_bg_3 rounded-md text-xs  flex items-center justify-center cursor-pointer"
                onClick={()=>handleChangePic()}>remove</div>
            </div> )

            : (<div
            className="w-full h-12 dark:bg-dark_bg_3 rounded-md font-bold flex items-center justify-center cursor-pointer"
            onClick={()=>inputRef.current.click()}
            >Upload picture</div>)
        }
        <input 
        type="file" 
        name="picture" 
        hidden 
        ref={inputRef} 
        accept="image/png,image/jpeg,image/webp" 
        onChange={handlePicture}
        />
        {/* error */}
        <div className="mt-2">
            <p className="text-red">{error}</p>
        </div>
    </div>
  )
}

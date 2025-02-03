import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { useEffect } from "react";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  let pasteId = searchParams.get("pasteId");
  const dispatch=useDispatch()
  const allpastes=useSelector((state)=> state.paste.pastes)

  useEffect(() => {
    console.log(pasteId)
    if(pasteId){
      const paste=allpastes.find((p)=>p._id===pasteId)
      console.log(paste);
      
      setTitle(paste.title);
      setValue(paste.content);
    }
  
    
  }, [pasteId])

  function createPaste() {

    const paste={
      title:title,
      content:value, 
      _id:pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }

    if(pasteId){
      //update
      dispatch(updateToPastes(paste));
    }
    else{
      //create
      dispatch(addToPastes(paste));
    }
    //after creation or updation 
    setTitle('');
    setValue('');
    setSearchParams({});
  }


  

  return (
    <div className="w-full">
    <div className="flex flex-row gap-6 place-content-between">
      <input
        className="p-1 rounded-2xl  mt-2 w-[66%] pl-2 border-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button 
        className="bg-blue-600 rounded-full px-4 py-2"
        onClick={createPaste}
      >
        {pasteId ? "Update Paste" : "Create Paste"}
      </button>
    </div>

    <div className="mt-7">
      <textarea
        className="rounded-2xl mt-4 min-w-[500px] p-4 w-full border-1 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        value={value}
        placeholder="Write some text"
        onChange={(e) => setValue(e.target.value)}
        rows={20}
      />
    </div>
  </div>
  );
};

export default Home;

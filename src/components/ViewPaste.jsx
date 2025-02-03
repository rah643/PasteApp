import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";








const ViewPaste = () => {


  const {id}=useParams();
const allPastes=useSelector((state)=>state.paste.pastes);

const paste=allPastes.filter((p)=>p._id===id);
console.log(paste);


  return (
    <div>
        <div className="flex flex-row gap-6 place-content-between ">
        <input
          className="p-1 rounded-2xl border-2 mt-2 w-[66%] pl-2"
          type="text"
          placeholder="enter title here"
           value={paste[0].title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
        {/* <button className="rounded-full" onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create Paste"}
        </button> */}
      </div>

      <div className="mt-7 ">
        <textarea
          className="rounded-2xl mt-4 min-w-[500px] p-4 "
         value={paste[0].content}
          placeholder="Write some text"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
  

    </div>
  )
}

export default ViewPaste
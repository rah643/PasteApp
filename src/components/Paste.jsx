import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  console.log(pastes);

  const navigate=useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //delete
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        className="p-2 rounded-2xl border-1 min-w-[600px] mt-5"
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5">
        {filterData.length &&
          filterData.map((paste) => {
            return (
              <div className="border p-4 rounded-md shadow-md" key={paste._id}>
  <div className="font-semibold text-lg">{paste.title}</div>
  <div className="text-sm text-gray-700 mt-2">{paste.content}</div>

  <div className="flex flex-row justify-end gap-4 mt-4">
    <button className="flex items-center text-blue-500 hover:text-blue-700">
      <Link to={`/?pasteId=${paste._id}`} className="flex items-center">
        <i className="fas fa-edit mr-2"></i> Edit
      </Link>
    </button>

    <button className="flex items-center text-green-500 hover:text-green-700">
      <Link to={`/pastes/${paste._id}`} className="flex items-center">
        <i className="fas fa-eye mr-2"></i> View
      </Link>
    </button>

    <button
      className="flex items-center text-yellow-500 hover:text-yellow-700"
      onClick={() => {
        navigator.clipboard.writeText(paste.content);
        toast.success("Copied to clipboard");
      }}
    >
      <i className="fas fa-copy mr-2"></i> Copy
    </button>

    <button
      className="flex items-center text-red-500 hover:text-red-700"
      onClick={() => handleDelete(paste._id)}
    >
      <i className="fas fa-trash-alt mr-2"></i> Delete
    </button>

    <button className="flex items-center text-purple-500 hover:text-purple-700"

    onClick={()=>{
        navigate("/share");
    }}
    >
      <i className="fas fa-share-alt mr-2"></i> Share
    </button>
  </div>

  <div className="text-xs text-gray-500 mt-2">
  {new Date(paste.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })}
</div>

</div>

            );
          })}
      </div>
    </div>
  );
};

export default Paste;

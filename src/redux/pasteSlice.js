import { createSlice } from '@reduxjs/toolkit'
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  :[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
      // add a check  - > paste already exist wala case k  liye  duplicate paste and tiltle
      const paste=action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully");
    },
    updateToPastes: (state,action) => {
       const pasteId=action.payload;
       console.log(pasteId);
       
       const index=state.pastes.findIndex((item)=> item._id===pasteId._id);
           console.log(index);
           
       if(index>=0){
        state.pastes[index]=pasteId;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Updated Successfully");
       }
      


    },
    resetToPaste: (state, action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },
    removeFromPastes:(state,action)=>{
   const pasteId=action.payload;
   const index=state.pastes.findIndex((item)=>( item._id===pasteId));
   
   if (index>=0){
    state.pastes.splice(index,1);
    localStorage.setItem("pastes",JSON.stringify(state.pastes));

    toast.success("Paste deleted");
   }


    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes,updateToPastes, resetToPaste,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer




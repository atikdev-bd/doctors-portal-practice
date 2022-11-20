import React from "react";

const ConfirmationModal = ({title, message,setDeletingDoctor,successAction, doctorInfo}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
          {title}
          </h3>
          <p className="py-4">
           {message}
          </p>
          <div className="modal-action">
           
            <label onClick={()=>successAction(doctorInfo)} htmlFor="confirmation-modal" className="btn btn-success btn-outline ">
            Yes
            </label>
            <button onClick={()=>setDeletingDoctor(null)} className="btn btn-error btn-outline hover:bg-red-600 text-white">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;


const AddTask = ({ buttonAction, children, closeModal, handleSubmit, showModal  }) => {


  
    return showModal ? (

         (
            <div
              className="modal-backdrop"
              onClick={() => {
                // close modal when outside of modal is clicked
                closeModal();
              }}
            >
              <div
                className="modal-content"
                onClick={e => {
                  // do not close modal if anything inside modal content is clicked
                  e.stopPropagation();
                }}
              >
                {children}
                <div className="modal-buttons">
                    <button onClick={closeModal}>Cancel</button>
                    <button onClick={handleSubmit}>{buttonAction}</button>  
                </div>
              </div>
            </div>
          ) 
    
    ) : null;
  }
  
  export default AddTask;
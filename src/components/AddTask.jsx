
const AddTask = ({ children, showModal, closeModal }) => {


  
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
              </div>
            </div>
          ) 
    
    ) : null;
  }
  
  export default AddTask;
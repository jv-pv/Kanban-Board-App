
const Toast = ({showToast, toastMessage}) => {


  return showToast ? (
    <div className="toast-container">
        {toastMessage}
    </div>
  ) : null;
}

export default Toast
// src/pages/ErrorPage.jsx

const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";
import Sidebar from "../components/Sidebar";

function ErrorPage() {
  return (
    <div className="main-content-container">
      <Sidebar/>
      <div className="error-page-container">
        <h1>Oh no 404!</h1>
        <img src="src/assets/cat-computer.gif" alt="404 error gif" className="page-img" />
      </div>
    </div>
  );
}

export default ErrorPage;

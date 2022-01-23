import css from "./Footer.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let backUrl = "";
  let nextUrl = "";

  const createPdf = async () => {
      if(pathname !== '/review') {
          return;
      }
    const response = await axios({
      // url: "http://10.246.88.211:8080/pdf",
      url: "http://localhost:8080/pdf",
      method: "GET",
      responseType: "blob",
    });
    const data = await response.data;
    const file = new Blob([data], { type: "application/pdf" });

    const fileURL = URL.createObjectURL(file);

    window.open(fileURL);
  };

  const backClicked = () => {
    pathname === "/company" && (backUrl = "/dashboard");
    pathname === "/accounts" && (backUrl = "/company");
    pathname === "/signatories" && (backUrl = "/accounts");
    pathname === "/online" && (backUrl = "/signatories");
    pathname === "/general" && (backUrl = "/online");
    pathname === "/documents" && (backUrl = "/general");
    pathname === "/review" && (backUrl = "/documents");
    navigate(backUrl);
  };

  const nextClicked = () => {
    pathname === "/company" && (nextUrl = "/accounts");
    pathname === "/accounts" && (nextUrl = "/signatories");
    pathname === "/signatories" && (nextUrl = "/online");
    pathname === "/online" && (nextUrl = "/general");
    pathname === "/general" && (nextUrl = "/documents");
    pathname === "/documents" && (nextUrl = "/review");
    pathname === "/review" && (nextUrl = "");
    navigate(nextUrl);
  };

  return (
    <div className={`${css.container}`}>
      <div className="btn-part">
        <button
          onClick={backClicked}
          style={{
            textAlign: "center",
            width: "115px",
            height: "42px",
            fontSize: "18px",
            textAlign: "center",
            borderRadius: "30px",
            border: "1px solid #11863C",
            margin: "0 25px 0 0",
            color: "#11863C",
            position: "absolute",
            margin: "0 0 0 35px",
            background: "#fff",
          }}
        >
          Back
        </button>
      </div>
      <div className="button-group" style={{ textAlign: "right" }}>
        <button
          onClick={createPdf}
          className="btn"
          style={{
            textAlign: "center",
            width: "115px",
            height: "42px",
            fontSize: "18px",
            textAlign: "center",
            borderRadius: "30px",
            border: "1px solid #11863C",
            margin: "0 25px 0 0",
            color: "#11863C",
          }}
        >
          {pathname === "/review" ? 'Download' : 'Save' }
        </button>
        <button
          onClick={nextClicked}
          className="btn next"
          style={{
            visibility: pathname === "/review" ? "hidden" : "visible",
            textAlign: "center",
            width: "115px",
            height: "42px",
            fontSize: "18px",
            textAlign: "center",
            borderRadius: "30px",
            border: "1px solid #11863C",
            background: "#11863C",
            color: "#fff",
            margin: "0 75px 0 0",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// import jsPDF from "jspdf";
// import css from './ReviewPage.module.css';

// export default () => {
//   const generatePdf = () => {
//     // var doc = new jsPDF("p", "pt");
//     // doc.setFont("helvetica", 'bold');
//     // doc.setTextColor(0,0,0);
//     // doc.setFontSize(22)
//     // doc.text(20, 50, "APPLICANT'S PARTICULARS");
//     // doc.setDrawColor(255, 0, 0);
//     // doc.line(35, 30, 700, 30);
//     // doc.setFont("helvetica", 'normal');
//     // doc.text(20, 60, "This is the second title.");
//     // doc.setFont("helvetica");
//     // // doc.setFontType("normal");
//     // doc.text(20, 100, "This is the thiRd title.");
//     // doc.save("demo.pdf");
//   };
//   return (
//     <>
//       <div id={`${css.review}`}>
//         <form>
//           <div className="form-content m-3">
//             <div className="row">
//               <div className="col-md-12">
//                 <label>Comapny Name</label>
//                 <input type="text" className={`${css.formControl}`} />
//               </div>
//             </div>
//             <div className={`row ${css.inputBlock}`}>
//               <div className="col-md-7">
//                 <label className="label-new" style={{width: '25%'}}>
//                   Country of incorporation
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style={{width: '74%', display: 'inline-block'}}
//                 />
//               </div>
//               {/* <div className="col-md-5">
//                 <label className="label-new" style="width: 31%;">
//                   Date of incorporation
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="D"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="display: inline-block;"
//                 />
//                 <input
//                   type="text"
//                   placeholder="D"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="display: inline-block;"
//                 />
//                 /
//                 <input
//                   type="text"
//                   placeholder="M"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="display: inline-block;"
//                 />
//                 <input
//                   type="text"
//                   placeholder="M"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="display: inline-block;"
//                 />
//                 /
//                 <input
//                   type="text"
//                   placeholder="Y"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="display: inline-block;"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Y"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="display: inline-block;"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Y"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="display: inline-block;"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Y"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="display: inline-block;"
//                 />
//               </div>
//             </div>
//             <div className={`row ${css.inputBlock}`}>
//               <div className="col-md-7">
//                 <label className="label-new" style="width: 25%;">
//                   Domicile Country
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 74%; display: inline-block;"
//                 />
//               </div>
//             </div>
//             <div className={`row ${css.inputBlock}`}>
//               <div className="col-md-7">
//                 <label className="label-new" style="width: 43%;">
//                   Tax Registration number(Where applicable)
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 56%; display: inline-block;"
//                 />
//               </div>
//               <div className="col-md-5">
//                 <label className="label-new" style="width: 30%;">
//                   Registration Number
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 69%; display: inline-block;"
//                 />
//               </div>
//             </div>
//             <div className={`row ${css.inputBlock}`}>
//               <div className="col-md-12">
//                 <label className="label-new" style="width: 29%;">
//                   If listed in stock exchange,name of stock exchange
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 70.6%; display: inline-block;"
//                 />
//               </div>
//             </div>
//             <div className={`row ${css.inputBlock}`}>
//               <div className="col-md-12">
//                 <label className="label-new" style="width: 14%;">
//                   Physical Address
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 85.6%; display: inline-block;"
//                 />
//               </div>
//             </div>
//             <div className={`row ${css.inputBlock}`}>
//               <div className="col-md-12">
//                 <label className="label-new" style="width: 14%;">
//                   Time at current Address
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 85.6%; display: inline-block;"
//                 />
//               </div>
//             </div>
//             <div className={`row ${css.inputBlock}`}>
//               <div className="col-md-4">
//                 <label className="label-new" style="width: 43%;">
//                   Telephone
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 55%; display: inline-block;"
//                 />
//               </div>
//               <div className="col-md-4">
//                 <label className="label-new" style="width: 6%;">
//                   Fax
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 92%; display: inline-block;"
//                 />
//               </div>
//               <div className="col-md-4">
//                 <label className="label-new" style="width: 25%;">
//                   Swift Address
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 73.6%; display: inline-block;"
//                 />
//               </div>
//             </div>
//             <div className={`row ${css.inputBlock}`}>
//               <div className="col-md-7">
//                 <label className="label-new" style="width: 24%;">
//                   Email Address
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 74%; display: inline-block;"
//                 />
//               </div>
//               <div className="col-md-5">
//                 <label className="label-new" style="width: 30%;">
//                   Website
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 69%; display: inline-block;"
//                 />
//               </div>
//             </div>
//             <div className={`row ${css.inputBlock}`}>
//               <div className="col-md-12">
//                 <label className="label-new" style="width: 13.8%;">
//                   Mailing Address
//                 </label>
//                 <input
//                   type="text"
//                   className={`${css.formControl} ${css.elem}`}
//                   style="width: 85.6%; display: inline-block;"
//                 />
//               </div>*/}
//             </div>  
//           </div>
//         </form>
//       </div>
//       <button onClick={generatePdf}>Download</button>
//     </>
//   );
// };

export default () => {
  return (
    <div className="header-part">
      <img
        style={{ width: "82vw", position: "absolute", top: "23%", left: "17%" }}
        src="icons/pages/review-page.png"
      />
    </div>
  );
};

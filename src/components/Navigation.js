import React, { useState, useEffect } from 'react';

function Navigation() {
  const [isActive, setisActive] = useState(false);

  const handleClick = () => {
    setisActive(!isActive);
    console.log(!isActive); // Use the updated isActive value here (not isActive)
  };

  const width = document.body.clientWidth;

  useEffect(() => {
    if (width >= 991) {
    setisActive(!isActive);
  }
  },[width, isActive] );

  return (
    // <nav className="navbar navbar-expand-lg text-white" >
    //   <div className={isActive ? "container-fluid bg-true" : "container-fluid bg-false"} >
    //     <a className="navbar-brand fs-800 ff-sans-cond" href="/">
    //       Fd.
    //     </a>
    //     <button
    //       className="navbar-toggler text-white"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //       onClick={handleClick}
    //     >
    //       <i
    //         className={
    //           isActive
    //             ? 'toggler-icon fa-solid fa-xmark fa-2x'
    //             : 'toggler-icon fa-solid fa-bars fa-2x'
    //         }
    //       ></i>
    //     </button>
    //     <div className={isActive ? "collapse navbar-collapse visible" : "collapse navbar-collapse invisible"} id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link fs-700 glitch" data-glitch="Home" href="/">
    //             Home
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link fs-700 glitch" data-glitch="About" href="/about">
    //             About
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link fs-700 glitch" data-glitch="Projects" href="/projects">
    //             Projects
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link fs-700 glitch" data-glitch="Contact" href="/contact">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav class="navbar navbar-expand-lg bg-transparent">
    <div className={isActive ? "container-fluid bg-true" : "container-fluid bg-false"} >
      <button
               className="navbar-toggler text-white"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
               onClick={handleClick}
             >
               <i
                 className={
                   isActive
                     ? 'toggler-icon fa-solid fa-xmark fa-2x'
                     : 'toggler-icon fa-solid fa-bars fa-2x'
                 }
               ></i>
         </button>
         <div className={isActive ? " navbar-collapse visible" : " navbar-collapse invisible"} id="navbarSupportedContent">
          <ul class="navbar-nav  mb-2 mb-lg-0">
          <li className="nav-item">
               <a className="nav-link fs-700 glitch" data-glitch="Home" href="/">
                 Home
               </a>
             </li>
             <li className="nav-item">
               <a className="nav-link fs-700 glitch" data-glitch="About" href="/about">
                 About
               </a>
             </li>
             <li className="nav-item">
               <a className="nav-link fs-700 glitch" data-glitch="Projects" href="/projects">
                 Projects
               </a>
             </li>
             <li className="nav-item">
               <a className="nav-link fs-700 glitch" data-glitch="Contact" href="/contact">
                 Contact
               </a>
             </li>
            </ul>
        </div>
    </div>
</nav>
    
  );
}

export default Navigation;

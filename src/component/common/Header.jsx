// const Header=()=>{
//     const Icon = ({ name, className = "" }) => (
//       <i className={`fas fa-${name} ${className}`}></i>
//     );
//     return(
//         <nav className="navbar">
//             <div className="logo">
//               <Icon name="file-alt" />
//               <span>ResumeIQ</span>
//             </div>
//             <div className="nav-links">
//               <span>Home</span>
//               <span>Evaluation</span>
//               <span>Insights</span>
//               <span>Contact</span>
//             </div>
//         </nav>
//     )
// }
// export default Header

import { NavLink } from 'react-router-dom'

const Header=()=>{
    const Icon = ({ name, className = "" }) => (
      <i className={`fas fa-${name} ${className}`}></i>
    );
    return(
        <nav className="navbar">
            <div className="logo">
              <Icon name="file-alt" />
             <span> <NavLink to="/">ResumeIQ</NavLink></span>
            </div>
            <div className="nav-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/evaluation">Evaluation</NavLink>
              <NavLink to="/insights">Insights</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}
export default Header
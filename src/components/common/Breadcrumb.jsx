import { NavLink } from "react-router-dom";

const Breadcrumb = ({ url, index }) => {

    console.log(url, index);

    const firstLink = (index == 0) ? url : '';
    const secondLink = (index == 1) ? `/${url}` : '';
    const thirdLink = (index == 2) ? `${secondLink}` : '';

    return(
       <>
        {index == 0 && <NavLink to={firstLink}>Home</NavLink>}
        {index == 1 && <NavLink to={secondLink}>{url}</NavLink>}
        {index == 2 && <NavLink to={thirdLink}>{url}</NavLink>}
       </>
    )
}

export default Breadcrumb;
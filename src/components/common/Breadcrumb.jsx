import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb = () => {

    const location = useLocation();
    const pathname = location.pathname.split("/");
    let home, secondLink, thirdLink, lastLink;

    for(let i = 0; i < pathname.length; i++){
        if(i == 0){
            home = pathname[i];
        }
        if(i == 1){
            secondLink = pathname[i];
        }
        if(i == 2){
            thirdLink = pathname[i];
        }
    }

    lastLink = `${secondLink}/${thirdLink}`;

    return(
        <div className="breadcrumb">
            <>
            {/* check if second link exists or else hide Home link when on Homepage */}
            {pathname[1].length > 0 ? <NavLink to={home}>Home</NavLink> : ''} 
            {secondLink != undefined && <NavLink to={secondLink}>{secondLink}</NavLink>}
            {thirdLink != undefined && <NavLink to={lastLink}>{thirdLink}</NavLink>}
            </>
        </div>
    )
}

export default Breadcrumb;
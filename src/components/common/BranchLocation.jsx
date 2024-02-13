import multiLineString from "../functions/GlobalFunctions";

const BranchLocation = ({ branch }) => {
    return(
        <div className="branch-locations">
            <div className="branch">
                {/* <div className="branch-map" dangerouslySetInnerHTML={{__html: embeddedMaps[branch.id]}}></div> */}
                <div className="branch-map" dangerouslySetInnerHTML={{__html: branch.branch_map}}></div>
                {branch.branch_name ? <div className="branch-name"><span>{branch.branch_name}</span></div> : '' }
                {branch.branch_address ? <div className="branch-address">
                    <svg version="1.0" width="800px" height="800px" viewBox="0 0 64 64">
                        <path d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
                    </svg>                    
                    <span dangerouslySetInnerHTML={{__html: multiLineString(branch.branch_address)}}/>
                    </div> : '' }
                {branch.branch_phone ? <div className="branch-phone">
                    <svg width="800px" height="800px" viewBox="0 0 24 24">
                        <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"/>
                    </svg>                    
                    {/* <span>{branch.branch_phone}</span> */}
                    <a href={`mailto:${branch.branch_phone}`} aria-label={`${branch.branch_name} branch phone number`} title={branch.branch_phone}>{branch.branch_phone}</a>
                    </div> : '' }
                {branch.branch_fax ? <div className="branch-fax">
                    <svg version="1.1" viewBox="0 0 512 512">
                        <g>
	                        <path className="st0" d="M74.556,112.851H55.141C24.69,112.851,0,137.54,0,167.992V443.27c0,30.452,24.69,55.141,55.141,55.141h19.415c30.452,0,55.14-24.689,55.14-55.141V167.992C129.696,137.54,105.008,112.851,74.556,112.851z"/>
	                        <path className="st0" d="M473.397,187.415V13.589H192.392v173.826c-22.79,11.056-38.603,34.198-38.603,61.212v178.422c0,37.707,30.569,68.278,68.277,68.278h221.658c37.708,0,68.277-30.57,68.277-68.278V248.627C512,221.613,496.177,198.471,473.397,187.415z M220.184,41.381h225.421v182.186H220.184V41.381z M217.098,330.266v-50.952h231.601v50.952H217.098z M421.848,446.066c-16.629,0-30.108-13.48-30.108-30.108c0-16.629,13.479-30.108,30.108-30.108c16.628,0,30.108,13.479,30.108,30.108C451.956,432.586,438.476,446.066,421.848,446.066z"/>
	                        <rect x="250.464" y="89.401" className="st0" width="162.12" height="16.212"/>
	                        <rect x="250.464" y="140.353" className="st0" width="101.904" height="16.212"/>
                        </g>
                    </svg>                    
                    <span aria-label={`${branch.branch_name} fax number`}>{branch.branch_fax}</span>
                    </div> : '' }
                {branch.branch_email ? <div className="branch-email">
                    <svg height="800px" width="800px" viewBox="0 0 512 512">
                        <g>
	                        <path className="st0" d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92C462.107,387.195,462.94,397.75,456.948,404.771z"/>
                        </g>
                    </svg>                    
                    <a href={`mailto:${branch.branch_email}`} aria-label={`${branch.branch_name} branch email`} title={`${branch.branch_name} Email`}>{branch.branch_email}</a>
                    </div> : '' }
                {branch.branch_operation_hours ? <div className="branch-hours">
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#EE2F3C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.24 16.24L12 12" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>                
                    <span aria-label={`${branch.branch_name} trading hours`} title={`${branch.branch_name} trading hours`}>{branch.branch_operation_hours}</span>
                    </div> : '' }
            </div>
        </div>
    )
};

export default BranchLocation;
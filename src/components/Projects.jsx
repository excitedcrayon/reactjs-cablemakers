import ProjectCard from "./common/ProjectCard";
import projects from "../../public/data/projects.json";
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";
import { Helmet } from "react-helmet-async";

const Projects = () => {
    return(
        <>
        <Helmet>
            <title>Cablemakers | Projects</title>
            <meta name="description" content="HV Cable Projects completed and supplied by Cablemakers North Queensland"/>
            <meta name="keywords" content="HV Cable Upgrades, Wikmar Sugar Mills, Sandfire resources, New Power Generation Plant, Cloncurry Mine, RAAF Base Townsville, Townsville, Hospital Expansion."/>
        </Helmet>
        <motion.div initial="out" animate="in" exit="out" variants={pagevariant} transition={pagetransition}>
            <div className="page-wrapper">
                <div className="page-header projects-header" data-header-name="Projects">
                    <h1>Projects</h1>
                </div>
                <div className="articles">
                    <article>
                        <p className="text-center">HV Cable Projects completed and supplied by Cablemakers North Queensland</p>
                        <div className="projects-list">
                            {projects.map((project) => {
                                return(
                                    <ProjectCard key={project.id} project={project} />
                                )
                            })}
                        </div>
                    </article>
                </div>
            </div>
        </motion.div>
        </>
    );
};

export default Projects;
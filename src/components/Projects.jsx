import ProjectCard from "./common/ProjectCard";
import projects from "../assets/file/projects.json";
import { motion } from "framer-motion";
import { pagevariant } from "../animation/PageVariant";
import { pagetransition } from "../animation/PageTransition";

const Projects = () => {
    return(
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
    );
};

export default Projects;
import { motion } from "framer-motion"; 
import { pagetransition } from "../../animation/PageTransition";

const ProjectCard = ({ project }) => {
    return (
        <motion.section className="project" data-project-year={project.year} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} transition={pagetransition}>
            {project.date ? <span className="project-date">{project.date}</span> : ''}
            {project.title ? <h3 className="project-title">{project.title}</h3> : ''}
            {project.subtitle ? <strong className="project-subtitle">{project.subtitle}</strong> : ''}
            {project.image ? <div className="project-image"><img src={project.image} alt={`${project.title} Project`} /></div> : <div className="no-project-image" data-no-image="Cablemakers"></div>}
        </motion.section>
    )
}

export default ProjectCard;
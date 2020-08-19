import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

function Thumbnail(props) {
  return (
    <motion.div className="projectInstance"
    whileHover={{ scale: 1.1 }}
    >
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt={props.alt}/>
        </div>
        <div className="project-card">
          <div className="project-title">{props.title}</div>
          <div className="project-subhead">{props.subhead}</div>
          <div className="project-category">{props.category}</div>
        </div>
      </Link>

    </motion.div>
  )
}

export default Thumbnail;

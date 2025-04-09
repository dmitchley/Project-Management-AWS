// "use client"
// import React, { useState } from 'react'
// import ProjectHeader from "@/app/projects/ProjectHeader"
// import BoardView from '../BoardView'

// type Props = {
//   params: { id: string }
// }

// const Project = ({ params }: Props) => {
//   const { id } = params;
//   const [activeTab, setActiveTab] = useState('Board')
//   const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)
//   console.log(isModalNewTaskOpen)

//   return (
//     <div>
//       {/* Modal New Task */}
//       <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
//       {activeTab === "Board" && (<>
//         <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
//       </>)}
//     </div>
//   )
// }

// export default Project

"use client"

import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import ProjectHeader from "@/app/projects/ProjectHeader"
import BoardView from '../BoardView'

const Project = () => {
  const { id } = useParams() as { id: string };
  const [activeTab, setActiveTab] = useState('Board');
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;

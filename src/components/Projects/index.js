import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, from ML Models, Analytics to GenAI. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'GenAI/LLMs' ?
            <ToggleButton active value="GenAI/LLMs" onClick={() => setToggle('GenAI/LLMs')}>GenAI/LLMs</ToggleButton>
            :
            <ToggleButton value="GenAI/LLMs" onClick={() => setToggle('GenAI/LLMs')}>GenAI/LLMs</ToggleButton>
          }
          <Divider />
          {toggle === 'ML' ?
            <ToggleButton active value="ML" onClick={() => setToggle('ML')}>ML</ToggleButton>
            :
            <ToggleButton value="ML" onClick={() => setToggle('ML')}>ML </ToggleButton>
          }
          <Divider />
          {toggle === 'Analytics/ Statistics' ?
            <ToggleButton active value="Analytics/ Statistics" onClick={() => setToggle('AAnalytics/ Statistics')}>Analytics/ Statistics</ToggleButton>
            :
            <ToggleButton value="Analytics/ Statistics" onClick={() => setToggle('Analytics/ Statistics')}>Analytics/ Statistics</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
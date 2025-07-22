import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import assets from './assets/index.js'
import dataObj from './data.js'

function TimeLineCard({ th_Year, title, icon, CurrYear, HandleClick }) {



  return (
    <>

      <div className="TimeLineCard animate"
        style={{
          backgroundColor: (th_Year === CurrYear) ? '#083CA0' : '#FAFAFA',
          border: (th_Year === CurrYear) ? 'none' : '1px solid #d4d4d4',
          color: (th_Year === CurrYear) ? '#FAFAFA' : '#515151',
        }}
        onClick={() => { HandleClick(th_Year) }}
      >
        <div className="time_line_card_icon"
          style={{
            backgroundColor: (th_Year === CurrYear) ? '#083CA0' : '#FAFAFA',
          }}
        >
          <img
            src={icon}
            height="24px"
            width="24px"
            style={{
              filter: (th_Year === CurrYear) ? 'none' : 'saturate(0%) hue-rotate(0deg) brightness(23%)',
            }}
          ></img>
        </div>
        <div className="time_line_card_text">
          <div className="timeline_card_year">
            Year {th_Year}
          </div>
          <div className="timeline_card_title">
            {title}
          </div>
        </div>

      </div>

    </>
  )
}

function Highlight({ txt, icon }) {

  return (
    <>
      <div className="highlight">
        <img
          className='highlightimg'
          src={icon}
          height="24px"
          width="24px"
        ></img>
        <div className="hightext">
          {txt}
        </div>
      </div>
    </>
  )

}

function Heading({ txt }) {

  return (
    <>
      <div className="heading">
        {txt}
      </div>
    </>
  )
}

function ProjectCard({ description, thumbnail }) {

  return (
    <>
      <div className="main_project_card">
        <a href=''>
          <img
            src={thumbnail}
            className="project_card_img" />
        </a>
        <p className="project_card_text">
          {description}
        </p>
      </div>
    </>
  )
}

function ProjectList({ Project_arr }) {

  const card_container = useRef(null);


  function scrolleft() {
    card_container.current.scrollTo(0, 0);
  }





  return (
    <>
      <div className="projectlist">
        <div className="leftbutton">

          <img
            onClick={scrolleft}
            height="32px"
            width="32px"
            src={assets.left} />

        </div>

        <div className="projectcards"
          ref={card_container}
        >
          {
            Project_arr.map((project, index) => {
              return (
                <ProjectCard description={project.description} thumbnail={project.thumbnail} />
              )
            })

          }
        </div>
      </div>
    </>
  )
}

function Skilllist({ Skill_arr }) {


  return (
    <>
      <div className="skilllist">
        <Skillcard term={Skill_arr[0]} tumber={1} />
        <Skillcard term={Skill_arr[1]} tumber={2} />
        <Skillcard term={Skill_arr[2]} tumber={3} />
      </div>
    </>
  )
}

function Skillcard({ term, tumber }) {

  return (
    <>
      <div className="skillcard">
        <div className="skill_heading">
          <div className="term" >
            Term {tumber}
          </div>
          <div className="duration">
            4 month
          </div>
        </div>
        <div className="list">
          {
            term.map((skill) => {
              return (
                <div className="list_element"> {skill} </div>
              )
            })
          }
        </div>
      </div>
    </>
  )

}

function Detail({ CurrYear }) {


  return (
    <>

      <Heading txt={dataObj[CurrYear].Heading} />
      <p>{dataObj[CurrYear].infotxt}</p>
      <Highlight txt={dataObj[CurrYear].Highlight1} icon={assets.cube} />
      <ProjectList Project_arr={dataObj[CurrYear].Project_arr} />
      <Highlight txt={dataObj[CurrYear].Highlight2} icon={assets.star} />
      <Skilllist Skill_arr={dataObj[CurrYear].Skill_arr} />

    </>
  )

}

function App() {

  const [Year, setYear] = useState(2)
  const Animme = useRef(null)

  function HandleClick(Curr) {
    setYear(Curr)
  }

  return (
    <>
      <div className="card">
        <div className="navigate">
          <TimeLineCard th_Year={1} title="Foundation" icon={assets.foundation} CurrYear={Year} HandleClick={HandleClick} />
          <TimeLineCard th_Year={2} title="Development" icon={assets.idea} CurrYear={Year} HandleClick={HandleClick} />
          <TimeLineCard th_Year={3} title="Specialization" icon={assets.goal} CurrYear={Year} HandleClick={HandleClick} />
          <TimeLineCard th_Year={4} title="Industry Immersion" icon={assets.enterprise} CurrYear={Year} HandleClick={HandleClick} />
        </div>
        <div className="detail animate" ref={Animme}>
          <Detail CurrYear={Year} />
        </div>
      </div>
    </>
  )
}

export default App

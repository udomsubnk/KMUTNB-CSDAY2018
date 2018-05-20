import React from 'react'
import data from '../Utils/Projects.json'
import styled from 'styled-components'
import '../Styles/Table.css'

export default class Table extends React.Component {
  state = {
    projects: [],
    projectsByType: [],
    selectBtn: -1
  }

  componentDidMount() {
    const projects = this.changeData(data)
    this.setState({ 
      projects, 
      projectsByType: projects,
      selectBtn: -1
    })
  }

  changeData = (datas) => {
    const arrType = ['Web Apllication', 'ML & Data analytics', 'System(ระบบเบื้องหลัง)', 'Blockchain', 'Network & Security', 'Mobile Application', 'IOT']
    let newData = []
    datas.map((data,index) => {
      if(data.name) 
        newData.push({
          id: index,
          name: data.name, 
          type: data.type,
          typeId: arrType.indexOf(data.type)
        })
    })
    return newData
  }

  onScrollTop = () => {
    document.getElementById('table').scrollTo(0,0)
  }

  onSelectType = (type) => {
    if(type === 'all') {
      this.onScrollTop()
      this.setState({ 
        projectsByType: this.state.projects,
        selectBtn: -1
      })
    }else {
      this.onScrollTop()
      const selected = this.state.projects.filter((project) => project.typeId === type)
      this.setState({ 
        projectsByType: selected,
        selectBtn: type
      })
    }
  }

  render() {
    const { selectBtn, projectsByType} = this.state
    return (
      <div className="container-table">
        <div className="type-table">
          <div className="type-menu">
            <h4>Type</h4>
            <BtnType backgroudColor={selectBtn === -1}  onClick={() => this.onSelectType('all')} >All</BtnType>
            <BtnType backgroudColor={selectBtn === 0}  onClick={() => this.onSelectType(0)} >Web Apllication</BtnType>
            <BtnType backgroudColor={selectBtn === 1}  onClick={() => this.onSelectType(1)} >ML & Data analytics</BtnType>
            <BtnType backgroudColor={selectBtn === 2}  onClick={() => this.onSelectType(2)} >System</BtnType>
            <BtnType backgroudColor={selectBtn === 3}  onClick={() => this.onSelectType(3)} >Blockchain</BtnType>
            <BtnType backgroudColor={selectBtn === 4}  onClick={() => this.onSelectType(4)} >Network & Security</BtnType>
            <BtnType backgroudColor={selectBtn === 5}  onClick={() => this.onSelectType(5)} >Mobile Application</BtnType>
            <BtnType backgroudColor={selectBtn === 6} onClick={() => this.onSelectType(6)} >IOT</BtnType>
          </div>
        </div>
        <div className="main-table">
          <div className="wrap-table">
            <div id='table' className="project-table">
              { projectsByType.map((project) => (
                  <div key={project.id} className="project-list">
                    <p className="mgt10">{project.name}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const BtnType = styled.div`
  background: ${props => props.backgroudColor ? 'red': 'rgb(8, 8, 8)'};
  height: 50px;
  border: 2px solid #FFF;
  color:yellow;
  cursor: pointer;
  border-radius: 15px;
`
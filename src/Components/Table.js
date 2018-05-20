import React from 'react'
import data from '../Utils/Projects.json'
import styled from 'styled-components'
import '../Styles/Table.css'

export default class Table extends React.Component {
  state = {
    projects: [],
    projectsByType: [],
    selectBtn: -1,
    mobile: false
  }

  componentDidMount() {
    const projects = this.changeData(data)
    window.addEventListener('resize', this.toMobile)
    this.toMobile()
    this.setState({ 
      projects, 
      projectsByType: projects,
      selectBtn: -1
    })
  }

  toMobile = () => {
    if(window.innerWidth < 764) {
      this.setState({ mobile: true})
    }else {
      this.setState({ mobile: false})
    }
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
    if(type === -1) {
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
    const { selectBtn, projectsByType, mobile} = this.state
    return (
      <div className="container-table mgt-global-20">
        <div className="type-table">
          { mobile ?
            <select className="type-menu-mobile" onChange={(e) => this.onSelectType(parseInt(e.target.value))}>
              <option value={-1} onSelect={(e) => console.log(e)}>All</option>
              <option value={0}>Web Apllication</option>
              <option value={1}>ML & Data analytics</option>
              <option value={2}>System</option>
              <option value={3}>Blockchain</option>
              <option value={4}>Network & Security</option>
              <option value={5}>Mobile Application</option>
              <option value={6}>IOT</option>
            </select>
          :
            <div className="type-menu">
              <h2>หมวดหมู่</h2>
              <BtnType backgroudColor={selectBtn === -1}  onClick={() => this.onSelectType(-1)} >All</BtnType>
              <BtnType backgroudColor={selectBtn === 0}  onClick={() => this.onSelectType(0)} >Web Apllication</BtnType>
              <BtnType backgroudColor={selectBtn === 1}  onClick={() => this.onSelectType(1)} >ML & Data analytics</BtnType>
              <BtnType backgroudColor={selectBtn === 2}  onClick={() => this.onSelectType(2)} >System</BtnType>
              <BtnType backgroudColor={selectBtn === 3}  onClick={() => this.onSelectType(3)} >Blockchain</BtnType>
              <BtnType backgroudColor={selectBtn === 4}  onClick={() => this.onSelectType(4)} >Network & Security</BtnType>
              <BtnType backgroudColor={selectBtn === 5}  onClick={() => this.onSelectType(5)} >Mobile Application</BtnType>
              <BtnType backgroudColor={selectBtn === 6} onClick={() => this.onSelectType(6)} >IOT</BtnType>
            </div>
          }
        </div>
        <div className="main-table">
          <div className="wrap-table">
            <h2>ชื่อโครงงาน</h2>
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
  background: ${props => props.backgroudColor ? '#5AFEED' : 'rgba(0, 0, 0, 0.7);'};
  height: 50px;
  border: 2px solid #5AFEED;
  cursor: pointer;
  border-radius: 15px;
  color: ${props => props.backgroudColor ? 'black' : 'white;'};
  line-height: 50px;
`

const DropdownType = styled.option`
  background: ${props => props.backgroudColor ? '#5AFEED' : 'rgba(0, 0, 0, 0.7);'};
  height: 50px;
  border: 2px solid #5AFEED;
  color: ${props => props.backgroudColor ? 'black' : 'white;'};
  cursor: pointer;
  border-radius: 15px;
  line-height: 50px;
`
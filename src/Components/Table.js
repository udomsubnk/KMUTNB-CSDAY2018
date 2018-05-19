import React from 'react'
import data from '../Utils/Projects.json'
import '../Styles/Table.css'

export default class Table extends React.Component {
  state = {
    projects: [],
    projectsByType: [],
  }

  componentDidMount() {
    const projects = this.changeData(data)
    this.setState({ 
      projects, 
      projectsByType: projects 
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
      this.setState({ projectsByType: this.state.projects})
    }else {
      this.onScrollTop()
      const selected = this.state.projects.filter((project) => project.typeId === type)
      this.setState({ projectsByType: selected })
    }
  }

  render() {
    return (
      <div className="container-table">
        <div className="type-table">
          <div className="type-menu">
            <h4>Type</h4>
            <button type="button" onClick={() => this.onSelectType('all')} className="btn-type">All</button>
            <button type="button" onClick={() => this.onSelectType(0)} className="btn-type">Web Apllication</button>
            <button type="button" onClick={() => this.onSelectType(1)} className="btn-type">ML & Data analytics</button>
            <button type="button" onClick={() => this.onSelectType(2)} className="btn-type">System</button>
            <button type="button" onClick={() => this.onSelectType(3)} className="btn-type">Blockchain</button>
            <button type="button" onClick={() => this.onSelectType(4)} className="btn-type">Network & Security</button>
            <button type="button" onClick={() => this.onSelectType(5)} className="btn-type">Mobile Application</button>
            <button type="button" onClick={() => this.onSelectType(6)} className="btn-type">IOT</button>
          </div>
        </div>
        <div className="main-table">
          <div className="wrap-table">
            <div id='table' className="project-table">
              { this.state.projectsByType.map((project) => (
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
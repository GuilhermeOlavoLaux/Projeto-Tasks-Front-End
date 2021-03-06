import React from 'react'
import InspectModal from './InspectTaskModal'
import EditModal from './EditTaskModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

interface ITask {
  task: {
    _id: number
    name: string
    description: string
  }
  handleTaskDelete: any
  changeName: any
  changeDescription: any
}

export default class Task extends React.Component<ITask> {
  handleClick(id: any) {
    this.props.handleTaskDelete(id)
  }

  render() {
    return (
      <div className='task-container'>
        <div className='task-info-container'>
          <h2>{this.props.task.name}</h2>
          <p>{this.props.task.description}</p>
        </div>

        <div className='icons-container'>
          <InspectModal
            text={
              <FontAwesomeIcon icon={faEye} size='1x' color='#7ae30b' className='icon-button' />
            }
            task={this.props.task}
          ></InspectModal>

          <EditModal
            text={
              <FontAwesomeIcon icon={faEdit} size='1x' color='#7ae30b' className='icon-button' />
            }
            task={this.props.task}
            changeName={this.props.changeName}
            changeDescription={this.props.changeDescription}
          ></EditModal>

          <FontAwesomeIcon
            icon={faTrashAlt}
            size='1x'
            color='#7ae30b'
            className='icon-button'
            onClick={() => this.handleClick(//@ts-ignore
               this.props.task._id)}
          />
        </div>
      </div>
    )
  }
}

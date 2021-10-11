import React from 'react'
import Task from './Task'
import AddTask from './AddTaskModal'
interface Props {}

interface Itask {
  id: number
  name: string
  description: string
}

interface State {
  tasksList: Itask[]
}

export default class Tasks extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      tasksList: [
        {
          id: 1,
          name: 'Guilherme',
          description: 'Aprender TypeScript'
        },
        {
          id: 2,
          name: 'Guilherme2',
          description:
            'Aprender Desenvolvimento Web e aprimorar minhas habilidades com React Aprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com React'
        },
        {
          id: 3,
          name: 'Guilherme3',
          description:
            'Aprender Desenvolvimento Web e aprimorar minhas habilidades com React Aprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com ReactAprender Desenvolvimento Web e aprimorar minhas habilidades com React'
        }
      ]
    }
    this.handleTaskDelete = this.handleTaskDelete.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeDescription = this.changeDescription.bind(this)
    this.saveNewTask = this.saveNewTask.bind(this)
  }

  saveNewTask(id: string, name: string, description: string){
    const newTask = {id, name, description}
    newTask.id = id
    newTask.name = name
    newTask.description = description

    const actualTaskList = [...this.state.tasksList, newTask]
    this.setState(
      //@ts-ignore
      {tasksList: actualTaskList})
  }

  handleTaskDelete(taskId: number) {
    const newList = this.state.tasksList.filter(
      (task: any) => task.id !== taskId
    )
    this.setState({ tasksList: newList })
  }

  changeName(id: any, newName: string) {
    this.state.tasksList.forEach((element) => {
      if (element.id === id) {
        element.name = newName
      }
    })
    this.setState({ tasksList: this.state.tasksList })
  }

  changeDescription(id: number, newDescription: string) {
    this.state.tasksList.forEach((element) => {
      if (element.id === id) {
        element.description = newDescription
      }
    })
    this.setState({ tasksList: this.state.tasksList })
  }

  render() {
    return (
      <div className='tasks-container'>
        <div className='title-button'>
          <h1>Minhas Tarefas</h1>
          <button className='green-button'>
            {
              <AddTask
                text='Adicionar'
                task={this.state.tasksList}
                addTask ={this.saveNewTask}
              ></AddTask>
            }
          </button>
        </div>

        {this.state.tasksList.map((task) => (
          <Task
            key={task.id}
            task={task}
            handleTaskDelete={this.handleTaskDelete}
            changeName={this.changeName}
            changeDescription={this.changeDescription}
          />
        ))}
      </div>
    )
  }
}

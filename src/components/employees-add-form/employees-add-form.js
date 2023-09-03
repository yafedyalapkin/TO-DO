import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component {

    constructor(props) {
        super(props);

        this.state = { // 2. создаю объект state с двумя значениями, которые надо ввести в форму
            name: '',
            salary: ''
        }
    }

    // onValueChange = (e) => { // 3. создаю метод который будет менять состояние свойств name и salary, передаю событие в качестве арга
    //     this.setState({ // пишу без колбэка потому что не завишу от прошлого стейта
    //         [e.target.name]: e.target.value // 5. name или salary = то что ввел юзер (в 1й или 2й инпут)
    //     })
    // }

    // или

    onValueName = (e) => { // 3. создаю метод который будет менять состояние свойства name, передаю событие в качестве арга
        this.setState({ // пишу без колбэка потому что не завишу от прошлого стейта
            name: e.target.value // 5. name = то что ввел юзер 
        })
    }

    onValueSalary = (e) => { // 3. создаю метод который будет менять состояние свойства salary, передаю событие в качестве арга
        this.setState({ // пишу без колбэка потому что не завишу от прошлого стейта
            salary: e.target.value // 5. salary = то что ввел юзер 
        })
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
          const newData = [...data]
          const newObj = {name: name, salary: salary}
    
          return {
            data: newData.push(newObj)
          }
        })
      }

    render() {
        const {name, salary} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">

                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        // name="name"  // 4. создаю атрибуты с одинаковым названием, но с разными значениями
                        value={name} // 6. помещаю в атрибут актуальное значение name из стейта
                        onChange={this.onValueName} /> {/* // 1.  вешаю на input обработчик каждого ввода, который вызывает метод */}

                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        // name="salary" // 4. создаю атрибуты с одинаковым названием, но с разными значениями
                        value={salary} // 6. помещаю в атрибут актуальное значение salary из стейта
                        onChange={this.onValueSalary} /> {/* // 1.  вешаю на input обработчик каждого ввода, который вызывает метод */}

                    <button type="submit"
                            className="btn btn-outline-light" onSubmit={this.addItem(name, salary)}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
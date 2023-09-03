import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { // создаю объект стейт и передаю туда данные, чтобы их можно было менять

      data: [ // 1. Создаю массив с объектами который типа приходит с сервера
        {name: 'Федя', salary: 800, id: 1},
        {name: 'Даша', salary: 3000, id: 2},
        {name: 'Маша', salary: 5000,  id: 3},
      ]
    }
  }

  deleteItem = (id) => { // создаю метод, который будет удалять сотрудника по клику

    this.setState(({data}) => { // буду менять стейт 

      // const index = data.findIndex(item => item.id === id); // в переменную кладу индекс того item который надо удалить (если item.id == id, которое придет как аргумнт - вернет индекс этого item)
      // const before = data.slice(0, index) // в переменную before копирую всю дату с 0 индекса itema до того на который нажали
      // const after = data.slice(index + 1) // в переменную after копирую всю дату с след itema, на который нажали
      // const newArr = [...before, ...after] // соединяю все itemы которые остались
      // return {
      //   data: newArr
      // }

      // или

      return {
        data: data.filter(item => item.id !== id) // если айди itemа не совпадает с айди itemа на который нажали - все остальные айтемы велкоме
      }

    })
  }






  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList data={this.state.data} onDelete={this.deleteItem} /> {/* 2. в компонент работников передаю в качестве атрибута пропс (этот массив). теперь этот массив с данными можно использовать внутри компонента */}
          <EmployeesAddForm data={this.state.data} />
      </div>
    );
  }
}

export default App;

// 





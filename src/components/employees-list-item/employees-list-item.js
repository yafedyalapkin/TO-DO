import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component { // 6. создаю функ, которая пойдет в employees-list.js. передаю  в качестве параметров эти пропсы 
    constructor(props) {
        super(props);

        this.state = { // 2. создаю стейт со свойствами
            increase: false,
            like: false
        }
    }
    
    onIncrease = () => { // 3. пишу функ которая будет менять состояние свойства increase
        this.setState(({increase}) => ({ // тк колбэк принимает в себя всегда объект state, можно деструктуризировать нужное мне свойство
            increase: increase ? false : true // чтобы здесь не прописывать state.increase
        }))
    }
    classLike = () => { // 3. пишу функ которая будет менять состояние свойства like
        this.setState(({like}) => ({ 
            like: like ? false : true
        }))
    }


    render() {
        const {name, salary, onDelete} = this.props; // деструктуризировал пропсы
        const {increase, like} = this.state; // деструктуризировал объект state

        let classYellow = "list-group-item d-flex justify-content-between"; // 4. вынес в отдельную переменную классы из html-структуры  
        if (increase) { 
            classYellow += ' increase'; // 5. если стейт increase тру - добавляю нью класс
            
        } 
        if (like) { // 5. если стейт like тру - добавляю нью класс
            classYellow += ' like';
        }



        return (
            <li className={classYellow} > {/* // 6. вставляю эти классы в html-структуру */}
                <span className="list-group-item-label" onClick={this.classLike}>{name}</span> {/* // 1. вешаю на элемент обработчик кликов */}
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie" onClick={this.onIncrease}></i> {/* // 1. вешаю на элемент обработчик кликов */}
                    </button>

                    <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;
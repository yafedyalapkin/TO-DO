import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';



const EmployeesList = ({data, onDelete}) => { // 3. создаю функ, которая пойдет в app.js. передаю в качестве параметра тот массив

    const elements = data.map(item => { // 4. для каждого элемента в этом массиве возвращаю такой вот компонент с атрибутами (пропсами)
        return (
            <EmployeesListItem 
                key={item.id} 
                name={item.name} 
                salary={item.salary}
                onDelete={() => onDelete(item.id)} /> // засунуть в атрибут функ можно только так
            // или
            // <EmployeesListItem {...item}/>
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}  {/* 5. передаю эти компоненты в то что вернет EmployeesList */}
        </ul>
    )
}

export default EmployeesList; 
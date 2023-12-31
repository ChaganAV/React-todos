import { Component } from "react";
import TodoList from './TodoList';

const date1 = new Date(2023,9,19, 14, 5);
const date2 = new Date(2023,9,19, 15, 23);

const initialData = [
  { title: 'Изучить React',  // ------------------------------1
    desc: 'Да поскорее!',
    image: '',
    done: true,  // ------------------------------------------2
    createdAt: date1.toLocaleString(),
    key: date1.getTime()
  },
  {
    title: 'Написать первое React-приложение',
    desc: 'Список запланированных дел',
    image: '',
    done: false,
    createdAt: date2.toLocaleString(),
    key: date2.getTime()
  }
];


export default class App extends Component{ // ----------------3
  constructor(props){                        // ---------------4
    super(props); 
    this.data = initialData;
    this.setDone = this.setDone.bind(this);
  }

  setDone(key){
    const deed = this.data.find((current) => current.key === key);
    if(deed){
      deed.done = true;
    }
  }

  render(){   // ----------------------------------------------7
    return (
      <div>
        <nav className="navbar is-light">
          <div className="navbar-brand">
            <span className="navbar-item is-uppercase">
              Todos
            </span>
          </div>
        </nav>
        <main className="content px-6 mt-6">
          <TodoList list={this.data} setDone={this.setDone} />
        </main>
      </div>
    );

  }
}

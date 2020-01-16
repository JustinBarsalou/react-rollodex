// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
    newRollo:[],
    }
  }
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
    .then(response => response.json())
    .then(data => this.setState({newRollo: data}));

  }
  
  
  render() {
    // This does something while it loads data

    console.log(this.state.newRollo.results)
    // Main Render
    return (
      <div className="App">
      Rollodex

      <ul>
          {this.state.newRollo.map(person => {
            <li>
              {person.name}
            </li>
          }
        )
      }
      </ul>

      </div>
      
      )
    }
  }


export default App;
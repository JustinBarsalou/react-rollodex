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
// import Button from './App2'
import Person from './Person'




class App extends Component {
  constructor(props){
    super(props);
    this.state={
    newRollo:[],
    }
    // this.isClicked = this.isClicked.bind(this)
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
    .then(response => response.json())
    .then(data => this.setState({newRollo: data.results}));

  }

  // isClicked(){
  //   this.setState(state => ({
  //     isClicked: !state.isClicked
  //   }))
  // }

  
  
  render() {
    // This does something while it loads data

    console.log(this.state.isClicked)
    // Main Render
    return (
      <div className="Main-App">
          {this.state.newRollo.map((posts) => (
            <div>
              <Person 
              firstName={posts.name.first} 
              lastName={posts.name.last} 
              thumbnail={posts.picture.thumbnail}
              age={posts.dob.age}
              phone={posts.cell}
              />

            {/* <h1 key='1'>{posts.name.first + ' ' + posts.name.last}</h1> 

            <img src = {posts.picture.thumbnail}></img> */}

            {/* <Button /> */}
            {/* <button onClick={this.isClicked}>More Info</button> */}
            
            </div>
          ))}
      </div>
      
      )
    }
  }


export default App;
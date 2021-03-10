function List(props){
  return (
    <ul>
      List
    </ul>
  )
}

class Todo extends React.Component {
  render(){
    return(
      <div>
        Todos
        <List />
      </div>
    )
  }
}

class Goals extends React.Component {
  render(){
    return(
      <div>
        Goals
        <List />
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return(
      <div>
        <Todos />
        <Goals />
      </div>
    )
  }
}

ReactDOM.render(
  <App />
  document.getElementById('app')
)

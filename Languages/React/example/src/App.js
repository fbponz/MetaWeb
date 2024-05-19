import './App.css';

function Header(props){
  return <h1>Hello World, {props.title}</h1>;
}
function App(props) {
  return <Header title={props.title} />;
}

export default App;

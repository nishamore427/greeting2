import logo from './logo.svg';
import './App.css';

function App() {
  let curDate=new Date();
  curDate=curDate.getHours();
  let greeting='';
  if(curDate>=1 && curDate<12){
    greeting="Good Morning";
  }else if(curDate>=12 && curDate<17){
    greeting="Good Afternoon";
  }else if(curDate>=17 && curDate<21){
    greeting="Good Evening";
  }else{
    greeting="Good Night";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Mam, {curDate}{greeting}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

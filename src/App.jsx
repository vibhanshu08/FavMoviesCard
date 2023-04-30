// import logo from './logo.svg';

// component in react
// props in react
import './App.css';
import Card from "./Card"
import $data from "./$data"
import './card.css';
function App() {
  return (
    <div>
      <div  className="head" >
        <h1>My Favorite Movies</h1>
        <div className='filter'>
        <input className='in' placeholder='Type Name of Industry' name='chos'/>
        <button   className='headbtn'>Filter</button>
        </div>
      </div>
      <div className='main'>
       <Card name={$data[0].$name}  link={$data[0].$imglink} title={$data[0].$title} hlink={$data[0].$link} />
       <Card name={$data[1].$name}  link={$data[1].$imglink} title={$data[1].$title} hlink={$data[1].$link}/>
       <Card name={$data[2].$name}  link={$data[2].$imglink} title={$data[2].$title} hlink={$data[2].$link}/>
       <Card name={$data[3].$name}  link={$data[3].$imglink} title={$data[3].$title} hlink={$data[3].$link}/>
       <Card name={$data[4].$name}  link={$data[4].$imglink} title={$data[4].$title} hlink={$data[4].$link}/>
       <Card name={$data[5].$name}  link={$data[5].$imglink} title={$data[5].$title} hlink={$data[5].$link}/>

       </div>
    </div>
  );
}

export default App;

import './App.css';
import Hero from './component/Hero'
import Nav from './component/Nav'
import Card from './component/Card'
import Data from './Data'


function App() {
  const details = Data.map((info)=> {
    return (
      <Card
        id = {info.id}
        item = {info}
      />
    )
  })

  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <section className='flex'>
     {details}

     </section>
    </div>
  );
}

export default App;


import React from "react"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id:1,
          title: "Chair grey",
          img: '',
          desc: 'avilable now',
          category: 'chairs',
          price: '49.99'
        },
        {
          id:2,
          title: "Chair grey",
          img: '',
          desc: 'avilable now',
          category: 'chairs',
          price: '49.99'
        },
        {id:3,
          title: "Chair grey",
          img: '',
          desc: 'avilable now',
          category: 'chairs',
          price: '49.99'
        },
        {
      id:4,
          title: "Chair grey",
          img: '',
          desc: 'avilable now',
          category: 'chairs',
          price: '49.99'
        },
      ]
    }
  }
  render() {
  return (
    <div className="wrapper">
      <Header />
      <Items items={this.state.items}/>
      <Footer />
    </div>
  )
  }
}


export default App;

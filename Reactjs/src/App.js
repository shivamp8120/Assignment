
import React,{Component} from "react";
import axios from "axios"
import './App.css';

let result
let lastIndex=10;
let rendercount=0;
let i=0;

class App extends Component{
  state={ photos: []};
  

async componentDidMount() {

   result =await axios.get("https://jsonplaceholder.typicode.com/photos");
  this.setState({photos:result.data.slice(0,lastIndex)});
  window.addEventListener('scroll', this.handleScroll, { passive: true })


}
componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll)
}

  handleScroll = () => 
  {
    i++;

    if (i >= 9)
    {
      lastIndex = lastIndex + 10;
      this.setState({ photos: result.data.slice(0, lastIndex) });
      i = 0;
      console.log(lastIndex, i);
    }
  }


  render() {
rendercount=rendercount+1;
console.log("rendering",rendercount)
    return (


      <div className="container">
        
          {this.state.photos.map((photos, index) => 
          
            <img src={photos.thumbnailUrl} alt="gooogle" />
          )}
          
        
      </div>

    );

  }
}




export default (App) ;

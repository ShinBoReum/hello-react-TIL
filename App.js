import React, {Component} from 'react';
import Scrollbox from './Scrollbox';


class App extends Component {
  render() {
    return (
      <div>
        <Scrollbox ref={(ref)=>this.Scrollbox=ref}/>
        <button onClick={()=>this.Scrollbox.srcollToBottom()}>
          toBottom
        </button>
        <button onClick={()=>this.Scrollbox.srcollToTop()}>
          toTop
        </button>
      </div>
    );
  }
}

export default App;

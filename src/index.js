import React from "react";
import ReactDOM from "react-dom";
import Carousel from './Carousel';
import "./styles.css";

class App extends React.Component {


  render() {

    const items = ['one', 'two', 'three', 'four', 'five']

    const setting = {
      dragSpeed: 1.25,
      itemWidth: 300,
      itemHeight: 180,
      itemSideOffsets: 15,
    }

    const itemStyle = {
      width: `${setting.itemWidth}px`,
      height: `${setting.itemHeight}px`,
      margin: `0px ${setting.itemSideOffsets}px`
    }

    return(
      <div className='container'>
        <h1>Drag the carousel along the x-axies...</h1>
        <Carousel _data={items} {...setting}>
          {
            items.map((i, _i) => (
              <div
                key={_i}
                className='item'
                style={{ ...itemStyle }}>
                <p>{i}</p>
              </div>
            ))
          }
        </Carousel>
      </div>
    )
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

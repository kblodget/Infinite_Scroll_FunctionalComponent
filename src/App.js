import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { loremIpsum } from "lorem-ipsum";
import Collapsible from "react-collapsible";
import "./styles.css";
import logo from "./logo.svg";

const rowCount = 1000;

//class App extends Component {
const App = () => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const list = Array(rowCount)
    .fill()
    .map((val, idx) => {
      return {
        id: idx,
        name: "John Doe",
        image: "https://via.placeholder.com/10/FFFF00/FFFF00",
        text: loremIpsum({
          count: 1,
          units: "sentences",
          sentenceLowerBound: 4,
          sentenceUpperBound: 50
        })
      };
    });
  //}

  const renderRow = item => {
    return (
      <div key={item.id} className="row">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="content">
          <div>{item.name}</div>
          <Collapsible
            transitionTime={400}
            trigger="Open Dialog"
            triggerWhenOpen="Plus you can change the trigger text when I'm open too"
          >
            <div>{item.text}</div>
          </Collapsible>
        </div>
      </div>
    );
  };
  const handleInfiniteOnLoad = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Details List</h1>
      </header>
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={handleInfiniteOnLoad}
        hasMore={!loading && hasMore}
        useWindow={false}
      >
        <div className="list">{list.map(renderRow)}</div>
      </InfiniteScroll>
    </div>
  );
};
export default App;


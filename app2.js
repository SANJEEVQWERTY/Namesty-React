/*

  <div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2> I am h2 tag</h2>
    </div>
  </div>

*/
const parent = React.createElement("div" , {id:"parent"},
    React.createElement("div",{id:"child"},
        // If more than one element as like sibling then data are store in array format
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2",{},"I am h2 tag")]
    )
);

console.log(parent);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
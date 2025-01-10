          const heading = React.createElement("h1",{id : "heading"},"Hello World from React");

          console.log(heading)    // This is object not h1 tage

          const root = ReactDOM.createRoot(document.getElementById("root"));

          root.render(heading);      // this render method is used to take object and convert to h1 tag and put it up to DOM

          
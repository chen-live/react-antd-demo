import React, { /*useState,*//*useEffect,*/ useContext} from "react"
// useState
// export default function (props) {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>you clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>click</button>
//     </div>
//   )
// }
// useEffect
//  function (props) {
//   const [count, setCount] = useState(0);
//   useEffect(()=>{
//     document.title=`you use ${count} times`
//   })
//   return (
//     <div>
//       <p>you clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>click</button>
//     </div>
//   )
// }
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);
console.log(ThemeContext);
export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

 function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
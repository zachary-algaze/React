import './app.css'

var name = prompt("What is your name? Please type your name in: ");
var header_output = <h1>Hello {name}</h1>

export default function App() {
  return (
    <main>
      {header_output}
      React ⚛️ + Vite ⚡ + Github
    </main>
  )
}

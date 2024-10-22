import './app.css'

var name = prompt("What is your name? Please type your name in the box below: ");
var header_output = <h1>Hello {name}</h1>;
var currentYear = new Date().getFullYear();
var footer_output = <h5>Copyright {currentYear} </h5>;

export default function App() {
  return (
    <main>
      {header_output}
      React ⚛️ + Vite ⚡ + Github
      {footer_output}
    </main>
  )
}

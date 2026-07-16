import Card from "./Props/Card"
function App() {
  const students = [
    {name:'binod', address:'npl', roll:1},
    {name:'ram', address:'ind', roll:10},
    {name:'shyam', address:'usa', roll:22},
  ]
  return (
    <div>
      <div><h1>class 8 data</h1></div>
      {
        students.map((std) => (
          <div key={std.roll}>
        <Card name={std.name} address={std.address} roll={std.roll} />
        <br />
      </div>
        ))
      }
    </div>
  )
}

export default App
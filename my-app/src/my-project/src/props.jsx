import Card from "./component.jsx/card";

function Prop() {
  let myObj = {
    username: "binod",
    age: 18,
  };
  let newArr = [1, 2, 3, 4];

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="bg-amber-400 text-3xl font-bold ">Tailwind test</h1>
      <span className="bg-green-700 text-amber-50 rounded-xl">hello world</span>
      <br />
      <Card
        username="chai"
        email="hello@def"
        someObj={myObj}
        arr={newArr}
      />{" "}
      <br /> //using props
      <Card username='binod' email="user@123" />
    </div>
  );
}
export default Prop;

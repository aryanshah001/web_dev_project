import PracComp from "./component.jsx/pracComp"
function Properties () {
    return(
        <>
            <h1>hello everyone</h1>
            <h2 className="mb-5">Trying using React props</h2>
            <PracComp song1 = 'saiyaan' song2='rama' />
            <PracComp />
        </>
    )
}
export default Properties
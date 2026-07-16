function usestate2() {
    let [counter , setCounter] = usestate(8)

    const add = () => {             //Here this doesnt update value by 3 
        setCounter(counter+1)
        setCounter(counter+1)
        setCounter(counter+1)
    }
  return (
    <div>

    <button
    onClick={add}
    >ADD = {counter} </button>

    </div>
  )
}

export default usestate2
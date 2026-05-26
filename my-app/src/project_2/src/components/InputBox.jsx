function InputBox(){
    return(
        <>
            <div className="flex justify-center  w-full fixed top-12 ">
                <div className="bg-gray-400 px-12 py-8">
                    <h1 
                    className="text-3xl flex justify-center mb-6 bg-amber-400 py-3"
                    >coverting currency</h1>
                    <label 
                className="text-3xl"
                htmlFor="from">from :- </label>

                
                <input 
            type="number"  
            id="from" 
            className="border-black border-2  ml-1"
            />

            <button
            className="ml-4 bg-black text-white px-3 text-2xl mr-4"
            >swap</button>

            
            <label 
            htmlFor="to"
            className="text-3xl"
            >To :- </label>

            <input 
            type="number"
            id="to" 
            className="border-black border-2 ml-1  " 
             />
                </div>

            </div>
        </>
    )
}
export default InputBox
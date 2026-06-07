import { useId } from "react"
function InputBox({  //Destructuring
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,
    classname = '',
})
{
    const amountInputId = useId()

    return(
        <>
            <div className={`bg-white p-3 rounde-lg text-sm flex ${classname}`}>
                <div className="w-1/2">
                <label 
                className="text-black/40 mb-2 inline-block"
                htmlFor={amountInputId}
                >
                {label}
                </label>
                    
                    <input 
                    id={amountInputId}
                    type="number" 
                    id="num" 
                    className="outline-none w-full bg-transparent py-1.5"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value)) } //checker if onamountchange exist or not. save from crash
                    />
                </div>

                <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select 
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-0"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
                >
                    {
                        currencyOptions.map((currency) => (     
                            <option key={currency} value={currency}>    //must use key while using loop in jsx
                                {currency}
                            </option>
                        ))
                    }

                </select>
                    
                </div>

            </div>
        </>
    )
}
export default InputBox
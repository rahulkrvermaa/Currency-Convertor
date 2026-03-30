import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white/5 backdrop-blur-xl border border-white/10 
                  p-4 rounded-2xl text-sm flex gap-4 
                  transition-all duration-300 hover:border-blue-400/40 
                  hover:shadow-lg hover:shadow-blue-500/10 ${className}`}
    >
      {/* Left Side */}
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-slate-400 mb-2 inline-block text-xs tracking-wide"
        >
          {label}
        </label>

        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-2 
                     text-white placeholder-slate-500
                     border-b border-white/10 
                     focus:border-blue-400 
                     transition-all duration-200
                     cursor-pointer disabled:cursor-not-allowed"
          type="number"
          placeholder="Enter amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-slate-400 mb-2 w-full text-xs tracking-wide">
          Currency
        </p>

        <select
          className="rounded-xl px-3 py-2 
                     bg-zinc-800 text-white 
                     border border-white/10 
                     hover:border-violet-400 
                     focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20
                     outline-none transition-all duration-200
                     cursor-pointer disabled:cursor-not-allowed"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((Currency) => (
            <option key={Currency} value={Currency} className="bg-zinc-900">
              {Currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

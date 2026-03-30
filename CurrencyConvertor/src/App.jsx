import { useState } from "react";
import useCurrencyInfo from "./Customhooks/useCurrencyInfo";
import { InputBox } from "./Components";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Swap currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Convert currency
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-slate-950 to-black flex items-center justify-center p-6 overflow-hidden relative">
      {/* Subtle animated background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(at_70%_70%,rgba(139,92,246,0.12),transparent_50%)] animate-pulse delay-700" />

      <div className="w-full max-w-md relative z-10">
        {/* Main Card */}
        <div className="bg-zinc-900/80 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:shadow-blue-500/10">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-blue-500 to-violet-600 rounded-2xl mb-4 shadow-lg shadow-blue-500/30 animate-pulse">
              💱
            </div>
            <h1 className="text-4xl font-bold bg-linear-to-r from-white via-blue-100 to-white bg-clip-text text-transparent tracking-tighter">
              Currency Converter
            </h1>
            <p className="text-slate-400 mt-2 text-sm font-light">Fast • Accurate • Beautiful</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From Input */}
            <div className="mb-8 transition-all duration-300 hover:scale-[1.01]">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Animated Swap Button */}
            <div className="relative flex justify-center -my-6 z-20">
              <button
                type="button"
                onClick={swap}
                className="group bg-zinc-800 hover:bg-zinc-700 border-4 border-zinc-900 hover:border-blue-500 
                           text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-medium 
                           transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl 
                           hover:shadow-blue-500/30 active:shadow-inner"
              >
                <span className="text-2xl transition-transform duration-300 group-hover:rotate-180">
                  ⇄
                </span>
                <span className="uppercase tracking-[2px] text-xs">Swap</span>
              </button>
            </div>

            {/* To Input */}
            <div className="mt-8 mb-10 transition-all duration-300 hover:scale-[1.01]">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert Button with Animation */}
            <button
              type="submit"
              className="w-full relative overflow-hidden group bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 
                         hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 
                         text-white font-semibold text-lg py-4 rounded-2xl shadow-2xl 
                         shadow-indigo-500/40 transition-all duration-300 active:scale-[0.97] 
                         flex items-center justify-center gap-3"
            >
              <span className="relative z-10 flex items-center gap-2">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-slate-500 text-xs tracking-widest">
              REAL-TIME EXCHANGE RATES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
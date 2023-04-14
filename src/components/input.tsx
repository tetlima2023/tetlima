import { InputHTMLAttributes } from "react"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = ({ label, ...props }: IInput) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-2xl font-bold pl-2" htmlFor="input">{label}</label>
      <input className="text-2xl w-full bg-gray-300 text-black pl-2 outline-none border-4 rounded-lg border-slate-600 transition-all focus-within:border-white focus-within:bg-white " type="text" {...props} />
    </div>
  )
}
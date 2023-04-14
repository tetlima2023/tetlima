import { ButtonHTMLAttributes, ReactNode } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isActive: boolean
}

export const Button = ({ children, isActive, ...props }: IButton) => {
  return (
    <>
      <button disabled={isActive} className="bg-white transition-all border-2 border-black text-black text-lg font-bold py-2 rounded-lg cursor-pinter disabled:bg-gray-500 disabled:text-white disabled:cursor-not-allowed" {...props}>{children}</button>
    </>
  )
}
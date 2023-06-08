// components/Button.tsx
import { MouseEvent, ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-casal text-white font-bold py-2 px-4 rounded hover:bg-carmine transition duration-300 ease-in-out"
    >
      {children}
    </button>
  )
}

export default Button

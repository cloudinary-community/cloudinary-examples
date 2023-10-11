import { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className = '', color = 'slate', onClick }: ButtonProps) => {
  let buttonColor = 'text-white bg-slate-600 hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-400';

  if ( color === 'red' ) {
    buttonColor = 'text-white bg-red-600 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400'
  }

  return (
    <button onClick={onClick} className={`inline-block rounded py-2.5 px-6 text-sm font-bold uppercase ${buttonColor} ${className}`}>
      { children }
    </button>
  )
}

export default Button;
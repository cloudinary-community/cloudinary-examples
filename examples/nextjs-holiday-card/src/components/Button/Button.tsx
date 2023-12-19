import { MouseEventHandler } from 'react';
import { cn } from '@/lib/util';

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const colors: Record<string, string> = {
  primary: 'text-white bg-primary hover:bg-primary',
  red: 'text-white bg-red-600 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400',
  slate: 'text-white bg-slate-600 hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-400'
}

const Button = ({ children, className, color = 'primary', onClick, ...rest }: ButtonProps) => {
  return (
    <button onClick={onClick} className={cn('inline-block rounded py-2.5 px-6 text-sm font-bold uppercase',  colors[color], className)} {...rest}>
      { children }
    </button>
  )
}

export default Button;
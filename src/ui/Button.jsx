import { cn } from '../libs/cn';

const Button = ({ children, className }) => {
    return <button className={cn('btn', className)}>{children}</button>;
};

export default Button;

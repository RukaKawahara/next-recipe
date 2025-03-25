import styles from './Text.module.css';

type TextProps = {
  className?: string;
  children: string;
}

export default function Text({className, children}:TextProps) {
  return (
    <p className={className ? styles[className] : ''}>{children}</p>
  );
}
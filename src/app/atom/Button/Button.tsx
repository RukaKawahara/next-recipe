import Link from 'next/link';
import style from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void,
  href?: string;
};

export default function Button({children, onClick, href}:ButtonProps) {
  // hrefが指定されていたらLinkにする
  if(href){
    return (
      <Link className={style.button} href={href}>{children}</Link>
    );
  }
  // 通常のボタン
  return (
    <button className={style.button} onClick={onClick}>{children}</button>
  );
}
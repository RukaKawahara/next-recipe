import Text from '@/app/atom/Text/Text';
import styles from './Card.module.css';
import Link from "next/link";
import Heading from '@/app/atom/Heading/Heading';
import ReactMarkdown from 'react-markdown';

type CardProps = {
  link: string;
  image: string;
  title: string;
  date: string;
}

export default function Card({link, image, title, date}:CardProps) {
  return (
    <article className={styles['card-wrapper']}>
      <Link href={link} className={styles['card-link']}>
        <img src={image} />
        <h3 className={styles['card-heading']}>{title}</h3>
        <small className={styles['card-date']}>{date}</small>
      </Link>
    </article>
  );
}
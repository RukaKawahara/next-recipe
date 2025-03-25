import React, { JSX } from 'react';
import styles from './Heading.module.css';

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
};

export default function Heading({ level = 1, children, className}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={className ? styles[className] : ''}>{children}</Tag>
}
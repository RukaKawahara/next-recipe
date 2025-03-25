import styles from "./Icon.module.css";

type IconProps = {
  className?: string;
  image: string;
}

export default function Icon({className, image}: IconProps) {
  return (
    <>
      <img className={className ? styles[className] : ''} src={image} />
    </>
  );
}
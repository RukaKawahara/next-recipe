import styles from './Profile.module.css';
import Icon from '@/app/atom/Icon/Icon';
import Heading from '@/app/atom/Heading/Heading';
import Text from '@/app/atom/Text/Text';

type ProfileProps = {
  image: string;
  name : string;
  description: string;
}

export default function Profile({image, name, description}: ProfileProps) {
  return (
    <div className={styles.wrapper}>
      <Icon className='profile-icon' image={image}/>
      <Heading className='profile-name' level={1}>{name}</Heading>
      <Text className='profile-description'>{description}</Text>
    </div>
  );
}
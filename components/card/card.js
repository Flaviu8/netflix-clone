import Image from 'next/image';
import styles from './card.module.css';
import { useState } from 'react';
import { motion } from "framer-motion";
import cls from 'classname';



const Card = (props) => {
    const {imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80", 
    size= "medium",
    id
    
 } = props;

    const [imgSrc, setImgSrc] = useState(imgUrl);
    
    const classMap = {
      large: styles.lgItem,
      medium: styles.mdItem,
      small: styles.smItem,
    };
const handleOnError = () => {
   console.log("hii error")
   setImgSrc("https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1718&q=80");
};
const scale = id === 0 ? {scaleY: 1.1} : { scale: 1.1};

    
 return (
 
 <div className={styles.container}>
  
<motion.div  className={cls(styles.imgMotionWrapper, classMap [size])}
    whileHover= {{ ...scale }}>
    <Image src= {imgSrc}  
    alt="image" layout="fill" 
    onError={handleOnError}
    className= {styles.cardImg} />
    </motion.div>  
    </div>
    
 );
}
export default Card;
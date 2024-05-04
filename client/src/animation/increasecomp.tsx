import { motion } from "framer-motion";


interface increaseType{
    children:React.ReactNode
}
const Increaseanimation = ({children}:increaseType) => {
    const fadeInOut = {
        initial: {
          opacity: 0,
          scale: 0 // Initially, the element is invisible and scaled down to 0%
        },
        animate: {
          opacity: 1,
          scale: 1, // When animating, the element is fully visible and scaled up to 100%
          transition: {
            duration: 1 // Adjust the duration as needed
          }
        },
        exit: {
          opacity: 0,
          scale: 0 // When exiting, the element fades out and scales back down to 0%
        }
      };
  return (
    <motion.div
    style={{
      backgroundColor: '#f7f6f5',
      minHeight: '80px',
      borderRadius:'8px',
      display:'flex',
      flexWrap: 'wrap',
      justifyContent:'center',
      alignItems:'center',
      height: '100%',
      width: '100%',
      padding: '10px',
    }}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInOut}
    >
      {children}
    </motion.div>
  );
};


export default Increaseanimation
import {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollComplation = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
           
            if (scrollHeight) {
                setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
            };
        }

        
        window.addEventListener('scroll', updateScrollComplation);

        return () => window.removeEventListener('scroll', updateScrollComplation);
    }, []);

  return (
    completion
  )
}

export default useScrollProgress
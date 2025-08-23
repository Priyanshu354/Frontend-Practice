import { useEffect, useState } from 'react'

function App() {
 const [images, setImages] = useState([]);

 const loadImages = (count = 4) => {
  const newImages = Array.from({length : count}, () => {
    return `https://picsum.photos/300/200?random=${Math.random()}`;
  });

  setImages((prev) => ([...prev, ...newImages]));
 };

 useEffect(() => {
  loadImages();
  const handleScroll = () => {
    // console.log(window.scrollY); // Its Give How much window have been scroll
    // console.log(window.innerHeight); // Its give us, the window we are looking currently height
    // console.log("total", document.documentElement.scrollHeight) // its give us the whole document height

    const scrolled = window.scrollY;
    const windowSize = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;

    if(scrolled + windowSize >= totalHeight - 200){
      console.log(true)
      loadImages();
    }
  }

  document.addEventListener("scroll", handleScroll);

  return () => (document.removeEventListener("scroll", handleScroll));
 },[]);

  return (
    <>
    <div className='w-full h-full container mx-auto flex flex-col gap-10 justify-center'>
      {images.map((image, i) => {
        return <img key={i}
        src={image} alt="random image" className='w-[300px] h-[200px] rounded self-center'/>
      })}
    </div>
    </>
  )
}

export default App

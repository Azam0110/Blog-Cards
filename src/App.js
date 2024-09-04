//import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div className="bg-white h-[450px] text-black rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 group">
          <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center overflow-hidden">
            <img src={d.image} alt="" className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"/>
          </div>
        
          <div className='flex flex-col justify-center items-center gap-4 p-4'>
            <p className='text-xl font-semibold'>{d.title}</p>
            <p>{d.description}</p>
            <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl transition-all duration-300 ease-in-out group-hover:bg-indigo-600'>
              Read more
            </button>
          </div>
        </div>
        
        ))}
      </Slider>
      </div>

    </div>
  );
}

const data = [
  
  {
      "image": "https://picsum.photos/id/1027/300/200",
      "title": "Getting Started with JSX",
      "description": "An introduction to JSX, the syntax extension for JavaScript used in React."
  },
  {
      "image": "https://picsum.photos/id/1035/300/200",
      "title": "State and Props in React",
      "description": "Explore the differences between state and props in React and how to use them effectively."
  },
  {
      "image": "https://picsum.photos/id/1049/300/200",
      "title": "Handling Events in React",
      "description": "A guide to handling user interactions in React using event handlers."
  },
  {
      "image": "https://picsum.photos/id/1055/300/200",
      "title": "Understanding React Hooks",
      "description": "Get to know React hooks and how they simplify state management in functional components."
  },
  {
      "image": "https://picsum.photos/id/1062/300/200",
      "title": "Styling React:Tips and Tricks",
      "description": "Learn different ways to style your React components, including CSS modules and inline styles."
  },
  {
      "image": "https://picsum.photos/id/1069/300/200",
      "title": "Optimzing React Performan",
      "description": "Tips and best practices to make your React applications faster and more efficient."
  },
  {
      "image": "https://picsum.photos/id/1074/300/200",
      "title": "React Router Basics",
      "description": "Understand the fundamentals of React Router for managing navigation in your apps."
  }
 ]

export default App;

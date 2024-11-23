import { NavBar } from "../component/navBar";
import image from "../assets/react.svg";
export default function LandingPage() {
  const props = {
    imgUrl: image,
    Home: "Home",
    About: "About",
    Contact: "Contact",
    Profile: "Me",
  };

  const Books = [
    { id: 0, title: "titin", category: "adventure" },
    { id: 1, title: "Ninja Turtle", category: "Action" },
    { id: 2, title: "Harry Potter", category: "magic" },
  ];

  return (
    <main className="w-full flex flex-col justify-center items-center">
      <NavBar {...props} />
      <section className="mt-[10%] grid">
        {Books.map(({ id, title, category }) => (
            
          <div className="flex space-x-[15%] w-full" key={id}>
            <span>{title}</span>
            <span className={`${category === 'Action' ? 'text-red-400':'text-black'}`}>{category}</span>
          </div> 
        ))}
      </section>
    </main>
  );
}

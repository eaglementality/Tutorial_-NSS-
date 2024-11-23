export function NavBar({ imgUrl, Home, About, Contact, Profile }: any) {
  return (
    <nav className="w-full flex justify-between items-center p-5 shadow-lg rounded-lg">
      <img src={imgUrl} />
      <div className="flex space-x-2">
        <span>{Home}</span>
        <span>{About}</span>
        <span>{Contact}</span>
        <span>{Profile}</span>
      </div>
    </nav>
  );
}

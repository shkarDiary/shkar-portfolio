export default function Nav() {
  return (
    <div className=" hidden md:flex col-start-1 row-start-1 mt-4 h-28 w-[70%] items-center  px-28 justify-between bg-transparent ">
      <a href="" className=" text-gray-900 font-bold text-lg">
        SHKAR
      </a>
      <ul className=" flex flex-row  text-gray-600 gap-24 ">
        <li>Home</li>
        <li>Service</li>
        <li>About</li>
      </ul>
    </div>
  );
}

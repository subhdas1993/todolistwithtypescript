import { Link } from "react-router-dom"
function Navbar() {
  return (
    <>
    <nav className="flex justify-between items-center my-3 font-[Merriweather] font-normal text-2xl mt-10 mb-4">
        <Link to="/" className="">All</Link>
        <Link to="/?todos=active" className="">Active</Link>
        <Link to="/?todos=completed" className="">Completed</Link>
    </nav>
    </>
  )
}

export default Navbar
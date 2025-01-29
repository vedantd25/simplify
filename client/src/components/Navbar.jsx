const Navbar = ()=>{
    return(
        <nav id="nav"className="flex justify-between items-center pt-5 bg-white ">
            <div className="flex justify-between">
        <div className="italic text-3xl font-bold mx-20">simplify.</div>
        
        </div>
        <div className="flex space-x-4 mx-20">
        <a href="#why-briefly" className="text-gray-700 mt-1  hover:text-purple-800 hover:text-xl">Why simplify?</a>
      
      <a href="#contact-us" className="text-gray-700 mt-1 hover:text-purple-800 hover:text-xl">Contact Us</a>
        </div>
      </nav>

    )
}
export default Navbar;
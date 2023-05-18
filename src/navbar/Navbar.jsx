import StbIcon from "../icons/stbIcon";

function Navbar() {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-600 h-[100px] w-screen top-0 fixed flex justify-center items-center">
      <p className="text-white font-bold text-lg">STB</p>
      {/* <div className="bg-white rounded-full overflow-hidden ml-2">
        <StbIcon />
      </div> */}
      <div className="bg-white rounded-full">
      <StbIcon />
      </div>
      
      <p className="text-white font-bold text-lg">BANK</p>
    </div>
  );
}

export default Navbar;

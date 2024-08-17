const DropDown = () => {
  return (
    <div>
      <ul
        id="dropdown"
        className="absolute left-0 w-full bg-white border z-30 border-gray-300 rounded-lg mt-1 py-1 shadow-lg"
      >
        <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
        <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
      </ul>
    </div>
  );
};

export default DropDown;

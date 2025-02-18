const SideBar = () => {
  return (
    <aside className="basis-3xs border-r-1 border-gray-100 h-screen mr-[12px] pl-[12px] pt-[12px]">
      <div className="font-bold text-5xl mb-[20px]">Alma</div>
      <ul>
        <li className="font-bold text-lg mb-[6px] cursor-pointer">Leads</li>
        <li className="text-lg mb-[6px] cursor-pointer hover:text-gray50">
          Settings
        </li>
      </ul>
      <div className="absolute bottom-[50px]">
        <div>
          <button
            onClick={() => {
              sessionStorage.removeItem("isAuthenticated");
              window.location.reload();
            }}
            className="bg-black cursor-pointer text-white rounded-md px-[10px] mb-[10px]"
          >
            Logout
          </button>
        </div>
        <div className="flex">
          <span className="flex bg-[url(https://placehold.co/1600x400)] h-[25px] w-[25px] mr-[12px]" />
          Profile
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

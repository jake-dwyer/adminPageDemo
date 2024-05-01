const Sidebar = () => {
  return (
    <nav className="bg-cardBackground text-primaryText p-4 w-48 fixed h-full margin left-0 border-r border-stroke">
      <div className="flex items-center font-geist font-medium tracking-tight text-2xl mt-2">
      <img src="/Husky.svg" alt="Husky Logo"/>
        Carpool NU
      </div>
      <ul className="flex flex-col space-y-16 font-geist">
        <li className="flex mt-16 text-primaryRed">
          <img className="mr-2" src="/dashboard.svg" alt="Dashbaord"/>
          Dashboard
          </li>
        <li className="flex text-secondaryText">
          <img className="mr-2" src="/data.svg" alt="User Data"/>
          User Activity
          </li>
        <li className="flex text-secondaryText">
        <img className="mr-2" src="/Briefcase.svg" alt="User Data"/>
          Active Co-Ops
          </li>
        <li className="flex text-secondaryText">
        <img className="mr-2" src="/pencil.svg" alt="User Data"/>
          Feedback
          </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

import NavigationBar from "../NavigationBar";

const Header = () => {
  return (
    <header className="flex-0 flex flex-row justify-between p-4 px-6 shadow-lg">
      <h1 className="text-3xl font-semibold">Notes App</h1>
      <NavigationBar />
    </header>
  );
};

export default Header;

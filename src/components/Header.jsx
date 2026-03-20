const Header = () => {
  return (
    <div className="px-6 py-4 backdrop-blur-md bg-white/70 flex justify-between items-center">
      <div>
        <h1 className="text-lg font-semibold text-textMain">
          RiseUp Chat
        </h1>
        <p className="text-sm text-textSoft">
          Your calm space
        </p>
      </div>

      <div className="flex gap-4 text-textSoft">
        <span>ℹ️</span>
        <span>⚙️</span>
      </div>
    </div>
  );
};

export default Header;
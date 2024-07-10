import { formatDate } from "@helpers/formatDate";

const Header = () => {
  return (
    <header className="flex w-full flex-col gap-3 border-b-4 border-b-[#F2F4F5] bg-white p-6 py-3">
      <h1 className="text-2xl">News by ORTIMA</h1>
      <p className="text-base">{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;

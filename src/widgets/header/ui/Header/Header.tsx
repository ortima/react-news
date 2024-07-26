import { formatDate } from "@/shared/helpers/formatDate";

const Header = () => {
  return (
    <header className="flex w-full flex-col gap-3 border-b-4 border-b-[#F2F4F5] bg-white p-6 py-3">
      <h1 className="font-serif text-2xl font-semibold uppercase">
        News by ORTIMA
      </h1>
      <p className="text-base">{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;

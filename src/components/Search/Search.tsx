interface ISearch {
  keywords: string;
  setKeywords: (news: string) => void;
}

const Search: React.FC<ISearch> = ({ keywords, setKeywords }) => {
  return (
    <div className="flex w-full gap-3 bg-white">
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className="w-full rounded-xl border-2 border-solid border-[#f2f3f5] p-3"
        placeholder="Search news"
      />
    </div>
  );
};

export default Search;

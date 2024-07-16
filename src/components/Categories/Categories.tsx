interface ICategories {
  categories: string[];
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
}

const Categories: React.FC<ICategories> = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className="box-border flex w-full items-start gap-2 overflow-x-auto whitespace-nowrap"
    >
      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category
                ? `flex items-center border-r-[32px] border-none bg-[#f2f4f5] px-4 py-2`
                : `flex items-center border-r-[32px] border-none bg-[#e7e7ff] px-4 py-2 text-[#6b4eff]`
            }
            key={category}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

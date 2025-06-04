import { categorys, Category as CategoryType } from "@/description-content-data";

const Category = () => {
  return (
    <div className="flex flex-col gap-2 border-black border-1 md:w-1/2 w-full p-2">
      <h2>'A Swedish Mad Max'</h2>
      <h2>FPS</h2>
      {categorys.map((cat: CategoryType, index: number) => (
        <div key={index}>
          <p>Genre: {cat.genre}</p>
          <p>Artstyle: {cat.artstyle}</p>
          <p>Setting: {cat.setting}</p>
          <p>Theme: {cat.theme}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;

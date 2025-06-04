import { description, Description as DescriptionType } from "@/description-content-data";

const Description = () => {
  return (
    <div className="border-black border-1 md:w-1/2 w-full self-end p-2">
      {description.map((desc: DescriptionType, index: number) => (
        <div className="flex flex-col gap-2" key={index}>
          <h3>{desc.title}</h3>
          <p>{desc.firstpar}</p>
          <p>{desc.secondpar}</p>
          <p>{desc.thirdpar}</p>
        </div>
      ))}
    </div>
  );
};

export default Description;
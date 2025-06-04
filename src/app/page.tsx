import Category from "@/components/Category";
import Description from "@/components/Description";
import NewsBtn from "@/components/NewsBtn";

const Home = () => {
  return (
    <>
    <div>home</div>
    <div className="max-w-6xl w-4/5 mx-auto">
      <div className="flex flex-col gap-5 ">
        <Category/>
        <Description/>
        <NewsBtn btnTitle='SIGN UP FOR NEWS'/>
      </div>
    </div>
    </>
  );
}

export default Home
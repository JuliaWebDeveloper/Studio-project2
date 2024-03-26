import BigCarousel from "./BigCarousel";
import SmallCarousel from "./SmallCarousel";
import MyApplication from "../Main/MyApplication";
import MyBlog from "../Main/MyBlog";
import "./style.css";



function Main() {
  return (
    <div className="main-container">
      <BigCarousel />
      <SmallCarousel />
      <MyApplication />
      <MyBlog />
    </div>
  );
}

export default Main;



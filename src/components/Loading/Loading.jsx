import style from "./loading.module.css";

const Loading = () => {
  return (
    <div className=" w-screen h-screen flex justify-center items-center flex-col gap-3  bg-white z-[101]">
      <div className={style.auk_loading_dots}></div>
      Loading
    </div>
  );
};

export default Loading;

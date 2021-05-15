import loadGifImage from "./img/image.jpeg";

const LoaderContent: React.FC = () => {
  return (
    <div>
      {" "}
      <img src={loadGifImage} alt="Cat" />
    </div>
  );
};

export default LoaderContent;

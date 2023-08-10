import ImageCard from "./ImageCard";

const ImageGrid = ({ images }) => {
  return (
    <>
      <div className="images">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </>
  );
};

export default ImageGrid;

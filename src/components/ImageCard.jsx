const ImageCard = ({ image }) => {
  return (
    <>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className="image"
      />
    </>
  );
};

export default ImageCard;

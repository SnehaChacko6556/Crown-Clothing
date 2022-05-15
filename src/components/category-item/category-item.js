import "./category-item.scss"

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='category__container'>
      <div
        className='background__image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='category__body__container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
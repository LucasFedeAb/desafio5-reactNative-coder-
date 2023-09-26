import CategoryDetail from "./CategoryDetail/CategoryDetail";

const CategoryTopTab = ({ route }) => {
  const { category } = route.params;

  return <CategoryDetail category={category} />;
};

export default CategoryTopTab;

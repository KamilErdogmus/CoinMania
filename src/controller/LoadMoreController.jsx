import { useSearchParams } from "react-router-dom";
import LoadMoreView from "./../view/LoadMoreView";

const LoadMoreController = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = () => {
    const pageNumber = params.get("page") || 1;

    setParams({ page: Number(pageNumber) + 1 });
  };

  return <LoadMoreView handleClick={handleClick} />;
};

export default LoadMoreController;

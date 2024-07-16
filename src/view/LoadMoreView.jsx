const LoadMoreView = ({ handleClick }) => {
  return (
    <div className="d-flex justify-content-center">
      <button className="LoadMore" onClick={handleClick}>
        <svg
          viewBox="0 0 24 24"
          height="30"
          fill="none"
          className="css-i6dzq1"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.4"
          stroke="currentColor"
          width="30"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
        More
      </button>
    </div>
  );
};

export default LoadMoreView;

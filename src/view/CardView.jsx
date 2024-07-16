const CardView = ({ item, formatNumber }) => {
  return (
    <div className="d-flex flex border flex-column cardd p-4">
      <div>
        <h3>{item.name}</h3>
        <h6 className="fw-bold">{item.symbol}</h6>
        <p className="fs-3">${formatNumber(item.priceUsd)}</p>
        <span>Daily Change</span>
        <p>
          <span
            className={
              item.changePercent24Hr == 0
                ? "text-white"
                : item.changePercent24Hr > 0
                ? "text-success"
                : "text-danger"
            }
          >
            %{formatNumber(item.changePercent24Hr)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardView;

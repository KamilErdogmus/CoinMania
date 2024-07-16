/* eslint-disable react/no-unescaped-entities */
import { MdCurrencyBitcoin } from "react-icons/md";
import CardView from "./CardView";
import { Tilt } from "react-tilt";
import numeral from "numeral";
import millify from "millify";
import LoadMoreController from "./../controller/LoadMoreController";
import { useNavigate } from "react-router-dom";

const MainPageView = ({ popular, coins }) => {
  const navigate = useNavigate();

  const formatNumber = (number) => {
    return numeral(number).format("0,0.00");
  };
  return (
    <div className="container-xl mt-5">
      <h1 className="d-flex align-items-center gap-2">
        <span>
          <MdCurrencyBitcoin />
        </span>
        Bitcoin
      </h1>
      <p>
        Bitcoin is a decentralized, peer-to-peer digital asset, similar to gold
        or fiat money. It uses cryptography to secure transactions and prevent
        double-spending. Bitcoin's mainnet has a total of 21 million bitcoins,
        with an estimated value of $1.8 trillion.
      </p>
      {/* Populer Kartlar */}
      <div className="d-flex justify-content-around mt-3">
        {popular?.map((item) => (
          <Tilt key={item.id}>
            <CardView item={item} formatNumber={formatNumber} />
          </Tilt>
        ))}
      </div>
      {/* Tablo */}
      <table className="table table-dark table-hover mt-4 table-striped ">
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>Volume</th>
            <th>24H Average Price</th>
            <th>24H Change Rate</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin, i) => (
            <tr onClick={() => navigate(`/coin/${coin.id}`)} key={i}>
              <th>{i + 1}</th>
              <th className="text-start ">
                <span className="text-warning fw-bold me-3">{coin.symbol}</span>
                {coin.name}
              </th>
              <th>$ {formatNumber(coin.priceUsd)}</th>
              <th>{millify(coin.marketCapUsd)}</th>
              <th>{formatNumber(coin.vwap24Hr)}</th>
              <th
                className={
                  coin.changePercent24Hr == 0
                    ? "text-white"
                    : coin.changePercent24Hr > 0
                    ? "text-success"
                    : "text-danger"
                }
              >
                {formatNumber(coin.changePercent24Hr)}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <LoadMoreController />
    </div>
  );
};

export default MainPageView;

import { useParams } from "react-router-dom";
import DetailPageView from "./../view/DetailPageView";
import axios from "axios";
import { useEffect, useState } from "react";
import { DetailModal } from "../modal/DetailModal";

const DetailPageController = () => {
  const [coin, setCoin] = useState(null);
  const [history, setHistory] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinResponse = await axios.get(`/assets/${params.id}`);
        setCoin(coinResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchHistoryData = async () => {
      try {
        const historyResponse = await axios.get(
          `/assets/${params.id}/history?interval=d1`
        );
        setHistory(historyResponse.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCoinData();
    fetchHistoryData();
  }, [params.id]);

  const model = coin && history ? new DetailModal(coin, history) : null;

  return <DetailPageView model={model} />;
};

export default DetailPageController;

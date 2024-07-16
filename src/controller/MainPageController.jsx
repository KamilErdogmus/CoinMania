import { useEffect, useState } from "react";
import MainPageView from "../view/MainPageView";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [popular, setPopular] = useState(null);
  const [params] = useSearchParams();

  //* page: URL'den alınan 'page' parametresini veya varsayılan olarak 1'i tutacak değişken.
  const page = params.get("page") || 1;

  useEffect(() => {
    //* axios ile CoinCap API'sinden coin verilerini getiriyoruz.
    axios
      .get(`/assets?limit=15&offset=${(page - 1) * 15}`)
      .then((res) => {
        //! API'den gelen yeni coin verilerini alıyoruz.
        const newCoins = res.data.data;
        //? mevcut coins state'ini güncelleyerek yeni verileri ekliyoruz.
        setCoins((prevCoins) => [...prevCoins, ...newCoins]);
        //^ Eğer 'popular' state'i henüz atanmamışsa, ilk 4 coin'i popüler olarak belirliyoruz.
        if (!popular) {
          setPopular(newCoins.slice(0, 4));
        }
      })
      .catch((err) => console.log(err));
  }, [page, popular]);

  return <MainPageView coins={coins} popular={popular} />;
};

export default MainPageController;

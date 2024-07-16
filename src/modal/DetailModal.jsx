import { FaPercent } from "react-icons/fa";
import { MdEventAvailable, MdOutlinePriceChange } from "react-icons/md";
import { RiStockLine } from "react-icons/ri";
import { SiCoinmarketcap } from "react-icons/si";

export class DetailModal {
  constructor(coin, history) {
    this.coin = coin;

    //! intoFields, coin verileri ile ilgili bilgileri ve ikonları içeren bir dizi oluşturuyor.
    this.intoFields = [
      {
        icon: <SiCoinmarketcap />,
        label: "Volume",
        value: this.coin?.marketCapUsd,
      },
      {
        icon: <MdEventAvailable />,
        label: "Supply Amount",
        value: this.coin?.supply,
      },
      {
        icon: <MdOutlinePriceChange />,
        label: "Price(USD)",
        value: this.coin?.priceUsd,
      },
      {
        icon: <RiStockLine />,
        label: "24H Volume(%)",
        value: this.coin?.volumeUsd24Hr,
      },
      {
        icon: <FaPercent />,
        label: "24H Change Rate(%)",
        value: this.coin?.changePercent24Hr,
      },
    ];

    //! chartData, coin fiyat geçmişi ile ilgili grafik verilerini içeren bir nesne oluşturuyor.
    this.chartData = {
      //* labels, tarih bilgilerini içeren bir dizi oluşturuyor.
      labels: history.map((item) => new Date(item.date).toLocaleDateString()),
      //~ datasets, grafik için gerekli olan veri setini tanımlıyor.
      datasets: [
        {
          //& Veri seti etiketi olarak coin sembolü ve fiyatı belirtiliyor.
          label: `${coin.symbol}  Price`,
          //* history içindeki fiyat verilerini içeren bir dizi oluşturuyor.
          data: history.map((item) => item.priceUsd),
        },
      ],
    };
  }
}

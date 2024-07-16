import { Chart } from "chart.js/auto";
import millify from "millify";
import { Bar, Line } from "react-chartjs-2";
const DetailPageView = ({ model }) => {
  if (!model) return <div>Loading...</div>;

  return (
    <div className="grid overflow-x-hidden ">
      <h3 className="text-center mb-3">
        <span className="me-3 fs-4 font-bold">{model.coin?.name}</span>
        <span className="fs-2 text-warning">{model.coin?.symbol}</span>
      </h3>
      <div className="row">
        <div className="d-flex col flex-column gap-5 col-sm-12 col-md-3 p-md-4  ">
          {model?.intoFields?.map((item, i) => (
            <div
              key={i}
              className="d-flex border rounded-3 flex-column p-3 justify-content-between  align-items-center"
            >
              <h3 className="fs-2">{item.icon}</h3>
              <p className="fw-bold fs-4">{item.label}</p>
              <p className="fw-bold fs-5">
                {item.value === undefined
                  ? "..."
                  : millify(item.value, {
                      space: true,
                      precision: 2,
                    })}
              </p>
            </div>
          ))}
        </div>
        <div className="d-flex col flex-column my-5 gap-5 col-12 col-md-9 p-5 p-md-4 ">
          <Line data={model.chartData} />
          <Bar className="mt-2" data={model.chartData} />
        </div>
      </div>
    </div>
  );
};

export default DetailPageView;

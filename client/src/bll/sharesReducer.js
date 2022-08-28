import { createSlice } from "@reduxjs/toolkit";
import socket from "../utils/socket";

// const initState = {
//   shares: [
//     {
//       change: "32.53",
//       change_percent: "0.68",
//       dividend: "0.20",
//       exchange: "NASDAQ",
//       last_trade_time: "2022-08-25T16:12:12.000Z",
//       price: "123.89",
//       ticker: "AAPL",
//       yield: "0.55",
//     },
//     {
//       change: "36.65",
//       change_percent: "0.59",
//       dividend: "0.59",
//       exchange: "NASDAQ",
//       last_trade_time: "2022-08-25T16:12:12.000Z",
//       price: "125.19",
//       ticker: "GOOGL",
//       yield: "1.28",
//     },
//     {
//       change: "181.78",
//       change_percent: "0.66",
//       dividend: "0.42",
//       exchange: "NASDAQ",
//       last_trade_time: "2022-08-25T16:12:12.000Z",
//       price: "237.86",
//       ticker: "MSFT",
//       yield: "0.68"
//     },
//     {
//       change: "167.08",
//       change_percent: "0.45",
//       dividend: "0.75",
//       exchange: "NASDAQ",
//       last_trade_time: "2022-08-25T16:12:12.000Z",
//       price: "165.37",
//       ticker: "AMZN",
//       yield: "0.28"
//     },
//     {
//       change: "146.00",
//       change_percent: "0.88",
//       dividend: "0.06",
//       exchange: "NASDAQ",
//       last_trade_time: "2022-08-25T16:12:12.000Z",
//       price: "156.69",
//       ticker: "FB",
//       yield: "1.58"
//     },
//     {
//       change: "8.94",
//       change_percent: "0.04",
//       dividend: "0.24",
//       exchange: "NASDAQ",
//       last_trade_time: "2022-08-25T16:12:12.000Z",
//       price: "234.38",
//       ticker: "TSLA",
//       yield: "1.24"
//     }
//   ]
// };

const initState = {
  shares: [
    {
      name: "Apple Inc.",
      color: "#858585",
      isOn: true
    }, {
      name: "Alphabet Inc.",
      color: "#ea4335",
      isOn: true
    },
    {
      name: "Microsoft",
      color: "#00a1f1",
      isOn: true
    },
    {
      name: "Amazon Com.",
      color: "#ff9900",
      isOn: true
    },
    {
      name: "Meta",
      color: "#1877f2",
      isOn: true
    },
    {
      name: "Tesla Inc.",
      color: "#cc0000",
      isOn: true
    },
  ]
};

const sharesSlice = createSlice({
  name: "shares",
  initialState: initState,
  reducers: {
    setShares(state, action) {
      state.shares = action.payload.map((d, i) => {
        return { ...state.shares[i], ...d };
      });
    }
  }
});

export const sharesReducer = sharesSlice.reducer;
export const { setShares, } = sharesSlice.actions;

export const startTradingTC = () => (dispatch) => {
  socket.emit("start");
  socket.on("ticker", (data) => {
    dispatch(setShares(data));
  });
};

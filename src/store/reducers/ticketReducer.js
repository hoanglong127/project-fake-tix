import TicketRoomInfo from "../../models/ticketRoom";
import actionTypes from "../types";

const initialState = {
  ticketRoomInfo: new TicketRoomInfo(),
  seatBookingList: [],
  activedTab: "BookTickets",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_TICKET_ROOM_INFO:
      state.ticketRoomInfo = payload;
      return { ...state };
    case actionTypes.ADD_SEAT:
      const cloneSeatBookingList = [...state.seatBookingList];
      const index = cloneSeatBookingList.findIndex(
        (seat) => seat.maGhe === payload.maGhe
      );

      if (index === -1) {
        cloneSeatBookingList.push(payload);
      } else {
        cloneSeatBookingList.splice(index, 1);
      }

      state.seatBookingList = cloneSeatBookingList;
      return { ...state };
    case actionTypes.CLEAR_SEATS:
      state.seatBookingList = [];
      return { ...state };
    case actionTypes.SET_ACTIVED_TAB:
      state.activedTab = payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;

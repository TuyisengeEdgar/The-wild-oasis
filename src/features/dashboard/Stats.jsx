import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

function Stats({ bookings, confirmedStays, numDays, cabinsCount }) {
  // 1.
  const numBookings = bookings.length;
  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  // 3.confirmed Stays
  const checkins = confirmedStays.length;

  // 4.OCCUPACY RATE

  const occupacy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinsCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupacy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupacy * 100) + "%"}
      />
    </>
  );
}

export default Stats;

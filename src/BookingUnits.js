import useFetch from "./useFetch";

const BookingUnits = () => {
  const { data, isPending, error } = useFetch(
    "https://apitest.cimsoweb.com/api/innterchange/get_booking_units_request"
  );
  console.log(data);
  return (
    <div className="home">
      {isPending && <div className="loader">Loading.........</div>}
      {error && (
        <div
          style={{
            color: "red",
            fontSize: "40px",
          }}
          className="error"
        >
          {error}
        </div>
      )}
      {data && (
        <div className="blog-list">
          <h3>Booking Units</h3>
          {data.forEach((payload) => {
            payload["Booking Units"].forEach((bookingunit) => {
              <div className="" key={bookingunit}>
                {console.log(bookingunit)}
                <div>{bookingunit["Booking Unit ID"]}</div>
                <div>{bookingunit["Booking Unit Name"]}</div>
                <div>{bookingunit["Booking Unit Number"]}</div>
                <div>{bookingunit["Unit Type ID"]}</div>
              </div>;
            });
          })}
        </div>
      )}
    </div>
  );
};

export default BookingUnits;

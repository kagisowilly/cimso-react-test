import useFetch from "./useFetch";

const BookingUnits = () => {
  const { data2, isPending, error } = useFetch(
    "https://apitest.cimsoweb.com/api/innterchange/get_booking_units_request"
  );
  console.log(error);
  return (
    <div className="home">
      <h3 className="text-center title">Booking Units</h3>
      {isPending && (
        <div className="load">
          <div class="ring">
            Loading
            <span className="loader"></span>
          </div>
        </div>
      )}

      {data2 && (
        <div className="blog-list">
          {
            // <p key={d['Booking Unit ID']}>{d['Booking Unit Name']}</p>
            data2.length > 0 && (
              <div>
                <table className="table table-success table-striped">
                  <thead>
                    <tr>
                      <th>Unit Type IDs</th>
                      <th>Booking Unit IDs</th>
                      <th>Booking Unit ID</th>
                      <th>Booking Unit Name</th>
                      <th>Booking Unit Number</th>
                      <th>Unit Type ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data2.map((bookingunit) => (
                      <tr key={bookingunit["Booking Unit ID"]}>
                        <td class="numbers">{bookingunit["Unit Type ID"]}</td>
                        <td class="numbers">
                          {bookingunit["Booking Unit ID"]}
                        </td>
                        <td class="numbers">
                          {bookingunit["Booking Unit ID"]}
                        </td>
                        <td class="numbers">
                          {bookingunit["Booking Unit Name"]}
                        </td>
                        <td class="numbers">
                          {bookingunit["Booking Unit Number"]}
                        </td>
                        <td class="numbers">{bookingunit["Unit Type ID"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          }
        </div>
      )}
      {error && (
        <div
          style={{
            color: "red",
            fontSize: "40px",
          }}
          className="error"
        >
          Could Not
        </div>
      )}
    </div>
  );
};

export default BookingUnits;

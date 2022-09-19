import useFetch from "./useFetch";

const UnitTypes = () => {
  const { data, isPending, error } = useFetch(
    "https://apitest.cimsoweb.com/api/innterchange/unit_type_info_request"
  );
  return (
    <div className="home">
      {isPending && (
        <div className="load">
          <div class="ring">
            Loading
            <span className="loader"></span>
          </div>
        </div>
      )}
      {error && (
        <div style={{ color: "red", fontSize: "40px" }} className="error">
          {error}
        </div>
      )}
      {data && (
        <div className="">
          <h3 className="text-center title">Unit Types</h3>
          <div class="row container">
            {data.map((payload) => (
              <div key="payload" class="col-12 col-md-4 col-sm-6 col-lg-3 g-2">
                <div class="card border">
                  <div class="card-body">
                    <p class="text-start">
                      <span>Unit Type ID:</span> {payload["Unit Type ID"]}
                    </p>
                    <p class="text-start">
                      <span>Unit Type Code:</span> {payload["Unit Type Code"]}
                    </p>
                    <p class="text-start">
                      <span>Unit Type Description:</span>
                      {payload["Unit Type Description"]}
                    </p>
                    <p class="text-start">
                      <span>Unit Type Category: </span>
                      {payload["Unit Type Category"]}
                    </p>
                    <p class="text-start">
                      <span>Maximum Occupants:</span>
                      {payload["Maximum Occupants"]}
                    </p>
                    <p class="text-start">
                      <span>Maximum Adults:</span> {payload[""]}
                    </p>
                    <p class="text-start">
                      <span>Maximum Children: </span>
                      {payload["Maximum Children"]}
                    </p>
                    <p class="text-start">
                      <span>Unit Type Description:</span>
                      {payload["Unit Type Description"]}
                    </p>
                    <p class="text-start">
                      <span>Location ID:</span> {payload["Location ID"]}
                    </p>
                    <p class="text-start">
                      <span>Unit Count:</span> {payload["Unit Count"]}
                    </p>
                    <p class="text-start">
                      <span>Unit Type Image UIDs:</span>
                      {payload["Unit Type Image UIDs"]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitTypes;

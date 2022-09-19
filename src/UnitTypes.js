import useFetch from "./useFetch";

const UnitTypes = () => {
  const {
    data,
    isPending,
    error,
  } = useFetch(
    "https://apitest.cimsoweb.com/api/innterchange/unit_type_info_request"
  );
  return (
    <div className="home">
      {isPending && <div className="loader">Loading.........</div>}
      {error && (<div style={{color: "red",fontSize: "40px",}}className="error">{error}</div>)}
      {data && (
        <div className="">
          <h3>UnitTypes</h3>
          {
               
            //    allUnitTypes.map((unitType) => (
            //         <div className="blog-preview" key={unitType}>
            //         {console.log(unitType)}
            //     </div>
            //    ))
                }
        </div>
      )}
    </div>
  );
};

export default UnitTypes;

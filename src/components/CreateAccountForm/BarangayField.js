


export const BarangayField = ({values, setValues}) => {

  const barangayList = [
    {
      label: "Poblacion",
      value: "POB"
    },
    {
      label: "Gui-ob",
      value: "GUI"
    },
    {
      label: "Madalag",
      value: "MAD"
    },
    {
      label: "Bagsik",
      value: "BAG"
    },
    {
      label: "Lawan",
      value: "LAW"
    },
    {
      label: "Camili",
      value: "CAM"
    },
  ];

  const addressList = {
    POB: "Poblacion",
    GUI: "Gui-ob",
    MAD: "Madalag",
    BAG: "Bagsik",
    LAW: "Lawan",
    CAM: "Camili"
  };
    
  

  function handleChange(e) {
    setValues(
      {
        ...values, 
        barangay: e.target.value,
        address: `${addressList[`${e.target.value}`]}, Alcantara, Romblon`
      }
    )
    console.log(addressList[`${e.target.value}`]);
  }

  return (
    <div className="col-md-6">
      <label 
        htmlFor="barangayId" 
        className="form-label"
      >
        Barangay
      </label>
      <select 
        id="barangayId" 
        className="form-select" 
        defaultChecked={true}
        defaultValue={barangayList[0].value}
        onChange={handleChange}
      >
        {barangayList.map(item => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select> 
    </div> 
  )
}
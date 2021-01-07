


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
    {
      label: "San Isidro",
      value: "SNI"
    },
    {
      label: "San Roque",
      value: "SNR"
    },
    {
      label: "Tugdan",
      value: "TUG"
    },
    {
      label: "Calagonsao",
      value: "CAL"
    },
    {
      label: "Bonlao",
      value: "BON"
    },
    {
      label: "Comod-om",
      value: "COM"
    }
  ];

  const addressList = {
    POB: "Poblacion",
    GUI: "Gui-ob",
    MAD: "Madalag",
    BAG: "Bagsik",
    LAW: "Lawan",
    CAM: "Camili",
    SNI: "San Isidro",
    SNR: "San Roque",
    TUG: "Tugdan",
    CAL: "Calagonsao",
    BON: "Bonlao",
    COM: "Comod-om",
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
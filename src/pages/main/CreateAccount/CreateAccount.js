import { useState } from "react";
import "./style.css";
import { AccountNumberField } from "../../../components/CreateAccountForm/AccountNumberField";
import { AddressField } from "../../../components/CreateAccountForm/AddressField";
import { FullNameField } from "../../../components/CreateAccountForm/FullNameField";
import { MeterSerialNumberField } from "../../../components/CreateAccountForm/MeterSerialNumberField";
import { MobileNumberField } from "../../../components/CreateAccountForm/MobileNumberField";
import { BarangayField } from "../../../components/CreateAccountForm/BarangayField";
import { NewOrExistingField } from "../../../components/CreateAccountForm/NewOrExistingField";
import { LastBillDetailsFields } from "../../../components/CreateAccountForm/LastBillDetailsFields";
import { SubmitCreateAccountButton } from "../../../components/CreateAccountForm/SubmitCreateAccountButton";
import Loader from "../../../components/Loader/Loader";



export const CreateAccount = () => {
  
  const [values, setValues] = useState({
    barangay: "POB", 
    existing: false, 
    lastBillNumber: 0, 
    lastBillReading: 0,
    lastBillPeriodTo: 0
  });
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  console.log(values)


  return (
    <div className="container">
      <p className="display-6 text-center py-2">
        Account Information
      </p>
      {
        loading ?
        <div className="row">
          <Loader />
          <p className="display-6 text-center">
            Please wait
          </p>
        </div>
        :
        <form className="row g-3 pb-4">      
          <NewOrExistingField 
            values={values}
            setValues={setValues}
          />
          <AccountNumberField
            values={values}
            setValues={setValues}
            errors={errors}
          />
          <MeterSerialNumberField 
            values={values}
            setValues={setValues}
            errors={errors}
          />
          <FullNameField 
            values={values}
            setValues={setValues}
            errors={errors}
          />
          <MobileNumberField 
            values={values}
            setValues={setValues}
            errors={errors}
          />
          <AddressField 
            values={values}
            setValues={setValues}
            errors={errors}
          />
          <BarangayField 
            values={values}
            setValues={setValues}
          />
          {
            values.existing 
            && 
            <LastBillDetailsFields 
              values={values} 
              setValues={setValues} 
              errors={errors} 
            />
          }
          <SubmitCreateAccountButton 
            values={values}
            setValues={setValues}
            errors={errors}
            setErrors={setErrors}
            setLoading={setLoading}
          />
        </form>      
        
      }
    </div>
  )
}
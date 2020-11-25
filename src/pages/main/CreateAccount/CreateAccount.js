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
import { SuccessModal } from "../../../components/CreateAccountForm/SuccessModal";



export const CreateAccount = () => {
  
  const [values, setValues] = useState({
    barangay: "POB",
    address: "Poblacion, Alcantara, Romblon",
    existing: false, 
    lastBillNumber: 0, 
    lastBillReading: 0,
    lastBillPeriodTo: 0
  });
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container col-md-8">
      {
        showModal 
        &&
        <SuccessModal 
          setShowModal={setShowModal}
          setValues={setValues}
        />
      }
      <p className="display-5 text-center py-3">
        {loading ? "Submitting Account Information" : "Account Registration"}
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
          <BarangayField 
            values={values}
            setValues={setValues}
          />
          <AddressField
            errors={errors}
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
            errors={errors}
            setErrors={setErrors}
            setLoading={setLoading}
            setShowModal={setShowModal}
          />
        </form>        
      }

    </div>
  )
}
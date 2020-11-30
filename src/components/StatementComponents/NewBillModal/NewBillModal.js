import { useState } from "react";
import { useAccountsContext } from "../../../contexts/AllAccountsContext";
import { useBillingDate } from "../../../contexts/BillingDateContext";
import { useConsumptionAmount } from "../../../hooks/useConsumptionAmount";
import "./style.css";
import { SubmitNewBillButton } from "./SubmitNewBillButton";



export const NewBillModal = ({payload, setPayload, setShowModal}) => {

  const { accounts } = useAccountsContext();
  const foundAccount = accounts.find(item => item.accountNumber === payload.accountNumber);
  const months = useBillingDate();
  const billingDate = months.find(item => item.value.periodTo === payload.periodTo);
  const charges = useConsumptionAmount({
    consumption: (payload.readingPresent - (foundAccount?.lastBillReading || 0))
  });
  const [checkOtherCharge, setCheckOtherCharge] = useState(false);

  function handleClose() {
    setPayload({
      ...payload,
      accountNumber: "",
      readingPresent: 0,
      chargeOthers: 0
    })
    setShowModal(false);
  };

  function handlePresentReading(e) {
    if (e.target.value.length <= 4 && e.target.value >= 0) {
      setPayload({
        ...payload,
        readingPresent: parseInt(e.target.value)
      })
    } else e.target.value.trim()
  };

  function handleChargeOthers(e) {
    if (e.target.value.length <= 5 && e.target.value >= 0) {
      setPayload({
        ...payload,
        chargeOthers: parseInt(e.target.value)
      })
    } else e.target.value.trim()
  };


  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});


 



  return (
    <div className="new-bill-modal">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">

          <div className="modal-header d-flex flex-column">
            <button 
              type="button" 
              className="btn-close"
              onClick={handleClose} 
              aria-label="Close"
              disabled={isLoading}>
            </button>
            <div className="row align-items-center justify-content-around w-100">
              <div className="col-md-4">
                <p className="m-0 p-0 text-center ">Account No.</p>
                <p className="m-0 p-0 text-center font-weight-bold font-l">
                  {foundAccount?.accountNumber || "-"}
                </p>
              </div>
              <p className="font-3xl m-0 p-0 text-center col-md-4">
                Statement of Account
              </p>
              <div className="col-md-4">
                <p className="m-0 p-0 text-center ">Period Covered</p>
                <p className="m-0 p-0 text-center font-weight-bold font-l">
                  {billingDate.short || "-"}
                </p>
              </div>
            </div>
          </div>

          <div className="modal-body">
            <div className="container">

              <div className="row bg-paper py-2 my-1">
                <div className="col-md-4">
                  <p className="m-0 p-0 text-center mb-1">Name</p>
                  <p className="m-0 p-0 text-center font-l">
                    {foundAccount?.fullName || "-"}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="m-0 p-0 text-center mb-1">Address</p>
                  <p className="m-0 p-0 text-center font-l">
                    {foundAccount?.address || "-"}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="m-0 p-0 text-center mb-1">Meter Serial No.</p>
                  <p className="m-0 p-0 text-center font-l">
                    {foundAccount?.meterSerialNumber || "-"}
                  </p>
                </div>
              </div>

              <div className="row bg-paper py-2 my-1 meter-reading-section">
                <div className="col-12">
                  <p className="m-0 p-0 text-center font-xl font-weight-bold">Meter Reading</p>
                </div>
                <div className="col-md-4">
                  <p className="m-0 p-0 text-center ">Previous</p>
                  <div className="d-flex flex-column justify-content-center ">
                    <p className="m-0 p-0 text-center font-l">
                      {`${foundAccount?.lastBillReading || "0"} Cu. M`}
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <p className="m-0 p-0 text-center ">Present</p>
                  <div className="row align-items-center justify-content-center ">
                    <div className="col-3 mr-1">
                      <div className="row align-items-center">
                        <input 
                          type="number" 
                          id="readingPresent" 
                          className="form-control form-control-sm text-right" 
                          aria-describedby="readingPresent"
                          value={payload.readingPresent || ""}
                          onChange={handlePresentReading}
                          disabled={isLoading}
                        />
                      </div>
                    </div>
                    <p className="m-0 p-0 font-weight-bold font-l col-3 ml-1">
                      Cu. M
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <p className="m-0 p-0 text-center ">Cu. Meters Used</p>
                  <div className="d-flex flex-column justify-content-center ">
                    <p className="m-0 p-0 text-center font-l">
                      {`${(payload.readingPresent - foundAccount?.lastBillReading) > 0 ? (payload.readingPresent - foundAccount?.lastBillReading) : "0"} Cu. M`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row bg-paper pt-1 mt-1 pb-0 mb-0">
                <div className="col-12">
                  <p className="m-0 p-0 my-1 text-center font-xl font-weight-bold">Consumption</p>
                </div>
                <div className="col-md-4">
                  <p className="m-0 p-0 text-center mb-1">Charges</p>
                  <div className="col-md-10 ml-auto font-l">
                    <p className="m-0 p-0 text-justify">
                      0 to 10 Cu. Meters
                    </p>
                    <p className="m-0 p-0 text-justify">
                      In Excess of 10 Cu. Meters
                    </p>

                  </div>
                </div>
                <div className="col-md-4">
                  <p className="m-0 p-0 text-center mb-1">Rate</p>
                  <div className="row font-l">
                    <div className="col-12 d-flex justify-content-center">
                      <p className="m-0 p-0 text-right pr-3 col-6">
                        Php
                      </p>
                      <p className="m-0 p-0 text-left col-6">
                        50.00
                      </p>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <p className="m-0 p-0 text-right pr-3 col-6">
                        Php
                      </p>
                      <p className="m-0 p-0 text-left col-6">
                        11.00 / Cu. M
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <p className="m-0 p-0 text-center mb-1">Amount</p>
                  <div className="row font-l">
                    <div className="col-10 d-flex justify-content-center">
                      <p className="m-0 p-0 text-right pr-4 font-weight-bold col-5">
                        Php
                      </p>
                      <p className="m-0 p-0 text-right pl-2 font-weight-bold col-3">
                        50.00
                      </p>
                    </div>
                    <div className="col-10 d-flex justify-content-center">
                      <p className="m-0 p-0 text-right pr-4 font-weight-bold col-5">
                        Php
                      </p>
                      <p className="m-0 p-0 text-right pl-2 font-weight-bold col-3">
                        {`${new Intl.NumberFormat().format(charges.chargeAboveTen)}.00`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row bg-paper other-charge-class">
                <div className="col-md-4 font-l">
                  <div className="col-md-10 form-check m-0 p-0 ml-auto">
                    <input 
                      className="form-check-input" 
                      type="checkbox" 
                      id="otherChargeCheck" 
                      value={checkOtherCharge}
                      defaultChecked={checkOtherCharge}
                      onChange={(e) => setCheckOtherCharge(!checkOtherCharge)}
                      disabled={isLoading}
                    />
                    <label className="form-check-label" htmlFor="otherChargeCheck">
                      Other Charges
                    </label>  
                  </div>
                </div>
                <div className="col-md-4 ml-auto">
                  <div className="d-flex flex-column justify-content-center ">
                    <p className="m-0 p-0 text-center">
                      -
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  {
                    checkOtherCharge ?
                    <div className="row align-items-center justify-content-center">
                      <p className="m-0 p-0 text-right pr-3 font-weight-bold col-2 font-l">
                        Php
                      </p>
                      <div className="col-3">
                        <div className="row align-items-center">
                          <input 
                            type="number" 
                            id="chargeOthers" 
                            className="form-control form-control-sm text-right" 
                            aria-describedby="passwordHelpInline"
                            value={payload.chargeOthers || 0} 
                            onChange={handleChargeOthers}
                            disabled={isLoading}
                          />
                        </div>
                      </div>
                    </div>
                    :
                    <div className="row">
                      <div className="col-10 d-flex justify-content-center font-l">
                        <p className="m-0 p-0 text-right pr-4 col-5">
                          Php
                        </p>
                        <p className="m-0 p-0 text-right pl-2 col-3">
                          0.00
                        </p>
                      </div>
                    </div>
                  }
                </div>
              </div>
              
              <div className="row">
                <p className="font-xxl m-0 p-0 col-md-4 text-center ml-auto font-weight-bold">
                  Total Amount Due
                </p>
                <p className="m-0 p-0 pl-2 font-weight-bold col-md-4 text-center font-xxl">
                  {`Php ${new Intl.NumberFormat().format(charges.total)}.00`}
                </p>
              </div>

            </div>
          </div>
          
          <div className="modal-footer">
            <p className="col-6 text-center text-danger font-weight-bold">
              <em>{errors.readingPresent && `*${errors.readingPresent}`}</em>
            </p>
            <button 
              type="button" 
              className="btn btn-outline-secondary col-2" 
              onClick={handleClose}
              disabled={isLoading}
            >
              Close
            </button>  
            <SubmitNewBillButton 
              payload={payload}
              account={foundAccount}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              errors={errors}
              setErrors={setErrors}
              handleClose={handleClose}
            />
          </div>

        </div>
      </div>
    </div>
  )
}
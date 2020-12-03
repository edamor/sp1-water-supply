import Loader from "../../components/Loader/Loader";
import { TestTable } from "../../components/TestTable/TestTable";
import { useFetch } from "../../hooks/useFetch";
import { TrashCan } from "../main/Accounts/SvgIcons";




export const TestPage = () => {

  const TOKEN = localStorage.getItem("token");
  const API = `/account-management/accounts`;
  const { data } = useFetch({
    endpoint: API,
    token: TOKEN
  });

  function viewAccountCallback(account) {
    console.log(account)
  };
  function deleteAccountCallback(account) {
    console.log(account)
  };

  const columns = [
    {
      id: "accountNumber",
      title: "Account No.",
      width: "18",
      className: "my-0 py-0"
    },
    {
      id: "fullName",
      title: "Name",
      width: "22",
      className: "my-0 py-0"
    },
    {
      id: "address",
      title: "Address",
      width: "15",
      className: "my-0 py-0"
    },
    {
      id: "lastBillReading",
      title: "Reading",
      width: "12.5",
      className: "my-0 py-0"
    },
    {
      id: "lastBillPeriodTo",
      title: "Month",
      width: "12.5",
      className: "my-0 py-0"
    },
    {
      id: "actions",
      title: "",
      width: "20",
      className: ""
    },
  ];

  const rows = [
    {
      id: "accountNumber",
      type: "string",
      className: "",
    },
    {
      id: "fullName",
      type: "string",
      className: "",
    },
    {
      id: "address",
      type: "barangay",
      className: "",
    },
    {
      id: "lastBillReading",
      type: "number",
      className: "text-center",
    },
    {
      id: "lastBillPeriodTo",
      type: "longDate",
      className: "text-center",
    },
    {
      id: "actions",
      type: "action",
      className: "text-center",
      actions: [
        {
          label: "View",
          className: "btn-primary px-2 mx-1",
          callback: viewAccountCallback
        },
        {
          label: <TrashCan />,
          className: "btn-danger mx-1",
          callback: deleteAccountCallback
        }
      ]
    }
  ];
  

  return (
    <div className="container h-100">
      <p className="display-5 text-center py-3">
        Testing Page
      </p>
        {
          !data ?
          <div className="row py-4 h-50">
            <Loader />
          </div>
          :
          <div className="row pt-2">
            <div className="col-12 col-md-10 m-auto">
              <TestTable 
                columns={columns}
                rows={rows}
                data={data}
              />
            </div>
          </div>
        }
      </div>
  )
}
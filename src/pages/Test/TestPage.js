import { DataTable } from "../../components/DataTable/DataTable";
import Loader from "../../components/Loader/Loader";
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
      width: "17",
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
      width: "16",
      className: "my-0 py-0"
    },
    {
      id: "lastBillReading",
      title: "Reading",
      width: "13",
      className: "my-0 py-0"
    },
    {
      id: "lastBillPeriodTo",
      title: "Month",
      width: "13",
      className: "my-0 py-0"
    },
    {
      id: "actions",
      title: "",
      width: "19",
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
      className: "",
    },
    {
      id: "lastBillPeriodTo",
      type: "longDate",
      className: "",
    },
    {
      id: "actions",
      type: "action",
      className: "text-center",
      actions: [
        {
          label: `${window.innerWidth < 768 ? "View Details" : "View"}`,
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
              <DataTable 
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
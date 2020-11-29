

export const ImportantNotes = () => {

  return (
    <div className="col-md-10 mr-auto py-2">
      <span className="font-weight-bold">
        Important Notes: 
      </span>
      <ul>
        <li>
          Accounts that have already been billed for the period selected, will be filtered from the list.
        </li>
        <li>
          Only the accounts that have not been billed for the period selected will be displayed.
        </li>
        <li>
          The statement period options are dependent on the current month when issuing new statements.
        </li>
        <li>
            These points are here to prevent errors and maintain the integrity of the statements that are being issued.
        </li>
      </ul>
    </div>
  )
}
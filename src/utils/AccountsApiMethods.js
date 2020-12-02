
const DOMAIN = "https://sp1-blue-sparrow.herokuapp.com/api/v1";

export const deleteAccountApi = async (token, accountNumber) => {
  const ENDPOINT = "/account-management/accounts/delete/";
  let response, data;

  try {
    response = await fetch(DOMAIN + ENDPOINT + accountNumber, {
      method: "DELETE",
      headers: { "x-auth-token": token}
    })
  } catch (error) {
    console.log(error)
    response = "error"
  }

  try {
    if (response !== "error") {
      data = await response.text()
    }
  } catch (error) {
    console.log(error)
    data = "error"
  }

  return data
}
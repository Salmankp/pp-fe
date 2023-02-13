import { post, get } from "../utils/ajax";
import { error, success } from "../utils/toastr";

export const addBank = data => async dispatch => {
  try {
    const data1 = await post(
      `${process.env.REACT_APP_API_URL}/api/v1/bank_account/addAccount`,
      { values: data }
    );
    if (data1.status === 200) {
      success("Account Added Sucessfuly");
      return await dispatch(getBank());
    }
  } catch (error) {
    console.log("Error Adding Account");
    return error;
  }
};

export const getBank = () => async dispatch => {
  try {
    const { data } = await get(
      `${process.env.REACT_APP_API_URL}/api/v1/bank_account/getAccount`
    );

    const optionsData = data.data.map(v => ({
      value: v._id,
      label: v.accountHolderName + " , " + v.bankName + " , " + v.accountType
    }));
    console.log(optionsData);
    return optionsData;
  } catch (error) {
    return error;
  }
};

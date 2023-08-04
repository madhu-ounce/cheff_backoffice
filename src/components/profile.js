import { useSelector, useDispatch } from "react-redux";
const ProfileComponent = () => {
    const porfile = useSelector((state) =>  state.logInfo )
    return (
        <div className="w_500">
            <table className="table_1 ">
                <tr>
                    <td> Name </td>
                    <td> {porfile.firstName} </td>
                </tr>
                <tr>
                    <td> Mobile Number </td>
                    <td> {porfile.mobile} </td>
                </tr>
                <tr>
                    <td> balance </td>
                    <td> {porfile.balance} </td>
                </tr>
                <tr>
                    <td> email </td>
                    <td> {porfile.email} </td>
                </tr>
                <tr>
                    <td> address </td>
                    <td> {porfile.address} </td>
                </tr>
            </table>
        </div>
    )
}

export default ProfileComponent;
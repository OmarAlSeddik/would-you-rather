// redux imports //
import { useSelector } from "react-redux";
import { RootState } from "../store";
import useAvatar from "./useAvatar";

const useUser = () => {
  const loggedInUserId = useSelector(
    (state: RootState) => state.auth.loggedInUserId
  );
  const userbase = useSelector((state: RootState) => state.userbase);
  const loggedInUser = userbase.find((user: any) => user.id === loggedInUserId);

  const avatar = useAvatar(loggedInUser.avatar);

  return [loggedInUser, avatar];
};

export default useUser;

// This hook returns: //
// 1. The logged in user's data object from the database. //
// 2. The logged in user's avatar component. //

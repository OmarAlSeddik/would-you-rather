// redux imports //
import { useSelector } from "react-redux";
import { RootState } from "../store";

const useUser = () => {
  const loggedInUserId = useSelector(
    (state: RootState) => state.auth.loggedInUserId
  );
  const userbase = useSelector((state: RootState) => state.userbase);
  const loggedInUser = userbase.find((user: any) => user.id === loggedInUserId);

  const avatars = useSelector((state: RootState) => state.avatars);
  const loadedAvatarObject = avatars.find(
    (avatarObject) => avatarObject.value === loggedInUser.avatar
  );
  const avatar = loadedAvatarObject?.label;

  return [loggedInUser, avatar];
};

export default useUser;

// This hook returns: //
// 1. The logged in user's data object from the database. //
// 2. The logged in user's avatar (pre-loaded). //

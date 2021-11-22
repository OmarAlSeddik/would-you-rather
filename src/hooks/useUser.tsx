import { useSelector } from "react-redux";
import { RootState } from "../store";

const useUser = () => {
  // Loads the user object //
  const loggedInUserId = useSelector(
    (state: RootState) => state.auth.loggedInUserId
  );
  const userbase = useSelector((state: RootState) => state.userbase);
  const loggedInUser = userbase.find((user: any) => user.id === loggedInUserId);

  // Loads the user avatar //
  const avatars = useSelector((state: RootState) => state.avatars);
  const loadedAvatarObject = avatars.find(
    (avatarObject) => avatarObject.value === loggedInUser.avatar
  );
  const avatar = loadedAvatarObject?.label;

  return [loggedInUser, avatar];
};

export default useUser;

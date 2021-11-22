// redux imports //
import { useSelector } from "react-redux";
import { RootState } from "../store";

const useAvatar = (avatarValue: string) => {
  const avatars = useSelector((state: RootState) => state.avatars);
  const loadedAvatarObject = avatars.find(
    (avatarObject) => avatarObject.value === avatarValue
  );
  const avatar = loadedAvatarObject?.label;

  return avatar;
};

export default useAvatar;

// This hook receives an avatar's string value as an argument and returns the respective avatar. //

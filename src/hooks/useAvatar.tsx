// svg imports //
import { ReactComponent as Avatar1 } from "../assets/avatar1.svg";
import { ReactComponent as Avatar2 } from "../assets/avatar2.svg";
import { ReactComponent as Avatar3 } from "../assets/avatar3.svg";
import { ReactComponent as Avatar4 } from "../assets/avatar4.svg";
import { ReactComponent as Avatar5 } from "../assets/avatar5.svg";
import { ReactComponent as Avatar6 } from "../assets/avatar6.svg";
import { ReactComponent as Avatar7 } from "../assets/avatar7.svg";
import { ReactComponent as Avatar8 } from "../assets/avatar8.svg";
import { ReactComponent as Avatar9 } from "../assets/avatar9.svg";
import { ReactComponent as Avatar10 } from "../assets/avatar10.svg";
import { ReactComponent as Avatar11 } from "../assets/avatar11.svg";
import { ReactComponent as Avatar12 } from "../assets/avatar12.svg";

const useAvatar = (avatarValue: string) => {
  const avatars = [
    { value: "1", label: <Avatar1 /> },
    { value: "2", label: <Avatar2 /> },
    { value: "3", label: <Avatar3 /> },
    { value: "4", label: <Avatar4 /> },
    { value: "5", label: <Avatar5 /> },
    { value: "6", label: <Avatar6 /> },
    { value: "7", label: <Avatar7 /> },
    { value: "8", label: <Avatar8 /> },
    { value: "9", label: <Avatar9 /> },
    { value: "10", label: <Avatar10 /> },
    { value: "11", label: <Avatar11 /> },
    { value: "12", label: <Avatar12 /> },
  ];

  const loadedAvatarObject = avatars.find(
    (avatarObject) => avatarObject.value === avatarValue
  );

  const avatar = loadedAvatarObject?.label;

  return avatar;
};

export default useAvatar;

// This hook receives an avatar's string value as an argument and returns the respective avatar component. //

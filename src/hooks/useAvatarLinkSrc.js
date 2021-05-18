import isUrl from "is-url";

const defaultAvatar = [
  "/assets/images/default-avatar/ava-1.png",
  "/assets/images/default-avatar/ava-2.png",
  "/assets/images/default-avatar/ava-3.png",
  "/assets/images/default-avatar/ava-4.png",
  "/assets/images/default-avatar/ava-5.png",
  "/assets/images/default-avatar/ava-6.png",
];

export const useAvatarLinkSrc = (sourceObject) => {
  const defaultAvatarIndex = Number(sourceObject.user_id) % Number(defaultAvatar.length);

  const link = isUrl(sourceObject.user_img_url)
    ? sourceObject.user_img_url
    : defaultAvatar[defaultAvatarIndex];

  return {
    link,
  };
};

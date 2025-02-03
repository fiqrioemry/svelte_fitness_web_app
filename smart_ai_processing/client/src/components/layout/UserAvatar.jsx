/* eslint-disable react/prop-types */
const UserAvatar = ({ avatar }) => {
  return (
    <div className="w-8 h-8  flex items-center justify-center">
      <img
        className="object-contain w-full h-full rounded-full border border-foreground"
        src={avatar || "https://avatar.iran.liara.run/public/47"}
        alt="https://avatar.iran.liara.run/public/47"
      />
    </div>
  );
};

export default UserAvatar;

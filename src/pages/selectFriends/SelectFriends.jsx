import { useContext } from "react";
import { SelectFriendsContext } from "../../context/selectFriendsProvider";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
import { Link } from "react-router";
const SelectFriends = () => {
  const { selectedFriends, setSelectedFriends } =
    useContext(SelectFriendsContext);
  console.log(setSelectedFriends, "selectedFriends");
  return (
    <div className="container mx-auto my-10">
      <div className="my-4">
            <select className="select">
              <option value="all" disabled selected>Filter timeline</option>
              <option value="text">Text</option>
              <option value="call">Call</option>
              <option value="Video">Video</option>
            </select>
          </div>
      {selectedFriends.length === 0 ? (
        
          <div className="flex flex-col justify-center items-center space-y-4">
            <h2 className=" text-2xl font-bold">No data found!</h2>
            <Link to="/">
              <button className="btn bg-[#244d3f] text-white">Go Back</button>
            </Link>
          </div>
      ) : (
        selectedFriends.map((friend, idx) => (
          <div
            key={idx}
            className=" p-3 mt-4 flex gap-3 items-center rounded-2xl backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Icon */}
            {friend.action === "Call" && <img src={callImg} className="w-8" />}
            {friend.action === "Text" && <img src={textImg} className="w-8" />}
            {friend.action === "Video" && (
              <img src={videoImg} className="w-8" />
            )}

            {/* Text */}
            <div>
              <p>
                {friend.action} with {friend.name}
              </p>
              <p className="text-sm text-gray-400">{friend.date}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectFriends;

import { useContext } from "react";
import { SelectFriendsContext } from "../../context/selectFriendsProvider";
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
const SelectFriends = () => {
  const { selectedFriends,setSelectedFriends }=useContext(SelectFriendsContext);
  console.log(setSelectedFriends,'selectedFriends');
  return <div className="container mx-auto my-10">

   {selectedFriends.map((friend, idx) => (
  <div key={idx} className=" p-3 mt-4 flex gap-3 items-center rounded-2xl backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
    
    {/* Icon */}
    {friend.action === "Call" && <img src={callImg} className="w-8" />}
    {friend.action === "Text" && <img src={textImg} className="w-8" />}
    {friend.action === "Video" && <img src={videoImg} className="w-8" />}

    {/* Text */}
    <div>
      <p>{friend.action} with {friend.name}</p>
      <p className="text-sm text-gray-400">{friend.date}</p>
    </div>

  </div>
))}

  </div>;
};

export default SelectFriends;

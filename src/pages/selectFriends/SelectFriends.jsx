import { useContext, useState } from "react";
import { SelectFriendsContext } from "../../context/selectFriendsProvider";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
import { Link } from "react-router";

const SelectFriends = () => {
  const { selectedFriends } = useContext(SelectFriendsContext);


  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");


  const filteredFriends = selectedFriends.filter(
    (friend) =>
      (filter === "all" || friend.action === filter) &&
      friend.name.toLowerCase().includes(search.toLowerCase())
  ).sort((a,b)=>new Date(b.date)-new Date(a.date));

  return (
    <div className="container mx-auto my-10">


      <div className="flex justify-between gap-3 my-4">
       

        <select
          className="select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
         <input
          type="text"
          placeholder="Search..."
          className="input input-bordered"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>


      {filteredFriends.length === 0 ? (
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="text-2xl font-bold">No data found!</h2>
          <Link to="/">
            <button className="btn bg-[#244d3f] text-white">
              Go Back
            </button>
          </Link>
        </div>
      ) : (

        filteredFriends.map((friend, idx) => (
          <div
            key={idx}
            className="p-3 mt-4 flex gap-3 items-center rounded-2xl backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
           
            {friend.action === "Call" && <img src={callImg} className="w-8" />}
            {friend.action === "Text" && <img src={textImg} className="w-8" />}
            {friend.action === "Video" && <img src={videoImg} className="w-8" />}

       
            <div>
              <p>
                {friend.action} with <b>{friend.name}</b>
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
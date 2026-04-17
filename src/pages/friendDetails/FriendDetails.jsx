import React, { useContext } from "react";
import { useParams } from "react-router";
import useFriends from "../../hooks/useFriends";
import { SelectFriendsContext } from "../../context/selectFriendsProvider";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { RiInboxArchiveLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoMdText } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { toast } from "react-toastify";

const FriendDetails = () => {
  const { id } = useParams();
  // console.log(params);
  const { friends, loading } = useFriends();

  const isFriendExist = friends.find((friend) => String(friend.id) === id);
  console.log(isFriendExist);

  const { selectedFriends, setSelectedFriends } =
    useContext(SelectFriendsContext);
  console.log(selectedFriends);
  if (loading) {
    return (
      <div className="h-[60vh] flex justify-center items-center">
        loading.......
      </div>
    );
  }

  const handleSelectedFriends = (type) => {
    const alreadyExists = selectedFriends.find(
      (friend) => friend.name === isFriendExist.name && friend.action === type,
    );

    if (alreadyExists) {
      alert("Already Added");
      return;
    }

    const newItem = {
      name: isFriendExist.name,
      action: type,
      date: new Date().toDateString(),
    };

    setSelectedFriends([...selectedFriends, newItem]);
    toast.success(`${type} scheduled with ${isFriendExist.name}`);
  };

  return (
    <div className="container mx-auto md:flex justify-between items-center gap-5 my-10">
      <div className="space-y-5">
        <div className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border flex flex-col justify-center items-center border-zinc-100 p-4 rounded-xl space-y-2">
          <img
            className="w-16 h-16  rounded-full"
            src={isFriendExist.picture}
            alt=""
          />
          <h2 className="text-lg font-bold">{isFriendExist.name}</h2>
          <p
            className={`px-4 rounded-full text-white ${isFriendExist.status === "on-track" && "bg-orange-500"} ${isFriendExist.status === "almost due" && "bg-green-500"}  ${isFriendExist.status === "overdue" && "bg-red-500"} `}
          >
            {isFriendExist.status}
          </p>
          <div className="flex gap-2 items-center">
            {isFriendExist.tags.map((tag, idx) => (
              <p
                key={idx}
                className="bg-green-500 px-2 text-green-950  rounded-full "
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="text-center text-zinc-500">{isFriendExist.bio}</p>
          <p className="text-center text-zinc-500">{isFriendExist.email}</p>
        </div>
        <div className=" flex flex-col items-center space-y-3">
          <button className="btn w-full backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
           <HiOutlineBellSnooze />
 Snooze 2 Week
          </button>
          <button className="btn w-full backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
           <RiInboxArchiveLine />
 Archive
          </button>
          <button className="btn w-full backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-red-500">
           <MdDeleteOutline />
 Delete
          </button>
        </div>
      </div>

      <div className="space-y-5">
        <div className="grid md:grid-cols-3 gap-5">
          <div className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100 px-12 py-6 text-center rounded-xl">
            <h2 className="text-2xl font-bold">
              {isFriendExist.days_since_contact}
            </h2>
            <p className="text-xl font-semibold text-zinc-500">
              Days Since Contact
            </p>
          </div>
          <div className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100 px-12 py-6 text-center rounded-xl">
            <h2 className="text-2xl font-bold">{isFriendExist.goal}</h2>
            <p className="text-xl font-semibold text-zinc-500">Goal</p>
          </div>
          <div className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100 px-12 py-6 text-center rounded-xl">
            <h2 className="text-2xl font-bold">
              {isFriendExist.next_due_date}
            </h2>
            <p className="text-xl font-semibold text-zinc-500">Next Due</p>
          </div>
        </div>
        <div className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border flex justify-between items-center border-zinc-100 p-4 text-center rounded-xl">
          <div>
            <h2 className="text-2xl font-bold">Relationship Goal</h2>
            <p className="text-xl font-semibold text-zinc-500">
              Connect every{" "}
              <span className="text-black font-bold">{isFriendExist.goal}</span>
            </p>
          </div>
          <button className="btn">Edit</button>
        </div>

        <div className="border border-zinc-100 shadow-xl p-4  rounded-xl">
          <h2 className="text-xl font-bold mb-3">Quick Check-In</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              onClick={() => handleSelectedFriends("Call")}
              className="flex flex-col items-center  backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100  px-12 py-6 text-center rounded-xl cursor-pointer"
            >
              <h2 className="text-2xl font-bold"><FiPhoneCall /></h2>
              <p className="text-xl font-semibold text-zinc-500">Call</p>
            </div>
            <div
              onClick={() => handleSelectedFriends("Text")}
              className="flex flex-col items-center  backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100  px-12 py-6 text-center rounded-xl cursor-pointer"
            >
              <h2 className="text-2xl font-bold"><IoMdText />
</h2>
              <p className="text-xl font-semibold text-zinc-500">Text</p>
            </div>
            <div
              onClick={() => handleSelectedFriends("Video")}
              className="flex flex-col items-center backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100  px-12 py-6 text-center rounded-xl cursor-pointer"
            >
              <h2 className="text-2xl font-bold"><CiVideoOn />
</h2>
              <p className="text-xl font-semibold text-zinc-500">Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;

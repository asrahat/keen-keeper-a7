import { useContext } from "react";
import { SelectFriendsContext } from "../../context/selectFriendsProvider";
import callImg from '../../assets/call.png'
const SelectFriends = () => {
  const { selectedFriends }=useContext(SelectFriendsContext);
  console.log(selectedFriends,'selectedFriends');
  return <div className="container mx-auto my-10">

    {selectedFriends.length === 0 ? (
        <h2 className="font-bold text-4xl text-center my-5">
          No installed apps found!
          
        </h2>
      ) : (
        selectedFriends.map((friend, ind) => {
          return (
            <div
              key={ind}
              className="backdrop-blur-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-zinc-100  px-12 py-6 text-center rounded-xl cursor-pointer flex items-center gap-5 mt-4"
            >
                <img src={callImg} alt="" />
                <div>
                    <p>Text <span>with {friend.name}</span></p>
                </div>
            </div>
          );
        })
)}

  </div>;
};

export default SelectFriends;

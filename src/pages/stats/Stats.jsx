import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { SelectFriendsContext } from "../../context/selectFriendsProvider";

const Stats = () => {
  const { selectedFriends } = useContext(SelectFriendsContext);
  const callCount = selectedFriends.filter((f) => f.action === "Call").length;
  const textCount = selectedFriends.filter((f) => f.action === "Text").length;
  const videoCount = selectedFriends.filter((f) => f.action === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#3b82f6" },
    { name: "Text", value: textCount, fill: "#10b981" },
    { name: "Video", value: videoCount, fill: "#f59e0b" },
  ];
  return (
   <div className="container mx-auto">
    <h2 className="text-5xl font-bold my-10">Friendship Analytics</h2>
     <div className="shadow p-10 rounded-md border border-slate-300 container mx-auto mb-10">
      <h2 className="font-semibold text-2xl mb-16 ">
        By Interaction Type
      </h2>
      <PieChart
        style={{
          width: "90%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
   </div>
  );
};

export default Stats;

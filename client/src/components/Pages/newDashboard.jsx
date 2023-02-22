import Calendar from "../MyCalendar";
import Forms from "../Forms";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <main className="dash-container">
      <div className="calendar inline-block">
      <h2 className=" bg-neutral-800 border-radius px-1 text-lg text-amber-500">Due Date<span className="text-red-700">*</span> </h2>
      <div className="text-gray-700">
         <Calendar  />
      </div>
      </div>
    <div className="flex flex-col">
      <Forms />
    </div>
    <div>
      
    </div>
    </main>
  </div>
  );
};

export default Dashboard;

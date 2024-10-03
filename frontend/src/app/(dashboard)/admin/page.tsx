import AttendanceGraph from "@/components/AttendanceGraph"
import CountChart from "@/components/CountChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-6 p-6'>
      {/* Left Side */}
      <div className="w-full lg:w-2/3 space-y-6"> {/*w-full lg:w-2/3 flex flex-col gap-8 / space-y-6*/}
        <h1 className="text-2xl font-bold mb-4">User Statistics</h1>
        {/* User Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="accounting" />
          <UserCard type="registrar" />
          <UserCard type="parent" />
          {/* You can easily add more UserCards here */}
        </div>

        {/* Middle Charts */}
        <div className="flex flex-col gap-4 lg:flex-row ">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceGraph />
          </div>
        </div>
        {/* Bottom Charts */}
        <div className="">
          <h2>Buttom Chart</h2>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-full lg:w-1/3 bg-gray-100 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <p>Right side content goes here.</p>
      </div>
    </div>
  )
}

export default AdminPage
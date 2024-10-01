import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4'>
      {/* Left Side */}
      <div className="w-full lg:w-2/3">
      {/* User Card */}
      <div className="flex justify-between gap-4">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="accounting"/>
        <UserCard type="registrar"/>
        <UserCard type="parent"/>
      </div>
      </div>
      {/* Right Side */}
      <div className="w-full lg:w-1/3">Right Side</div>
    </div>
  )
}

export default AdminPage
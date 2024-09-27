import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Search Bar */}
      <div className='hidden md:flex items-center gap-1 text-sm rounded-full ring-[1.5px] ring-gray-300 px-3'>
        <Image src='/search.png' alt='Search Icon' width={24} height={24} />
        <input type='text' placeholder='Search' className='w-[200px] p-2 bg-transparent outline-none'/>
      </div>
      {/* Icon and User */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src='/message.png' alt='User Icon' width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src='/announcement.png' alt='Announcement Icon' width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-green-500 text-white text-sm">1</div>
        </div>
        {/* Simplified Version if needed <div className="relative">
          <Image src='/announcement.png' alt='Announcement Icon' width={20} height={20} />
          <div className="absolute -top-3 -right-3 h-5 w-5 flex items-center justify-center bg-green-500 text-white text-xs rounded-full">1</div>
        </div> */}
        <div className="flex flex-col">
          <span className='text-lg leading-3 font-medium'>Gemuel Sampayan</span> {/* Change to this if not looking good in my Side <div className="text-gray-600">User Name</div> */}
          <span className='text-[12px] text-gray-600 text-right'>Software Engineer</span>
        </div>
        <Image src='/avatar.png' alt='Avatar' width={36} height={36} className='rounded-full' />
      </div>
    </div>
  );
}

export default Navbar;
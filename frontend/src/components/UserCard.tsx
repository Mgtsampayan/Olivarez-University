import Image from "next/image"

const UserCard = ({ type }: { type: string }) => {
    const getBackgroundColor = () => {
        switch (type) {
            case 'student':
                return 'bg-blue-100';
            case 'teacher':
                return 'bg-yellow-100';
            case 'accounting':
                return 'bg-orange-100';
            case 'registrar':
                return 'bg-green-100';
            case 'parent':
                return 'bg-purple-100';
            default:
                return 'bg-gray-100';
        }
    }

    return (
        <div className={`${getBackgroundColor()} rounded-xl p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300`}>
            <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                <span className="text-[12px] bg-white rounded-lg py-1">2024/08</span>
                <Image src="/more.png" alt="" width={12} height={12} />
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-1">123</h1>
                <h2 className="text-xs font-medium capitalize truncate">{type}</h2>
            </div>
        </div>
    )
}

export default UserCard
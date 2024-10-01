import Image from "next/image"

const UserCard = ({ type }: { type: string }) => {
    const getBackgroundColor = () => {
        switch (type) {
            case 'student':
                return 'bg-blue-300';
            case 'teacher':
                return 'bg-yellow-300';
            case 'accounting':
                return 'bg-orange-300';
            case 'registrar':
                return 'bg-green-300';
            case 'parent':
                return 'bg-purple-300';
            default:
                return 'bg-gray-300';
        }
    }

    return (
        <div className={`${getBackgroundColor()} rounded-xl p-3 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300`}>
            <div className="flex justify-between items-center text-xs text-gray-600 mb-2">
                <span className="text-[12px] bg-white rounded-lg py-1 text-green-600">2024/08</span>
                <Image src="/more.png" alt="" width={12} height={12} />
            </div>
            <div className="text-center">
                <h1 className="text-xl font-semibold mb-1">123</h1>
                <h2 className="text-sm font-extrabold capitalize truncate">{type}</h2>
            </div>
        </div>
    )
}

export default UserCard
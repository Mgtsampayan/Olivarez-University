import Link from "next/link";
import Image from "next/image";
import OASIS from  "../../../public/OASIS.png";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";


export default function DashboardLayout({
    // children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen flex">
            {/* Left Sidebar */}
            <div className="w-[16%] md:w-[10%] lg:w-[18%] xl:w-[16%] p-4"> {/* If need the background use this bg-green-300 */}
                <Link href="/" className="flex items-center justify-center gap-2">
                <Image  src={OASIS} alt="logo" width={40} height={40} />
                <span className="hidden lg:block">ORSIS PORTAL</span> {/* Olivarez Records and Student Information System */}
                </Link>
                <Menu/>
            </div>
            {/* Main Content */}
            <div className="w-[90%] md:w-[90%] lg:w-[82%] xl:w-[85%] bg-gray-100"> {/* If need the background use this bg-green-200 */}
                <Navbar/>
                Right Side
            </div>
        </div>
    );
}
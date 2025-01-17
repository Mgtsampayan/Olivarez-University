import React from 'react';
import Link from 'next/link';
import { Home, Users, User, BookOpen, Glasses, BookMarked, GraduationCap, ClipboardList, FileText, CalendarCheck, Calendar, MessageSquare, Bell, DollarSign, BarChart2, UserCircle, Settings, LogOut } from 'lucide-react';

type UserRole = 'admin' | 'teacher' | 'student' | 'parent' | 'accounting' | 'registrar';

interface MenuItem {
    icon: React.ReactNode;
    label: string;
    href: string;
    visible: UserRole[];
}

interface MenuSection {
    title: string;
    items: MenuItem[];
}

const menuItems: MenuSection[] = [
    {
        title: "MENU",
        items: [
            {
                icon: <Home size={25} />,
                label: "Home",
                href: "/",
                visible: ["admin", "teacher", "student", "parent", "accounting", "registrar"],
            },
            {
                icon: <Users size={25} />,
                label: "Teachers",
                href: "/teacher",
                visible: ["admin", "teacher"],
            },
            {
                icon: <User size={25} />,
                label: "Students",
                href: "/student",
                visible: ["admin", "teacher"],
            },
            {
                icon: <User size={25} />,
                label: "Parents",
                href: "/parent",
                visible: ["admin", "teacher"],
            },
            {
                icon: <BookOpen size={25} />,
                label: "Subjects",
                href: "/subjects",
                visible: ["admin"],
            },
            {
                icon: <Glasses size={25} />,
                label: "Classes",
                href: "/classes",
                visible: ["admin", "teacher"],
            },
            {
                icon: <BookMarked size={25} />,
                label: "Lessons",
                href: "/lessons",
                visible: ["admin", "teacher"],
            },
            {
                icon: <GraduationCap size={25} />,
                label: "Exams",
                href: "/exams",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <ClipboardList size={25} />,
                label: "Assignments",
                href: "/assignments",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <FileText size={25} />,
                label: "Results",
                href: "/results",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <CalendarCheck size={25} />,
                label: "Attendance",
                href: "/attendance",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <Calendar size={25} />,
                label: "Events",
                href: "/events",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <MessageSquare size={25} />,
                label: "Messages",
                href: "/messages",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <Bell size={25} />,
                label: "Announcements",
                href: "/announcements",
                visible: ["admin", "teacher", "student", "parent"],
            },
            {
                icon: <DollarSign size={25} />,
                label: "Accounting",
                href: "/accounting",
                visible: ["admin", "accounting"],
            },
            {
                icon: <BarChart2 size={25} />,
                label: "Reports",
                href: "/reports",
                visible: ["admin", "teacher", "accounting", "registrar"],
            },
        ],
    },
    {
        title: "OTHER",
        items: [
            {
                icon: <UserCircle size={25} />,
                label: "Profile",
                href: "/profile",
                visible: ["admin", "teacher", "student", "parent", "accounting", "registrar"],
            },
            {
                icon: <Settings size={25} />,
                label: "Settings",
                href: "/settings",
                visible: ["admin", "teacher", "student", "parent", "accounting", "registrar"],
            },
            {
                icon: <LogOut size={25} />,
                label: "Logout",
                href: "/logout",
                visible: ["admin", "teacher", "student", "parent", "accounting", "registrar"],
            },
        ],
    },
];

const Menu: React.FC = () => {
    return (
        <div className="mt-5 text-lg">
            <div className="lg:flex lg:flex-col">
                {menuItems.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-6">
                        <h2 className="hidden lg:block text-gray-800 font-bold px-4">{section.title}</h2>
                        <div className="flex flex-row flex-wrap lg:flex-col gap-4 p-4 justify-center sm:justify-center">
                            {section.items.map((item, itemIndex) => (
                                <Link
                                    href={item.href}
                                    key={itemIndex}
                                >
                                    <div className="flex items-center justify-center lg:justify-start w-16 lg:w-full py-2 px-3 rounded-lg hover:bg-green-100 transition-colors duration-200">
                                        <div className="flex items-center justify-center w-8 h-8 text-green-700">
                                            {item.icon}
                                        </div>
                                        <span className="hidden lg:inline ml-3 text-gray-700">{item.label}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 3000,
        fill: "white",
    },
    {
        name: 'Girls',
        count: 1500,
        fill: '#a5c90f',
    },
    {
        name: 'Boys',
        count: 1500,
        fill: '#FFA500',
    },
    
];

const CountChart = () => {
    return (
        <div className="bg-white rounded-xl w-full h-full p-4">
            {/* Title */}
            <div className="flex justify-between items-center">
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            {/* Chart */}
            <div className="w-full h-[75%]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar
                            background
                            dataKey="count"
                        />
                        {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            {/* Button */}
            <div className="flex justify-center gap-16">
                {/* Boys */}
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-OrangeStudent rounded-full" />
                    <h1 className="font-bold">1,500</h1>
                    <h1 className="text-sm text-gray-400">Boys (55%)</h1>
                </div>
                {/* Girls */}
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-YellowTeacher rounded-full" />
                    <h1 className="font-bold">1,500</h1>
                    <h1 className="text-sm text-gray-400">Girls (45%)</h1>
                </div>
            </div>
        </div>
    );
}

export default CountChart;
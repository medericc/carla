"use client"; 
// app/components/Stats.tsx
import { motion } from 'framer-motion';

const statsData = [
  { label: 'Points', value: 1500 },
  { label: 'Victoire', value: 200 },
  { label: 'Défaite', value: 50 },
  { label: 'Points', value: 1500 },
  { label: 'Points', value: 1500 },
  { label: 'Points', value: 1500 },
  { label: 'Points', value: 1500 },
];

const Stats = () => {
  return (
    <div className="flex items-center">
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.1, originX: 0 }}
          className="bg-gray-200 w-40 rounded-lg p-4 m-2 text-center cursor-pointer"
        >
          <p className="text-xl font-bold">{stat.value}</p>
          <p className="text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;

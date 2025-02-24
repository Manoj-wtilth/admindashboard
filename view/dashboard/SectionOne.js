import Box from '@/components/Box/Box';
import LineChart from '@/components/Chart/Line-Chart';
import { IoPersonCircle } from 'react-icons/io5';

const SectionOne = () => {
    return (
        <div style={{ marginBottom: '20px'}}>
            <div style={{ marginBottom: '20px'}}>
            <h3 style={{ fontWeight: 'bolder'}}>Today's Sales</h3>
            <h5>Sales Summary</h5>
            </div>
            <div className="flex gap-8">
                <Box
                    icon={IoPersonCircle}
                    value1="1,200"
                    value2="Users"
                    smallText="Last 30 days"
                    bgColor="bg-gray-100"
                />
                <Box
                    icon={IoPersonCircle}
                    value1="1,200"
                    value2="Users"
                    smallText="Last 30 days"
                    bgColor="bg-gray-100"
                />
                <Box
                    icon={IoPersonCircle}
                    value1="1,200"
                    value2="Users"
                    smallText="Last 30 days"
                    bgColor="bg-gray-100"
                />
                <Box
                    icon={IoPersonCircle}
                    value1="1,200"
                    value2="Users"
                    smallText="Last 30 days"
                    bgColor="bg-gray-100"
                />
                <LineChart/>
            </div>
            </div>
    )
}

export default SectionOne;
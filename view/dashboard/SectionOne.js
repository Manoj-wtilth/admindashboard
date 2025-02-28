import Box from '@/components/Box/Box';
import LineChart from '@/components/Chart/Line-Chart';
import { IoPersonCircle } from 'react-icons/io5';
import { CiExport } from "react-icons/ci";

const SectionOne = () => {
    return (
        <div>
            <div style={{ marginBottom: '20px', display: 'grid', gridTemplateColumns: '0.2fr 1fr'}}>
                <div>
                <h3 style={{ fontWeight: 'bolder'}}>Today's Sales</h3>
                <h5>Sales Summary</h5>
                </div>
            <button style={{
                display: 'flex',
                justifyContent: 'center',
            }}><div style={{display: 'flex'}}><CiExport size={20}/><p style={{marginLeft : '5px'}}>Export</p></div></button>
            </div>
            <div className="flex gap-8">
                <Box
                    icon={IoPersonCircle}
                    value1="$1k"
                    value2="Total Sales"
                    smallText="+10% from yesterday"
                    bgColor="#FFB6C1"
                />
                <Box
                    icon={IoPersonCircle}
                    value1="300"
                    value2="Total Orders"
                    smallText="+10% from yesterday"
                    bgColor="#FFD580"
                />
                <Box
                    icon={IoPersonCircle}
                    value1="5"
                    value2="Product sold"
                    smallText="+10% from yesterday"
                    bgColor="#90EE90"
                />
                <Box
                    icon={IoPersonCircle}
                    value1="8"
                    value2="New Customers"
                    smallText="+10% from yesterday"
                    bgColor="#CBC3E3"
                />
                <LineChart/>
            </div>
            </div>
    )
}

export default SectionOne;
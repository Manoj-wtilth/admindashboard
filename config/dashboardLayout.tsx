import { RxDashboard } from "react-icons/rx";
import { CiBellOn } from "react-icons/ci";
import { IoBodyOutline } from "react-icons/io5";
import { FaRegBuilding, FaChartLine } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { PiSignOut } from "react-icons/pi";

const iconStyle = {
    display: 'inline',
}

const layoutComponents = [
    {
        id: 1,
        title: "Dashboard",
        icon: <RxDashboard size={20} style={iconStyle}/>,
    },
    {
        id: 2,
        title: "Notification",
        icon: <CiBellOn size={20} style={iconStyle}/>,
    },
    {
        id: 3,
        title: "Dealers",
        icon: <IoBodyOutline size={20} style={iconStyle}/>,
    },
    {
        id: 4,
        title: "Customer management",
        icon: <FaRegBuilding size={20} style={iconStyle}/>,
    },
    {
        id: 5,
        title: "Report",
        icon: <FaChartLine size={20} style={iconStyle}/>,
    },
    {
        id: 6,
        title: "Grievance",
        icon: <TiMessageTyping size={20} style={iconStyle}/>,
    },
    {
        id: 7,
        title: "Sign out",
        icon: <PiSignOut size={20} style={iconStyle}/>,
    },
]

export default layoutComponents;
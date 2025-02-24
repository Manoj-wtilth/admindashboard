import MultiChart from '@/components/Chart/Multi-Chart';
const SectionTwo = () => {
    return (
        <div style={{ marginBottom: '20px'}}>
            <div style={{ marginBottom: '20px'}}>
            <h3 style={{ fontWeight: 'bolder'}}>Total Revenue</h3>
            </div>
            <div className="flex gap-8">
            <MultiChart />
            </div>
        </div>
    )
}

export default SectionTwo;
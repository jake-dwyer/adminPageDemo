interface StatsCardProps {
    label: string;
    number: string;
    percentageChange: number;  
}

const StatsCard: React.FC<StatsCardProps> = ({ label, number, percentageChange }) => {
    return (
        <div className="bg-white text-center flex flex-col items-center font-geist">
            <h2 className="text-2xl font-medium tracking-tight">{label}</h2>
            <div className="mt-2 text-2xl font-medium tracking-tight">{number}</div>
            <div className="flex mt-2 items-center">
            <div className="flex items-center bg-positiveGreenBg" style={{padding: '2px 4px', borderRadius: '4px'}}>
            <p className="flex text-sm text-positiveGreen">
            <img className="mr-1" src="/up.svg" alt="Percent Up"/>
           {percentageChange}%
            </p>
            </div>
            <p className="ml-1 text-sm text-secondaryText">
                from last week
            </p>
            </div>
        </div>
    );
};

export default StatsCard;

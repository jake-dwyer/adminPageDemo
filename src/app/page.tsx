import Sidebar from './components/sideBar'
import StatsCard from './components/statsCard'
import UserTable from './components/userTable'

export default function Home() {
  const user = {
    id: 1,
    name: "John Doe",
    email: "jdoe@northeastern.edu",
    status: "Driver",
    seats: 3,
    group: "T",
    lastSignedIn: "05/01/24 - 23:23:12"
};

// Create an array with the same user repeated 10 times with unique IDs
const users = Array.from({ length: 10 }, (_, i) => ({ ...user, id: i + 1 }));

    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col items-center p-10" style={{ marginTop: '40px', marginLeft: '192px' }}>
                <div className="grid grid-cols-4 gap-20 w-full max-w-4xl">
                    <StatsCard label="Active Users" number="3,232" percentageChange={12.1} />
                    <StatsCard label="Total Groups" number="523" percentageChange={12.1} />
                    <StatsCard label="Unique POIs" number="345" percentageChange={12.1} />
                    <StatsCard label="Requests Sent" number="232" percentageChange={12.1} />
                </div>
                <UserTable users={users} />
            </div>
        </div>
    );
}


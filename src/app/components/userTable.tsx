interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    seats: number;
    group: string;
    lastSignedIn: string;
}

interface UserTableProps {
    users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
    if (!users || users.length === 0) {
        return <p>No users to display.</p>;
    }
    return (
        console.log(users),
        <div className="overflow-x-auto relative sm:rounded-lg font-geist m-20">
            <h2 className="text-2xl tracking-tight mb-2">Current Users</h2>
            <table className="w-full text-sm text-left text-primaryText">
                <thead className="text-xs font-medium text-primaryText bg-cardBackground">
                    <tr>
                        <th scope="col" className="py-3 px-6">Id</th>
                        <th scope="col" className="py-3 px-6">Image</th>
                        <th scope="col" className="py-3 px-6">Name</th>
                        <th scope="col" className="py-3 px-6">Email</th>
                        <th scope="col" className="py-3 px-6">Status</th>
                        <th scope="col" className="py-3 px-6">Seats</th>
                        <th scope="col" className="py-3 px-6">Group</th>
                        <th scope="col" className="py-3 px-6">Last Signed In</th>
                        <th scope="col" className="py-3 px-6">Admin Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="bg-white border-b">
                            <td className="py-4 px-6">{user.id}</td>
                            <td className="py-4 px-6">
                                <img src="/pfp.svg" alt="Profile" className="h-8 w-8 rounded-full" />
                            </td>
                            <td className="py-4 px-6">{user.name}</td>
                            <td className="py-4 px-6">{user.email}</td>
                            <td className="py-4 px-6">{user.status}</td>
                            <td className="py-4 px-6">{user.seats}</td>
                            <td className="py-4 px-6">{user.group}</td>
                            <td className="py-4 px-6">{user.lastSignedIn}</td>
                            <td className="py-4 px-6 flex">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500 mr-2">
                                <img src="/edit.svg" alt="Edit User" />
                                </a>
                                <a href="#" className="font-medium text-red-600 hover:text-red-500">
                                <img src="/delete.svg" alt="Remove User"/>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;

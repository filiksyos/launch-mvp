"use client"

export default function Dashboard() {
  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    subscription: 'Premium',
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-2">User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <h2 className="text-2xl font-bold mt-4 mb-2">Subscription</h2>
        <p>Status: {user.subscription}</p>
      </div>
    </div>
  );
}

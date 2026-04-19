import MainLayout from "../components/layouts/MainLayout";

const Dashboard = () => {

    const content= (
        <div className="Space-y-12 pb-20">
            <h1>Dashboard</h1>
        </div>
    );

    return <MainLayout content={content} />;
};

export default Dashboard;
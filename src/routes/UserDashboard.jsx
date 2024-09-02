import TopBar from "../components/TopBar"
import AdvisorList from "../components/userDashboard/AdvisorList"
import Header from "../components/userDashboard/Header"
import Videos from "../components/userDashboard/Videos"
function UserDashboard() {
  return (
    <>
      <TopBar />
      <Header/>
      <div className="flex flex-col p-4">
        <AdvisorList />
        <Videos/>
      </div>
    </>
  )
}

export default UserDashboard

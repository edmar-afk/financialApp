import TopBar from "../components/TopBar"
import AdvisorList from "../components/userDashboard/AdvisorList"
import Header from "../components/userDashboard/Header"
function UserDashboard() {
  return (
    <>
      <TopBar />
      <Header/>
      <div className="flex flex-col p-4">
        <AdvisorList/>
      </div>
    </>
  )
}

export default UserDashboard

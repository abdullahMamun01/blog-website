import usePortalContext from "../../hooks/usePortalContext"
import { PortalProvider } from "../../provider/PortalProvider"
import SearchPortal from "../modal/portal-modal/SearchPortal"
import Navbar from "./Navbar"


const Header = () => {
  const { isPortalOpen } = usePortalContext()

  return (
    <header>
      <Navbar />
      {isPortalOpen && <SearchPortal />}
    </header>

  )
}

export default Header
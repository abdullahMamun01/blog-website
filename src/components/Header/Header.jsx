
import { usePortalContext } from "../../hooks/usePortalContext"

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
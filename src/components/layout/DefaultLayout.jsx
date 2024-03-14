import { Outlet } from "react-router-dom"

import Footer from "../Footer"
import Header from "../Header/Header"


const DefaultLayout = () => {
    return (
        <>
            <Header />
            <main>
                <section className="container">
                    <Outlet />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout
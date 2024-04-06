import BlogList from "../components/blog/BlogList"
import SideContent from "../components/sideContent/SideContent"


const HomePage = () => {
    return (

        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <div className="space-y-3 md:col-span-5">
                <BlogList />
            </div>
            <div className="md:col-span-2 h-full w-full space-y-5">
                <SideContent />
            </div>

        </div>

    )
}

export default HomePage
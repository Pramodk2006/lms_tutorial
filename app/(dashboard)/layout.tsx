import { SideBar } from "./_components/sidebar";

const dashboardLayout = ({
    children
}:{children:React.ReactNode}) => {
    return (<div className="h-full">
        <div className="flex h-full w-56 flex-col inset-y-0 hover:bg-gray-800 fixed">
        <SideBar/>
        </div>
        {children}
    </div>  );
}
 
export default dashboardLayout;
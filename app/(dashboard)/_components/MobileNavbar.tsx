import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet"
import Sidebar from "./Sidebar";

const MobileNavbar = () => {
    return ( 
        <Sheet>
            <SheetTrigger className="md:hidden pr-4 opacity-75 transition">
                <Menu />
            </SheetTrigger>
            <SheetContent side={"left"} className="p-0 bg-white">
                <Sidebar/>
            </SheetContent>
        </Sheet>
     );
}
 
export default MobileNavbar;
import { NavLink } from "react-router-dom";

export const sidebarRoutes = (items, role) => {
    const SideBarItems = items.reduce((acc, item) => {
        if(item.path == "") {
            acc.push({
                key:item.name,
                label: <NavLink to={"/"}>{item.name}</NavLink>
            })
        }
        else if(item.path && item.name) {
            acc.push({
                key:item.name,
                label: <NavLink to={`${role}/${item.path}`}>{item.name}</NavLink>
            })
        }
        
        return acc;
    }, [])
    return SideBarItems;
}
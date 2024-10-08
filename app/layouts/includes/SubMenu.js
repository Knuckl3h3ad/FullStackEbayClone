"use client"

export default function SubMenu() {
    const menuItems = [
        { id: 1, name: 'Home'},
        { id: 2, name: 'Saved'},
        { id: 3, name: 'Electronics'},
        { id: 4, name: 'Motors'},
        { id: 5, name: 'Fashion'},
        { id: 6, name: 'Collectables & Art'},
        { id: 7, name: 'Sports'},
        { id: 8, name: 'Health & Beauty'},
        { id: 9, name: 'Industrial Equipment'},
        { id: 10, name: 'Home & Garden'},
        { id: 11, name: 'Sell'},
    ]
    return (
        <>
            <div id="SubMenu" className="items-center">
                <div className="flex justify-between w-full mx-auto max-w-[1200px]">
                    <ul
                        id="TopMenuLeft"
                        className="
                            flex
                            items-center
                            text-[13px]
                            text-[#555]
                            px-5
                            h-8
                            
                        "
                    >
                        {menuItems.map(item => (
                            <li key={item.id} className="px-4 hover:underline hover:text-blue-700 cursor-pointer font-sans font-medium">
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
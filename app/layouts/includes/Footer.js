"use client"

export default function Footer() {
    return (
        <>
            {/*-- needs to be updated --*/}
            <div id="Footer" className="border-t border-[#ccc] mt-20 px-2 bg-[#f1f1f1] h-[499px]">
                <div className="flex items-baseline justify-between w-full mx-auto min-w-[1005px] max-w-[1488px] h-[372px] py-10">
                    {/*-- buy -- css needs updating --*/}
                    <ul className="text-[118 118 118]">
                        <li className="font-bold hover:underline cursor-pointer text-[13px]">Buy</li>
                        <li className="text-[#6b6a6a] text-[12px] mt-1 py-1 text-xs hover:underline cursor-pointer">Registration</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">Bidding & buying help</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">Stores</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">eBay for Charity</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">Charity Shop</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">Seasonal Sales and events</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">eBay Gift Cards</li>
                    </ul>

                    {/*-- sell -- content and css needs updating --*/}
                    <ul className="text-[118 118 118]">
                        <li className="font-bold hover:underline text-[13px]">Sell</li>
                        <li className="text-[#6b6a6a] text-[12px] mt-1 py-1 text-xs hover:underline cursor-pointer">Start selling</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">How to sell</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">Business sellers</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">Affiliates</li>
                        <li className="mt-5 font-bold text-[13px]">Tools & apps</li>
                        <li className="text-[#6b6a6a] text-[12px] mt-1 py-1 text-xs hover:underline cursor-pointer">Developers</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">Security center</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">Site map</li>
                    </ul>

                    {/*-- middle area -- css needs updating --*/}
                    <ul className="text-[118 118 118]">
                        <li className="font-bold text-[13px]">eBay companies</li>
                        <li className="mt-1 py-1 text-xs text-[#6b6a6a] hover:underline cursor-pointer">TCGplayer</li>
                        <li className="font-bold text-[118 118 118] mt-5 text-[13px]">Stay connected</li>
                        <li className="py-1 text-xs text-[#6b6a6a] hover:underline cursor-pointer">Facebook</li>
                        <li className="py-1 text-xs text-[#6b6a6a] hover:underline cursor-pointer">Twitter</li>
                    </ul>

                    {/*-- about eBay -- content and css needs updating --*/}
                    <ul className="text-[118 118 118]">
                        <li className="font-bold hover:underline text-[13px]">About eBay</li>
                        <li className="text-[#6b6a6a] mt-1 py-1 text-xs hover:underline cursor-pointer">Company info</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">News</li>
                        <ul className="py-1 hover:underline cursor-pointer">
                            <li className="text-[#6b6a6a] text-xs">Deferred Prosecution Agreement with</li>
                            <li className="text-[#6b6a6a] text-xs">District of Massachusetts</li>
                        </ul>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">Investors</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">Careers</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">Diversity & Inclusion</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">Global Impact</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">Government relations</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">Advertise with us</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">Policies</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">Verified Rights Owner (veRO) Program</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">eCI License</li>
                    </ul>

                    {/*-- help/community -- content and css needs updating --*/}
                    <ul className="text-[118 118 118]">
                        <li className="font-bold hover:underline text-[13px]">Help & Contact</li>
                        <li className="text-[#6b6a6a] text-[12px] mt-1 py-1 text-xs hover:underline cursor-pointer">Seller Center</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">Contact Us</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">eBay Returns</li>
                        <li className="text-[#6b6a6a] text-[12px] py-1 text-xs hover:underline cursor-pointer">eBay Money Back Guarantee</li>
                        <li className="font-bold mt-5 hover:underline text-[13px]">Community</li>
                        <li className="text-[#6b6a6a] mt-1 py-1 text-xs hover:underline cursor-pointer">Announcements</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">eBay Community</li>
                        <li className="text-[#6b6a6a] py-1 text-xs hover:underline cursor-pointer">eBay for Business Podcast</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
"use client"

export default function Footer() {
    return (
        <>
            {/*-- needs to be updated --*/}
            <div id="Footer" className="border-t border-[#ccc] mt-20 px-2 bg-[#f1f1f1]">
                <div className="flex items-baseline justify-between w-full mx-auto max-w-[1200px] py-10">
                    {/*-- buy -- content and css needs updating --*/}
                    <ul className="text-gray-700">
                        <li className="font-bold hover:underline text-lg">Buy</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Registration</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">eBay Money Back Guarantee</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Bidding & buying help</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Stores</li>
                    </ul>

                    {/*-- sell -- content and css needs updating --*/}
                    <ul className="text-gray-700">
                        <li className="font-bold hover:underline text-lg">Sell</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Start selling</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Learn to sell</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Affiliates</li>
                    </ul>

                    {/*-- middle area -- css needs updating but content is complete --*/}
                    <ul className="text-gray-700">
                        <li className="font-bold text-lg">eBay companies</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer"><a href="https://www.tcgplayer.com/">TCGplayer</a></li>
                        <li className="font-bold text-lg">Stay connected</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><a href="https://www.facebook.com/ebay/">Facebook</a></li>
                        <li className="py-1 text-xs hover:underline cursor-pointer"><a href="https://x.com/eBay">Twitter</a></li>
                    </ul>

                    {/*-- about eBay -- content and css needs updating --*/}
                    <ul className="text-gray-700">
                        <li className="font-bold hover:underline text-lg">About eBay</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Company info</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">News</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Investors</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Carears</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Government relations</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Policies</li>
                    </ul>

                    {/*-- help/community -- content and css needs updating --*/}
                    <ul className="text-gray-700">
                        <li className="font-bold hover:underline text-lg">Help & Contact</li>
                        <li className="mt-2 py-1 text-xs hover:underline cursor-pointer">Registration</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">eBay Money Back Guarantee</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Bidding & buying help</li>
                        <li className="py-1 text-xs hover:underline cursor-pointer">Stores</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
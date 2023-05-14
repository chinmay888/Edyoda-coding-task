import Image from "next/image";
function Head(){
    return(
        <div className="flex flex-row h-[100px]">
            <div className="flex items-left mt-[2%] ml-[5%]">
                <Image className="h-[30px]"
                src="/images/EDYODA.png"
                width={160}
                height={50}/>
            </div>
            <div className="ml-[5%] mt-[1.8%] ">
            <select name="" className="border-hidden text-[16x]">
            <option value="">Courses</option>
            <option value="">Option A</option>
            <option value="">Option B</option>
            <option value="">Option C</option>
            </select>
            </div>

            <div className="ml-[5%] mt-[1.8%]">
            <select name="" className="border-hidden text-[16x]">
            <option value="">Programs</option>
            <option value="">Option A</option>
            <option value="">Option B</option>
            <option value="">Option C</option>
            </select>
            </div>

            <div className="mt-[2.3%] ml-[35%]">
                <Image
                src="/images/search.png"
                width={18}
                height={18}/>
            </div>
            <div className=" mt-[2%] ml-[3%]">
                <p className="text-[16px] font-normal">Log in</p>
            </div>
            <div className="mt-[1.5%] ml-[3%] ">
            <button class="bg-gradient-to-r from-[#0048FF] to-[#0096FF] text-white font-bold py-2 px-8 rounded-full">
             Join Now
            </button>
            </div>
        </div>
    )
}
export default Head;
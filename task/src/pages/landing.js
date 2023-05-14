import Head from "./header"
import bg from "../../public/images/bg.png"
import Image from "next/image";
import { Checkbox } from "@material-tailwind/react";
function case1(){
    document.getElementById("evt").innerHTML="-₹18,321";
    document.getElementById("evt1").innerHTML="₹179";
}
function case2(){
    document.getElementById("evt").innerHTML="-₹18,351";
    document.getElementById("evt1").innerHTML="₹149";
}
function case3(){
    document.getElementById("evt").innerHTML="-₹18,401";
    document.getElementById("evt1").innerHTML="₹99";
}
function Landing(){
    return(
        <div>
            <div>
            <Head/>  
            </div>
            <div className="relative h-[850px] mt-[-1%] flex flex-row" style={{ backgroundImage: `url(${bg.src})` }}>
                <div className="relative w-[60%] h-[85%] mt-[3%] ml-[8%]">
                    <div>
                       <p className="text-white font-semibold text-left text-[56px]">Access curated courses worth</p> 
                    </div>
                    <div>
                        <span className="text-white font-semibold text-left text-[56px] line-through decoration-red-400">₹ 18,500</span> 
                        <span className="ml-[2%] text-white font-semibold text-left text-[56px]">at just</span>
                        <span className="ml-[2%] font-semibold text-left text-[56px] text-[#0096FF]">₹ 99</span>
                        <span className="ml-[2%] text-white font-semibold text-left text-[56px]">per year!</span>
                    </div>
                    <div className="mt-[3%]">
                        <div className="flex flex-row">
                            <div>
                            <Image
                            width={50}
                            height={50}
                            src="/images/icon1.png"
                            />
                            </div>
                           <div className="ml-[8%] space-x-4">
                            <span className="font-semibold text-[32px] text-[#0096FF]">100+</span>
                            <span className="font-semibold text-[32px] text-white">Job relevant courses</span>
                           </div>
                            
                        </div>
                    </div>
                    <div className="mt-[3%]">
                        <div className="flex flex-row">
                            <div>
                            <Image
                            width={50}
                            height={50}
                            src="/images/icon2.png"
                            />
                            </div>
                           <div className="ml-[8%] space-x-4">
                            <span className="font-semibold text-[32px] text-[#0096FF]">2000+</span>
                            <span className="font-semibold text-[32px] text-white">Hours of content</span>
                           </div>
                            
                        </div>
                    </div>
                    <div className="mt-[3%]">
                        <div className="flex flex-row">
                            <div>
                            <Image
                            width={50}
                            height={50}
                            src="/images/icon33.png"
                            />
                            </div>
                           <div className="ml-[8%] space-x-4">
                            <span className="font-semibold text-[32px] text-[#0096FF]">Exclusive</span>
                            <span className="font-semibold text-[32px] text-white">webinar access</span>
                           </div>
                            
                        </div>
                    </div>
                    <div className="mt-[3%]">
                        <div className="flex flex-row">
                            <div>
                            <Image
                            width={50}
                            height={70}
                            src="/images/icon4.png"
                            />
                            </div>
                           <div className="ml-[8%] space-x-4">
                            <span className="font-semibold text-[32px] text-white">Scholarship worth</span>
                            <span className="font-semibold text-[32px] text-[#0096FF]">₹94,500</span>
                           </div>
                            
                        </div>
                    </div>
                    <div className="mt-[3%]">
                        <div className="flex flex-row">
                            <div>
                            <Image
                            width={50}
                            height={50}
                            src="/images/icon5.png"
                            />
                            </div>
                           <div className="ml-[8%] space-x-4">
                            <span className="font-semibold text-[32px] text-[#0096FF]">Ad free</span>
                            <span className="font-semibold text-[32px] text-white">learning experience</span>
                           </div>
                            
                        </div>
                    </div>
                    

                </div>
                <div className="relative w-[30%] h-[88%] mt-[4.5%] mr-[5%] bg-white rounded-lg">
                    <div className="flex items-center justify-center space-x-40 mt-[5%] ml-[10%]">
                        <div>
                            <Image
                            src="/images/1.png"
                            width={30}
                            height={30}/>
                            <p className="ml-[-20%] text-[15px]">Sign Up</p>
                        </div>
                        <div>
                            <Image
                            src="/images/2.png"
                            width={30}
                            height={30}/>
                            <p className="ml-[-25%] text-[15px]">Subscribe</p>
                        </div>
                    </div>
                    <div className="flex flex-column items-center justify-center mt-[5%]">
                        <p className="text-[24px] text-[#3C4852] font-semibold">Select your subcription plan</p>
                    </div>
                    {/* first box */}
                    <div className="flex flex-column justify-center ">
                    <div>
                    
                    <button >
                    
                    <div  className="bg-[#e6e6e6] border-2 border-solid border-[#bebebe] rounded-lg h-[70px] w-[390px] " >
                    <Image className="absolute ml-[14%]"
                        src="/images/tag1.png"
                        width={120}
                        height={16}/>
                  <div class="mt-2 ">
                    <label class="inline-flex items-center">
                     <Image className="mt-[3%] ml-[-2.5%]"
                     src="/images/radio.png"
                     height={30}
                     width={30}/>
                     <span class="ml-[11px] mt-[3.5%] w-[110%]"><p className=" text-[#bebebe]  text-[16px] font-abc font-semibold">12 Months Subscription Plan</p></span>
                     <span className="ml-[30px] mt-[1%] text-[#bebebe]  font-abc text-[12px]">Total</span><span className="text-[#bebebe]  mt-[1px%] ml-[10px] font-abc text-[16px] font-semibold">₹99</span><br></br>
                     
                   </label>
                   <p className="text-[12px] mt-[-4%] text-right mr-[5%] font-abc text-[#bebebe] ">₹8 /mo</p>
                    </div>
                    </div>
                    </button>
                    
                    </div>
                    
                   </div>
                    {/* func box */}
                   <div className="flex flex-column justify-center mt-[3%] ">
                    <div>
                    
                    <button onClick={case1} className="hover:bg-[#d7eddd]">
                    
                    <div  className="border-2 border-solid  hover:border-[#47ba68] rounded-lg h-[70px] w-[390px]" >
                    <Image className="absolute ml-[14%]"
                        src="/images/tag2.png"
                        width={120}
                        height={16}/>
                  <div class="mt-2 ">
                    <label class="inline-flex items-center">
                     <input type="checkbox" class="w-6 h-6 mt-[3.5%] rounded-full"  />
                     <span class="ml-[20px] mt-[3.5%] w-[110%]"><p className="text-[#3C4852] text-[16px] font-abc font-semibold">12 Months Subscription Plan</p></span>
                     <span className="ml-[30px] mt-[1%] text-[#3C4852] font-abc text-[12px]">Total</span><span className="text-[#3C4852] mt-[1px%] ml-[10px] font-abc text-[16px] font-semibold">₹179</span><br></br>
                     
                   </label>
                   <p className="text-[12px] mt-[-4%] text-right mr-[5%] font-abc text-[#3C4852]">₹15 /mo</p>
                    </div>
                    </div>
                    </button>
                    
                    </div>
                    
                   </div>
                   {/* next box */}

                   <div className="flex flex-column justify-center mt-[3%]">
                    <div>
                    <button onClick={case2} className="hover:bg-[#d7eddd]">
                    <div  className="border-2  hover:border-[#47ba68] border-solid rounded-lg h-[70px] w-[390px]" >
                  <div class="mt-2 ">
                    <label class="inline-flex items-center">
                     <input type="checkbox" class="accent-[#] w-6 h-6 mt-[3.5%] rounded-full"  />
                     <span class="ml-[20px] mt-[3.5%] w-[110%]"><p className="text-[#3C4852] text-[16px] font-abc font-semibold">6 Months Subscription Plan</p></span>
                     <span className="ml-[38px] mt-[1%] text-[#3C4852] font-abc text-[12px]">Total</span><span className="text-[#3C4852] ml-[10px] mt-[1px%] font-abc text-[16px] font-semibold">₹149</span><br></br>
                     
                   </label>
                   <p className="text-[12px] mt-[-4%] text-right mr-[5%] font-abc text-[#3C4852]">₹25 /mo</p>
                    </div>
                    </div>
                    </button>
                    
                    </div>
                    
                   </div>
                   {/* next box */}
                   
                   <div className="flex flex-column justify-center mt-[3%]">
                    <div>
                       
                    <button onClick={case3} className="hover:bg-[#d7eddd]">
                    <div  className="border-2 border-solid hover:border-[#47ba68] rounded-lg h-[70px] w-[390px]" >
                  <div class="mt-2 ">
                    <label class="inline-flex items-center">
                     <input type="checkbox" class="w-6 ml-[-1%] h-6 mt-[3.5%] rounded-full"  />
                     <span class="ml-[20px] mt-[3.5%] w-[110%]"><p className="ml-[-1%] text-[#3C4852] text-[16px] font-abc font-semibold">3 Months Subscription Plan</p></span>
                     <span className="ml-[38px] mt-[1%] text-[#3C4852] font-abc text-[12px]">Total</span><span className="text-[#3C4852] ml-[10px] mt-[1px%] font-abc text-[16px] font-semibold"> ₹99</span><br></br>
                     
                   </label>
                   <p className="text-[12px] mt-[-4%] text-right mr-[5%] font-abc text-[#3C4852]">₹33 /mo</p>
                    </div>
                    </div>
                    </button>
                    
                    </div>
                    
                   </div>
                   {/* line */}
                   <div className="mt-[4%] flex justify-center items-center">
                        <div className=" w-[88%] h-[1.5px] bg-[#BEBEBE]"></div>
                   </div>
                   {/* text */}
                   <div className="mt-[2%] flex items-center justify-center space-x-[180px]">
                    <p className="text-[16px] font-abc text-[#3C4852]">Subscription Fee</p><span className="text-[16px] font-abc font-semibold text-[#3C4852]">₹18,500</span>
                   </div>
                   {/* next section */}
                   <div className="flex justify-center items-center mt-[3%]">
                   <div  className="border-2 border-solid bg-gradient-to-r  from-[#f9dcd1] to-[#fce8d9] border-[#ec7c37] rounded-lg h-[70px] w-[390px]" >
                   <div className="mt-[2%] flex items-center justify-center space-x-[170px]">
                    <p className="text-[16px] font-abc font-semibold text-[#DE4313]">Limited time offer</p><span id="evt" className="font-semibold text-[16px] font-abc text-[#3C4852]">-₹18,500</span>
                   </div>
                   <div className="flex items-center justify-center">
                    <Image className="ml-[-35%]"
                    src="/images/clock.png"
                    width={24}
                    height={24}/>
                    <span className="ml-[3%] mt-[1%] text-[#DE4313] font-abc text-[14px]">Offer valid till 25th March 2023 </span>
                   </div>
                  </div>
                   </div>
                   {/* next section */}
                   <div className="mt-[2%] flex items-center justify-center space-x-[160px]">
                    <p className="text-[16px] font-abc text-[#3C4852]"><b>Total</b>(Incl. of 18% GST)</p><span id="evt1" className="text-[24px] font-abc font-semibold text-[#3C4852]">₹149</span>
                   </div>
                   {/* next section */}
                   <div className="flex flex-row justify-center items-center mt-[3%] space-x-2">
                        <div>
                        <button class="bg-transparent hover:bg-red-500 text-[#f87979] font-semibold hover:text-white py-3 px-[63px] border-2 border-[#f77171] hover:border-transparent rounded">
                         CANCEL
                        </button>
                        </div>

                        <div>
                        <button class="bg-[#47ba68]  text-white font-semibold hover:text-white py-3 px-[30px] border-2 border-[#47ba68] hover:border-transparent rounded">
                         PROCEED TO PAY
                        </button>
                        </div>
                   </div>
                   {/* next section */}
                   <div className="ml-[6%] mt-[1%]">
                    <Image
                    src="/images/razor.png"
                    height={40}
                    width={120}/>
                   </div>
                  
                   

                </div>
                
                
                
            </div>
            

               
        </div>
        
    )
}
export default Landing;
import React from 'react'
import Image1 from "../../../assets/images1.jpg";
import Image2 from "../../../assets/images2.jpg";
import Image3 from "../../../assets/images3.jpg";
import Button from '../Shared/Button';
const Category = () => {
  return (
    <div className="py-8">
        <div className="container" >
            <div className="grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-4 gap-8">
                {/* first cols */}
                <div className="py-10 pl-5 bg-gradient-to-br
                from-black/90 to-black/70 text-white 
                rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-gray-400">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl 
                            font-bold opacity-20 mb-2">Earphone</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt="" className="sm:w-[320px] absolute 
                    bottom-0 right-0 lg:w-[150px] " />
                </div>
                {/* Second col */}
                <div className="py-10 pl-5 bg-gradient-to-br
                from-brandYellow to-brandYellow/70 text-white 
                rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="mb-[2px] text-white">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl 
                            font-bold opacity-40 mb-2">Gadget</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-white"}
                            textColor={"text-brandYellow"}
                            />
                        </div>
                    </div>
                    <img src={Image2} alt="" className="sm:w-[320px] absolute 
                    bottom-0 right-0 lg:w-[150px] top-0" />
                </div>
                {/* third col */}
                <div className="col-span-2 py-10 pl-5 
                bg-gradient-to-br from-primary
             to-primary/90 text-white 
                rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className=" mb-4">
                            <p className="mb-[2px] text-white">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">With</p>
                            <p className="text-4xl xl:text-5xl 
                            font-bold opacity-40 mb-2">Laptop</p>
                            <Button
                            text="Browse"
                            bgColor={"bg-white"}
                            textColor={"text-primary"}
                            />
                        </div>
                    </div>
                    <img src={Image3} alt="" className="sm:w-[320px] absolute 
                    bottom-0 right-0 lg:w-[150px] " />
                </div>



            </div>
        </div>
      
    </div>
  )
}

export default Category

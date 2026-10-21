
import {Utensils,Cupcake,CakeSlice,Leaf,Soup,Tickets} from 'lucide-react'
 
const foodInfo = [
  {
    icon: <Utensils/>,
    border: "md:border-r md:border-b",
  },
  {
    icon: <Cupcake />,
    border: "md:border-r md:border-b",
  },
  {
    icon: <CakeSlice />,
    border: "md:border-b",
  },
  {
    icon: <Leaf />,
    border: "md:border-r",
  },
  {
    icon: <Soup />,
    border: "md:border-r",
  },
  {
    icon:<Tickets />,
    border: "",
  },
];

export default function FoodInfo({data}) {
  return (
    <section className=" pb-12">
      <div className="mx-auto max-w-[1280px] px-6  ">
           <div className="grid gap-6 md:grid-cols-3 md:gap-0 p-5 bg-rose-50 px-6">
            {data.information_cards.map((item, index) => (
                <div
                    key={index}
                    className={"flex gap-4 border-gray-200 p-4 md:py-4 " + foodInfo[index].border}>

                    <span className="text-xl text-red-500 mt-1 [&>svg]:stroke-[3]">{foodInfo[index].icon}</span>

                    <div>
                        <h3 className="font-semibold text-[14px] leading-[1.5] text-gray-900">
                            {item.title}
                        </h3>

                        <div className="text-[12px] mt-1 leading-[1.5] text-gray-700">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        
      </div>
    </section>
  );
}


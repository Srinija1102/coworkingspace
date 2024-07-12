import { RiSendPlaneFill } from "react-icons/ri"

function Locationdiv({place}:{place:string}) {
  return (
    <div className="flex border-l-2 border-black mt-6 items-center p-2 hover:bg-yellow-500 cursor-pointer bg-yellow-400"><span className="w-[80%]">{place}</span><span className="w-[20%] flex justify-center"><div><RiSendPlaneFill/></div></span></div>
  )
}

export default Locationdiv
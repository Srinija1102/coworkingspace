import { useScramble } from "use-scramble";

const Scramble = (prop:any) => {

  const { ref } = useScramble({ 
    text: `${prop.totype}`,
    speed: 0.2
  });

  return(
    <div>
        <p ref={ref} className="font-Raleway font-extrabold text-3xl md:text-6xl" />
    </div>
  )
}

export default Scramble;
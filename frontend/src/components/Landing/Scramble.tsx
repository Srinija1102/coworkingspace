import { useScramble } from "use-scramble";
//Making the component reusable
const Scramble = (prop: any) => {
  let classnigga = "font-Raleway font-extrabold text-3xl md:text-6xl ";
  let speed = 0.2;
  if (prop.speed) {
    speed = Number(prop.speed);
  }
  const { ref } = useScramble({
    text: `${prop.totype}`,
    speed: Number(speed),
  });

  if (prop.className) {
    classnigga = prop.className;
  }
  return (
    <div>
      <p
        ref={ref}
        // className="font-Raleway font-extrabold text-3xl md:text-6xl "
        className={classnigga}
      />
    </div>
  );
};

export default Scramble;

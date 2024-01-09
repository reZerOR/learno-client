import Container from "../../../Components/Shared/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col xl:flex-row gap-10 justify-between items-center py-[120px]">
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>
    </Container>
  );
};

export default Banner;

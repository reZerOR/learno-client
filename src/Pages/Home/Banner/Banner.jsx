import Container from "../../../Components/Shared/Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Banner = () => {
  return (
    <Container>
      <div>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </div>
    </Container>
  );
};

export default Banner;

import DisplayOffers from "@components/DisplayOffers/DisplayOffers";
import LoginHP from "@components/LoginHP/LoginHP";
import PresentationHP from "@components/PresentationHP/PresentationHP";
import Partners from "../../components/SliderPartners/Partners";
import ButtonLast from "../../components/SliderLastOffers/ButtonLast";
import DescPartnes from "../../components/SliderPartners/DescPartnes";
import DescOffers from "../../components/SliderLastOffers/DescOffers";
import SearchBar from "../../components/SearchBar/SearchBar";
import Style from "./style";

export default function Home() {
  return (
    <div>
      <Style>
        <SearchBar />
        <div className="blockContainer">
          <LoginHP />
          <PresentationHP />
        </div>
        <DescOffers />
        <DisplayOffers />
        <ButtonLast />
        <DescPartnes />
        <Partners />
      </Style>
    </div>
  );
}

import PlayPauseButton from "../../components/Buttons/PlayPause";
import ResetButton from "../../components/Buttons/Reset";
import ShowValues from "../../components/Buttons/ShowValues";
import Stroke from "../../components/Buttons/Stroke";
import DelaySlider from "../../components/Sliders/DelaySlider";
import LenghtSlider from "../../components/Sliders/LenghtSlider";
import "./style.css";

export default () => (<div className="Controlls">
    <section className="sliders">
        <LenghtSlider />
        <DelaySlider />
    </section>
    <section className="Buttons1">
        <PlayPauseButton />
        <ResetButton />
    </section>
    <section className="Buttons2">
        <ShowValues />
        <Stroke />
    </section>
</div>)

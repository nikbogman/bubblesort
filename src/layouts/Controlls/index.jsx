import PlayPauseButton from "../../components/Buttons/PlayPause";
import ResetButton from "../../components/Buttons/Reset";
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
        <PlayPauseButton />
        <ResetButton />
    </section>
</div>)

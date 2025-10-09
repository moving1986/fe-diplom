import "./FilterWays.css";
import IcoCupe from "../../assets/images/ico-cupe.svg";
import IcoPlackart from "../../assets/images/ico-plackart.svg";
import IcoSeat from "../../assets/images/ico-seat.svg";
import IcoLux from "../../assets/images/ico-lux.svg"
import IcoWifi from "../../assets/images/ico-wifi.svg";
import IcoExpress from "../../assets/images/ico-express.svg";
import IcoRightArrowAside from "../../assets/images/ico-right-arrow-aside.svg";
import IcoMoreAside from "../../assets/images/ico-more-aside.svg";
import IcoLeftArrowAside from "../../assets/images/ico-left-arrow-aside.svg";

import DateFilter from "./components/DateFilter";

const FilterWays = () => {
   
      return (
        <div className="settings-panel">
            
        <DateFilter />
        
            <section className="vagon-type">
                <div className="select-panel">
                    <div className="select-panel-row">
                        <div className="ico-type"><img src={IcoCupe} alt="" /></div>
                        <div className="text-type">Купе</div>
                        <div className="selector-slide">
                            <label className="settings-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="select-panel-row">
                        <div className="ico-type"><img src={IcoPlackart} alt="" /></div>
                        <div className="text-type">Плацкарт</div>
                        <div className="selector-slide">
                            <label className="settings-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="select-panel-row">
                        <div className="ico-type"><img src={IcoSeat} alt="" /></div>
                        <div className="text-type">Сидячий</div>
                        <div className="selector-slide">
                            <label className="settings-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="select-panel-row">
                        <div className="ico-type"><img src={IcoLux} alt="" /></div>
                        <div className="text-type">Люкс</div>
                        <div className="selector-slide">
                            <label className="settings-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="select-panel-row">
                        <div className="ico-type"><img src={IcoWifi} alt="" /></div>
                        <div className="text-type">Wi-Fi</div>
                        <div className="selector-slide">
                            <label className="settings-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className="select-panel-row">
                        <div className="ico-type"><img src={IcoExpress} alt="" /></div>
                        <div className="text-type">Экспресс</div>
                        <div className="selector-slide">
                            <label className="settings-switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </section>

            <div className="price-range">
                <div className="aside-header">
                    Стоимость
                </div>
                <div className="slider-price-container">
                    <div className="slider-track"></div>
                    <input type="range" className="price-range" min="1920" max="7000" value="4500" step="100" readOnly />
                </div>
                <br />
            </div>

            <div className="aside-ways">
                <div className="ico-way"><img src={IcoRightArrowAside} alt="" /></div>
                <div className="text-aside-ways">Туда</div>
                <div className="ico-more-aside-ways"><img src={IcoMoreAside} alt="" /></div>
            </div>

            <div className="aside-ways">
                <div className="ico-way"><img src={IcoLeftArrowAside} alt="" /></div>
                <div className="text-aside-ways">Обратно</div>
                <div className="ico-more-aside-ways"><img src={IcoMoreAside} alt="" /></div>
            </div>
        </div>
    );
}

export default FilterWays;
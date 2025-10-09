import './VagonOpionsFilter.css'

const VagonOpionsFilter = () => {


    return (
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
    )
}

export default VagonOpionsFilter;
import "./home.css"
import Feature from "../../comopnents/featureInfo/Feature"
import Chart from "../../comopnents/chart/Chart"
import WidgetSm from "../../comopnents/widgetSm/WidgetSm"
import WidgetLg from "../../comopnents/widgetLg/WidgetLg"
import {userData} from "../../dummyData"

export default function Home() {
    return (
        <div className="home">
            <Feature/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
            </div>
        </div>
    )
}

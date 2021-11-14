import "./home.css"
import Feature from "../../comopnents/featureInfo/Feature"
import Chart from "../../comopnents/chart/Chart"
import widgetSm from "../../comopnents/widgetSm/widgetSm"
import chart1 from "../../comopnents/chart1/chart1"
import {userData} from "../../dummyData"

export default function Home() {
    return (
        <div className="home">
            <Feature/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <widgetSm/>
                <chart1/>
            </div>
        </div>
    )
}

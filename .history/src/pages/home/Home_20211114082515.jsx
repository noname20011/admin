import "./home.css"
import Feature from "../../comopnents/featureInfo/Feature"
import Chart from "../../comopnents/chart/Chart"
import widgetSm from "../../comopnents/widgetSm/widgetSm"
import {userData} from "../../dummyData"

export default function Home() {
    return (
        <div className="home">
            <Feature/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <widgetSm/>
            </div>
        </div>
    )
}

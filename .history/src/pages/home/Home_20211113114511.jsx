import "./home.css"
import Feature from "../../comopnents/featureInfo/Feature"
import Chart from "../../comopnents/chart/Chart"
import {userData} from "../../dummyData"
export default function Home() {
    return (
        <div className="home">
            <Feature/>
            <Chart/>
        </div>
    )
}

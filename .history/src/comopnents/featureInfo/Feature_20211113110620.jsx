import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import "./feature.css"

export default function Feature() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4
                        <ArrowDownward/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sale</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,415</span>
                    <span className="featuredMoneyRate">+20.4
                        <ArrowUpward/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month
                </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,415</span>
                    <span className="featuredMoneyRate">+24.4
                        <ArrowUpward/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

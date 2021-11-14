import { ArrowDownward } from '@material-ui/icons'
import React from 'react'

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
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4
                        <ArrowDownward/>
                    </span>
                </div>
                <span className="featuredSub">Compared to last month
                </span>
            </div>
        </div>
    )
}

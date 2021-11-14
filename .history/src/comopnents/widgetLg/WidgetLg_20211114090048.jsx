import React from "./widgetLg.css"

export default function WidgetLg() {
    return (
        <div className="widgetLg">
            <span className="widgetLgTitle">Latest transactions</span>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLdTh">Customer</th>
                    <th className="widgetLdTh">Date</th>
                    <th className="widgetLdTh">Amount</th>
                    <th className="widgetLdTh">Status</th>
                </tr>
            </table>
        </div>
    )
}

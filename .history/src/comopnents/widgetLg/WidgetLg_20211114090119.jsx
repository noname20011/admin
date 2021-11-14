import React from "./widgetLg.css"

export default function WidgetLg() {
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLdTh">Customer</th>
                    <th className="widgetLdTh">Date</th>
                    <th className="widgetLdTh">Amount</th>
                    <th className="widgetLdTh">Status</th>
                </tr>
                <tr className="widgetLgTr"></tr>
            </table>
        </div>
    )
}

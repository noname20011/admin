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
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="widgetLgImg" />
                        <span className="widgetLgUsername">Susan Carol</span>
                    </td>
                </tr>
            </table>
        </div>
    )
}

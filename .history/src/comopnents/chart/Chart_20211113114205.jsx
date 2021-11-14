import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function Chart() {
    const data = [
        {
            name: 'Jan',
            "Active User": 4000,
        },
        {
            name: 'Fab',
            "Active User": 3000,
            
        },
        {
            name: 'Mar',
            "Active User": 2000,
            
        },
        {
            name: 'Apr',
            "Active User": 2780,
        },
        {
            name: 'May',
            "Active User": 1890,
        },
        {
            name: 'Jun',
            "Active User": 2390,
        },
        {
            name: 'Agu',
            "Active User": 3230,
        },
        {
            name: 'Sep',
            "Active User": 4920,
        },
        {
            name: 'Oct',
            "Active User": 5390,
        },
        {
            name: 'Nov',
            "Active User": 4000,
        },
        {
            name: 'Dec',
            "Active User": 4120,
        },
        ];
    
    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd"/>
                    <Line type="monotone" dataKey="Active User"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

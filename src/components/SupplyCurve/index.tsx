import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface SupplyCurveProps {
  width?: string | number;
  height?: string | number;
}

const SupplyCurve: React.FC<SupplyCurveProps> = ({ width = '100%', height = 400 }) => {
  // Generate data points for 1096 days
  const data = Array.from({ length: 1096 }, (_, i) => {
    const foundationTreasury = 250000000;
    const daoTreasury = i <= 821 ? (17500000+i * 405000) : 350000000;
    let investors = i >= 365 ? 50000000 + ((i-365) * 136798) : 0;
    let team = i >= 365 ? 83333333 + ((i-365) * 228000) : 0;

    if (i >= 1095) {
      investors = 150000000;
      team = 250000000;
    }

    return {
      day: i,
      foundationTreasury,
      daoTreasury,
      investors,
      team,
    };
  });

  return (
    <ResponsiveContainer width={width} height={height} aspect={16/9}>
      <AreaChart
        data={data}
        margin={{ top: 30, right: 30, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="foundationGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F6FFF3" stopOpacity={1.0}/>
            <stop offset="95%" stopColor="#D1FFBF" stopOpacity={0.6}/>
          </linearGradient>
          <linearGradient id="daoGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#D6FEAE" stopOpacity={1.0}/>
            <stop offset="95%" stopColor="#86ED1E" stopOpacity={0.6}/>
          </linearGradient>
          <linearGradient id="investorsGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#45A07D" stopOpacity={1.0}/>
            <stop offset="95%" stopColor="#0A6643" stopOpacity={0.6}/>
          </linearGradient>
          <linearGradient id="teamGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3F7E00" stopOpacity={1.0}/>
            <stop offset="95%" stopColor="#0E1903" stopOpacity={0.6}/>
          </linearGradient>
        </defs>
        
        <text
          x="50%"
          y={15}
          fill="grey"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="16px"
          fontWeight="bold"
        >
          Token Supply Distribution Over Time
        </text>
        
        <XAxis 
          dataKey="day"
          tick={{ fontSize: '12px' }}
          tickCount={5}
          label={{ 
            value: 'Days', 
            position: 'bottom', 
            offset: 0,
            fontSize: '14px'
          }}
        />
        <YAxis 
          tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
          tick={{ fontSize: '12px' }}
          width={60}
          label={{ 
            value: 'Token Supply', 
            angle: -90, 
            position: 'insideLeft',
            offset: 10,
            fontSize: '14px'
          }}
        />
        <Tooltip 
          formatter={(value: number) => `${(value / 1000000).toFixed(2)}M`}
          contentStyle={{ fontSize: '12px', color: 'black' }}
        />
        <Area
          type="monotone"
          dataKey="foundationTreasury"
          stackId="1"
          stroke="#000000"
          fill="url(#foundationGradient)"
          name="Foundation Treasury"
        />
        <Area
          type="monotone"
          dataKey="daoTreasury"
          stackId="1"
          stroke="#000000"
          fill="url(#daoGradient)"
          name="DAO Treasury"
        />
        <Area
          type="monotone"
          dataKey="investors"
          stackId="1"
          stroke="#000000"
          fill="url(#investorsGradient)"
          name="Investors"
        />
        <Area
          type="monotone"
          dataKey="team"
          stackId="1"
          stroke="#000000"
          fill="url(#teamGradient)"
          name="Team"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SupplyCurve;

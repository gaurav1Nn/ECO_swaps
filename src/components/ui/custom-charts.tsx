import * as React from "react"

interface ChartData {
  name: string
  value: number
  color?: string
}

interface SimpleChartProps {
  data: ChartData[]
  type: 'pie' | 'line' | 'bar'
  height?: number
  colors?: string[]
  className?: string
}

const defaultColors = ['hsl(142, 76%, 36%)', 'hsl(158, 64%, 52%)', 'hsl(173, 58%, 39%)', 'hsl(197, 37%, 24%)', 'hsl(210, 40%, 30%)']

export function SimpleChart({ data, type, height = 300, colors = defaultColors, className }: SimpleChartProps) {
  const maxValue = Math.max(...data.map(d => d.value))

  if (type === 'pie') {
    const total = data.reduce((sum, item) => sum + item.value, 0)
    let cumulativePercentage = 0

    return (
      <div className={`flex items-center justify-center ${className}`} style={{ height }}>
        <div className="flex items-center space-x-8">
          <div className="relative">
            <svg width="200" height="200" viewBox="0 0 42 42" className="transform -rotate-90">
              <circle
                cx="21"
                cy="21"
                r="15.91549430918954"
                fill="transparent"
                stroke="hsl(var(--muted))"
                strokeWidth="2"
              />
              {data.map((item, index) => {
                const percentage = (item.value / total) * 100
                const strokeDasharray = `${percentage} ${100 - percentage}`
                const strokeDashoffset = -cumulativePercentage
                cumulativePercentage += percentage
                
                return (
                  <circle
                    key={index}
                    cx="21"
                    cy="21"
                    r="15.91549430918954"
                    fill="transparent"
                    stroke={item.color || colors[index % colors.length]}
                    strokeWidth="3"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-300"
                  />
                )
              })}
            </svg>
          </div>
          <div className="space-y-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color || colors[index % colors.length] }}
                />
                <span className="text-sm">{item.name}: {item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (type === 'bar') {
    return (
      <div className={`p-4 ${className}`} style={{ height }}>
        <div className="h-full flex items-end justify-around space-x-2">
          {data.map((item, index) => {
            const barHeight = (item.value / maxValue) * 80
            return (
              <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                <div 
                  className="w-full rounded-t transition-all duration-300 hover:opacity-80"
                  style={{ 
                    height: `${barHeight}%`,
                    backgroundColor: item.color || colors[index % colors.length],
                    minHeight: '4px'
                  }}
                />
                <span className="text-xs text-center">{item.name}</span>
                <span className="text-xs font-medium">{item.value}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // Line chart
  return (
    <div className={`p-4 ${className}`} style={{ height }}>
      <div className="h-full relative">
        <svg width="100%" height="100%" viewBox="0 0 400 200" className="overflow-visible">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map(i => (
            <line
              key={i}
              x1="40"
              y1={40 + (i * 30)}
              x2="360"
              y2={40 + (i * 30)}
              stroke="hsl(var(--muted))"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          ))}
          
          {/* Line */}
          <polyline
            fill="none"
            stroke={colors[0]}
            strokeWidth="2"
            points={data.map((item, index) => {
              const x = 40 + (index * (320 / (data.length - 1)))
              const y = 160 - ((item.value / maxValue) * 120)
              return `${x},${y}`
            }).join(' ')}
          />
          
          {/* Data points */}
          {data.map((item, index) => {
            const x = 40 + (index * (320 / (data.length - 1)))
            const y = 160 - ((item.value / maxValue) * 120)
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="4"
                fill={colors[0]}
                className="hover:r-6 transition-all duration-200"
              />
            )
          })}
          
          {/* Labels */}
          {data.map((item, index) => {
            const x = 40 + (index * (320 / (data.length - 1)))
            return (
              <text
                key={index}
                x={x}
                y="185"
                textAnchor="middle"
                className="text-xs fill-current"
              >
                {item.name}
              </text>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
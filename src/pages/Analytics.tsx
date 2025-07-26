import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Users, CheckSquare, Clock, DollarSign } from "lucide-react";

export default function Analytics() {
  const monthlyData = [
    { month: "Jan", tasks: 45, revenue: 25000, completion: 88 },
    { month: "Feb", tasks: 52, revenue: 28500, completion: 92 },
    { month: "Mar", tasks: 38, revenue: 22000, completion: 85 },
    { month: "Apr", tasks: 61, revenue: 34000, completion: 94 }
  ];

  const topTaskers = [
    { name: "Mike Johnson", tasks: 12, rating: 4.9, revenue: "$8,500" },
    { name: "Alex Smith", tasks: 10, rating: 4.8, revenue: "$7,200" },
    { name: "Lisa Wang", tasks: 8, rating: 4.9, revenue: "$5,600" },
    { name: "Tom Davis", tasks: 7, rating: 4.7, revenue: "$4,200" }
  ];

  const topOwners = [
    { name: "Sarah Chen", tasks: 8, spent: "$12,500" },
    { name: "John Doe", tasks: 6, spent: "$9,800" },
    { name: "Emily Brown", tasks: 5, spent: "$7,300" },
    { name: "David Wilson", tasks: 4, spent: "$6,100" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Insights and performance metrics</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          Performance: Excellent
        </Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$109,500</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +18.2%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Task Value</CardTitle>
            <CheckSquare className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,795</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +5.4%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                -2.1%
              </span>
              from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Completion Time</CardTitle>
            <Clock className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 days</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                -12.5%
              </span>
              faster than last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Performance</CardTitle>
          <CardDescription>Tasks completed and revenue generated per month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-4">
                  <div className="w-12 text-center">
                    <p className="font-medium">{data.month}</p>
                  </div>
                  <div>
                    <p className="font-medium">{data.tasks} tasks completed</p>
                    <p className="text-sm text-muted-foreground">${data.revenue.toLocaleString()} revenue</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{data.completion}% completion rate</p>
                  <Progress value={data.completion} className="w-24 h-2 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Performers */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Top Taskers</CardTitle>
            <CardDescription>Best performing taskers this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topTaskers.map((tasker, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{tasker.name}</p>
                      <p className="text-sm text-muted-foreground">{tasker.tasks} tasks completed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{tasker.revenue}</p>
                    <p className="text-sm text-muted-foreground">★ {tasker.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Owners</CardTitle>
            <CardDescription>Most active task owners this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topOwners.map((owner, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{owner.name}</p>
                      <p className="text-sm text-muted-foreground">{owner.tasks} tasks created</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{owner.spent}</p>
                    <p className="text-sm text-muted-foreground">total spent</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Task Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Task Categories</CardTitle>
          <CardDescription>Distribution of tasks by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Web Development</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-2" />
              <p className="text-xs text-muted-foreground">28 tasks</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Design</span>
                <span>25%</span>
              </div>
              <Progress value={25} className="h-2" />
              <p className="text-xs text-muted-foreground">16 tasks</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Content Writing</span>
                <span>20%</span>
              </div>
              <Progress value={20} className="h-2" />
              <p className="text-xs text-muted-foreground">12 tasks</p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Other</span>
                <span>10%</span>
              </div>
              <Progress value={10} className="h-2" />
              <p className="text-xs text-muted-foreground">6 tasks</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
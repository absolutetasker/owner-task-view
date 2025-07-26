import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckSquare, Users, UserCheck, Clock, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Tasks",
      value: "156",
      change: "+12%",
      icon: CheckSquare,
      color: "text-blue-600"
    },
    {
      title: "Active Owners",
      value: "24",
      change: "+3%",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Available Taskers",
      value: "18",
      change: "+5%",
      icon: UserCheck,
      color: "text-purple-600"
    },
    {
      title: "Avg. Completion Time",
      value: "2.4 days",
      change: "-8%",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const recentTasks = [
    { id: 1, title: "Website Redesign", owner: "Sarah Chen", tasker: "Mike Johnson", status: "In Progress", priority: "High" },
    { id: 2, title: "Database Migration", owner: "John Doe", tasker: "Alex Smith", status: "Completed", priority: "Critical" },
    { id: 3, title: "Mobile App Testing", owner: "Emily Brown", tasker: "Lisa Wang", status: "Review", priority: "Medium" },
    { id: 4, title: "Content Writing", owner: "David Wilson", tasker: "Tom Davis", status: "Pending", priority: "Low" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-500";
      case "In Progress": return "bg-blue-500";
      case "Review": return "bg-yellow-500";
      default: return "bg-gray-500";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "destructive";
      case "High": return "secondary";
      case "Medium": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of task management system</p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          System Health: Good
        </Badge>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                {' '}from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Tasks */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
            <CardDescription>Latest task activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="space-y-1">
                    <p className="font-medium text-sm">{task.title}</p>
                    <p className="text-xs text-muted-foreground">
                      Owner: {task.owner} • Tasker: {task.tasker}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getPriorityColor(task.priority)} className="text-xs">
                      {task.priority}
                    </Badge>
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(task.status)}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Task Completion Rate</CardTitle>
            <CardDescription>Monthly progress overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>January</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>February</span>
                  <span>92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>March</span>
                  <span>78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>April</span>
                  <span>95%</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
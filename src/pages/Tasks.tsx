import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Eye, Edit, Trash2 } from "lucide-react";

export default function Tasks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const tasks = [
    {
      id: "TSK-001",
      title: "Website Redesign",
      description: "Complete redesign of the company website",
      owner: "Sarah Chen",
      tasker: "Mike Johnson",
      status: "In Progress",
      priority: "High",
      createdAt: "2024-01-15",
      dueDate: "2024-02-15",
      budget: "$5,000"
    },
    {
      id: "TSK-002",
      title: "Database Migration",
      description: "Migrate legacy database to new system",
      owner: "John Doe",
      tasker: "Alex Smith",
      status: "Completed",
      priority: "Critical",
      createdAt: "2024-01-10",
      dueDate: "2024-01-25",
      budget: "$8,500"
    },
    {
      id: "TSK-003",
      title: "Mobile App Testing",
      description: "Comprehensive testing of mobile application",
      owner: "Emily Brown",
      tasker: "Lisa Wang",
      status: "Review",
      priority: "Medium",
      createdAt: "2024-01-20",
      dueDate: "2024-02-10",
      budget: "$3,200"
    },
    {
      id: "TSK-004",
      title: "Content Writing",
      description: "Create blog content for marketing campaigns",
      owner: "David Wilson",
      tasker: "Tom Davis",
      status: "Pending",
      priority: "Low",
      createdAt: "2024-01-25",
      dueDate: "2024-02-20",
      budget: "$1,500"
    },
    {
      id: "TSK-005",
      title: "SEO Optimization",
      description: "Improve website search engine optimization",
      owner: "Maria Garcia",
      tasker: "Chris Lee",
      status: "In Progress",
      priority: "Medium",
      createdAt: "2024-01-18",
      dueDate: "2024-02-05",
      budget: "$2,800"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "default";
      case "In Progress": return "secondary";
      case "Review": return "outline";
      case "Pending": return "destructive";
      default: return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical": return "text-red-600 bg-red-50";
      case "High": return "text-orange-600 bg-orange-50";
      case "Medium": return "text-blue-600 bg-blue-50";
      case "Low": return "text-green-600 bg-green-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.tasker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || task.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Tasks Management</h1>
          <p className="text-muted-foreground">Manage and track all tasks</p>
        </div>
        <Button>Create New Task</Button>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>Search and filter tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tasks, owners, or taskers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in progress">In Progress</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tasks Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Tasks ({filteredTasks.length})</CardTitle>
          <CardDescription>Complete list of tasks in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Owner</TableHead>
                <TableHead>Tasker</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-mono text-sm">{task.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>{task.owner}</TableCell>
                  <TableCell>{task.tasker}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(task.status)}>
                      {task.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>{task.dueDate}</TableCell>
                  <TableCell className="font-medium">{task.budget}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
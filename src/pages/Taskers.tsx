import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Mail, Phone, MapPin, Eye, Edit, Star } from "lucide-react";

export default function Taskers() {
  const [searchTerm, setSearchTerm] = useState("");

  const taskers = [
    {
      id: "TSK-001",
      name: "Mike Johnson",
      email: "mike.johnson@freelancer.com",
      phone: "+1 (555) 111-2222",
      location: "Portland, OR",
      skills: ["Web Development", "UI/UX Design", "React"],
      totalTasks: 24,
      activeTasks: 2,
      completedTasks: 22,
      avgRating: 4.9,
      hourlyRate: "$85",
      availability: "Available",
      joinedDate: "2023-03-15",
      avatar: "/placeholder.svg"
    },
    {
      id: "TSK-002",
      name: "Alex Smith",
      email: "alex.smith@developer.io",
      phone: "+1 (555) 222-3333",
      location: "Chicago, IL",
      skills: ["Database Management", "DevOps", "Python"],
      totalTasks: 31,
      activeTasks: 3,
      completedTasks: 28,
      avgRating: 4.8,
      hourlyRate: "$95",
      availability: "Busy",
      joinedDate: "2023-01-20",
      avatar: "/placeholder.svg"
    },
    {
      id: "TSK-003",
      name: "Lisa Wang",
      email: "lisa.wang@tester.com",
      phone: "+1 (555) 333-4444",
      location: "San Diego, CA",
      skills: ["QA Testing", "Mobile Testing", "Automation"],
      totalTasks: 18,
      activeTasks: 1,
      completedTasks: 17,
      avgRating: 4.9,
      hourlyRate: "$70",
      availability: "Available",
      joinedDate: "2023-05-10",
      avatar: "/placeholder.svg"
    },
    {
      id: "TSK-004",
      name: "Tom Davis",
      email: "tom.davis@writer.net",
      phone: "+1 (555) 444-5555",
      location: "Denver, CO",
      skills: ["Content Writing", "SEO", "Marketing"],
      totalTasks: 15,
      activeTasks: 2,
      completedTasks: 13,
      avgRating: 4.7,
      hourlyRate: "$60",
      availability: "Available",
      joinedDate: "2023-07-05",
      avatar: "/placeholder.svg"
    },
    {
      id: "TSK-005",
      name: "Chris Lee",
      email: "chris.lee@seo.expert",
      phone: "+1 (555) 555-6666",
      location: "Miami, FL",
      skills: ["SEO", "Digital Marketing", "Analytics"],
      totalTasks: 12,
      activeTasks: 1,
      completedTasks: 11,
      avgRating: 4.6,
      hourlyRate: "$75",
      availability: "Limited",
      joinedDate: "2023-08-20",
      avatar: "/placeholder.svg"
    }
  ];

  const filteredTaskers = taskers.filter(tasker =>
    tasker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tasker.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tasker.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
    tasker.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.8) return "text-green-600 bg-green-50";
    if (rating >= 4.5) return "text-blue-600 bg-blue-50";
    if (rating >= 4.0) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Available": return "default";
      case "Busy": return "destructive";
      case "Limited": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Taskers</h1>
          <p className="text-muted-foreground">Manage freelancers and task performers</p>
        </div>
        <Button>Add New Tasker</Button>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Taskers</CardTitle>
          <CardDescription>Find taskers by name, skills, email, or location</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search taskers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Taskers Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTaskers.map((tasker) => (
          <Card key={tasker.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={tasker.avatar} alt={tasker.name} />
                  <AvatarFallback>{getInitials(tasker.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{tasker.name}</CardTitle>
                  <CardDescription>{tasker.id}</CardDescription>
                </div>
                <Badge variant={getAvailabilityColor(tasker.availability)}>
                  {tasker.availability}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{tasker.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{tasker.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{tasker.location}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Skills:</p>
                <div className="flex flex-wrap gap-1">
                  {tasker.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-xl font-bold text-primary">{tasker.totalTasks}</p>
                  <p className="text-xs text-muted-foreground">Total Tasks</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-green-600">{tasker.hourlyRate}</p>
                  <p className="text-xs text-muted-foreground">Hourly Rate</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{tasker.avgRating}</span>
                  <span className="text-sm text-muted-foreground">({tasker.completedTasks} reviews)</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Taskers Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Taskers ({filteredTaskers.length})</CardTitle>
          <CardDescription>Detailed view of all taskers</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tasker</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Skills</TableHead>
                <TableHead>Tasks</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTaskers.map((tasker) => (
                <TableRow key={tasker.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={tasker.avatar} alt={tasker.name} />
                        <AvatarFallback className="text-xs">{getInitials(tasker.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{tasker.name}</p>
                        <p className="text-sm text-muted-foreground">{tasker.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{tasker.email}</p>
                      <p className="text-sm text-muted-foreground">{tasker.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {tasker.skills.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {tasker.skills.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{tasker.skills.length - 2}
                        </Badge>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p><span className="font-medium">{tasker.totalTasks}</span> total</p>
                      <p className="text-muted-foreground">{tasker.activeTasks} active</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tasker.avgRating}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{tasker.hourlyRate}</TableCell>
                  <TableCell>
                    <Badge variant={getAvailabilityColor(tasker.availability)}>
                      {tasker.availability}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
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
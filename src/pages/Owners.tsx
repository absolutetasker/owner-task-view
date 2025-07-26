import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Mail, Phone, MapPin, Eye, Edit } from "lucide-react";

export default function Owners() {
  const [searchTerm, setSearchTerm] = useState("");

  const owners = [
    {
      id: "OWN-001",
      name: "Sarah Chen",
      email: "sarah.chen@company.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      totalTasks: 12,
      activeTasks: 3,
      completedTasks: 9,
      avgRating: 4.8,
      joinedDate: "2023-06-15",
      avatar: "/placeholder.svg"
    },
    {
      id: "OWN-002",
      name: "John Doe",
      email: "john.doe@enterprise.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      totalTasks: 18,
      activeTasks: 5,
      completedTasks: 13,
      avgRating: 4.6,
      joinedDate: "2023-04-20",
      avatar: "/placeholder.svg"
    },
    {
      id: "OWN-003",
      name: "Emily Brown",
      email: "emily.brown@startup.io",
      phone: "+1 (555) 345-6789",
      location: "Austin, TX",
      totalTasks: 8,
      activeTasks: 2,
      completedTasks: 6,
      avgRating: 4.9,
      joinedDate: "2023-08-10",
      avatar: "/placeholder.svg"
    },
    {
      id: "OWN-004",
      name: "David Wilson",
      email: "david.wilson@agency.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      totalTasks: 15,
      activeTasks: 4,
      completedTasks: 11,
      avgRating: 4.7,
      joinedDate: "2023-05-05",
      avatar: "/placeholder.svg"
    },
    {
      id: "OWN-005",
      name: "Maria Garcia",
      email: "maria.garcia@tech.com",
      phone: "+1 (555) 567-8901",
      location: "Los Angeles, CA",
      totalTasks: 10,
      activeTasks: 1,
      completedTasks: 9,
      avgRating: 4.8,
      joinedDate: "2023-07-22",
      avatar: "/placeholder.svg"
    }
  ];

  const filteredOwners = owners.filter(owner =>
    owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    owner.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    owner.location.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Task Owners</h1>
          <p className="text-muted-foreground">Manage clients and task requesters</p>
        </div>
        <Button>Add New Owner</Button>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Owners</CardTitle>
          <CardDescription>Find owners by name, email, or location</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search owners..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Owners Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredOwners.map((owner) => (
          <Card key={owner.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={owner.avatar} alt={owner.name} />
                  <AvatarFallback>{getInitials(owner.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{owner.name}</CardTitle>
                  <CardDescription>{owner.id}</CardDescription>
                </div>
                <Badge className={getRatingColor(owner.avgRating)}>
                  ★ {owner.avgRating}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{owner.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{owner.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{owner.location}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">{owner.totalTasks}</p>
                  <p className="text-xs text-muted-foreground">Total Tasks</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600">{owner.activeTasks}</p>
                  <p className="text-xs text-muted-foreground">Active</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{owner.completedTasks}</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
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

      {/* Owners Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Owners ({filteredOwners.length})</CardTitle>
          <CardDescription>Detailed view of all task owners</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Owner</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Tasks</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOwners.map((owner) => (
                <TableRow key={owner.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={owner.avatar} alt={owner.name} />
                        <AvatarFallback className="text-xs">{getInitials(owner.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{owner.name}</p>
                        <p className="text-sm text-muted-foreground">{owner.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm">{owner.email}</p>
                      <p className="text-sm text-muted-foreground">{owner.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>{owner.location}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <p><span className="font-medium">{owner.totalTasks}</span> total</p>
                      <p className="text-muted-foreground">{owner.activeTasks} active</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRatingColor(owner.avgRating)}>
                      ★ {owner.avgRating}
                    </Badge>
                  </TableCell>
                  <TableCell>{owner.joinedDate}</TableCell>
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
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Clock, 
  Calendar, 
  BarChart3, 
  Settings,
  Plus,
  Bell,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react";

export default function VendorDashboard() {
  const queueData = [
    { id: 1, customerName: "John Doe", service: "Consultation", bookedTime: "2:00 PM", status: "waiting", position: 1 },
    { id: 2, customerName: "Jane Smith", service: "Check-up", bookedTime: "2:15 PM", status: "in-progress", position: 0 },
    { id: 3, customerName: "Mike Johnson", service: "Treatment", bookedTime: "2:30 PM", status: "waiting", position: 2 },
    { id: 4, customerName: "Sarah Wilson", service: "Consultation", bookedTime: "2:45 PM", status: "waiting", position: 3 },
    { id: 5, customerName: "Tom Brown", service: "Follow-up", bookedTime: "3:00 PM", status: "waiting", position: 4 }
  ];

  const stats = {
    todayBookings: 28,
    currentQueue: 5,
    avgWaitTime: "18 min",
    satisfaction: 4.8
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Business Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your queue and bookings efficiently
            </p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="hero">
              <Plus className="mr-2 h-4 w-4" />
              Add Slot
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Bookings</p>
                <p className="text-2xl font-bold text-foreground">{stats.todayBookings}</p>
              </div>
              <Calendar className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Queue</p>
                <p className="text-2xl font-bold text-foreground">{stats.currentQueue}</p>
              </div>
              <Users className="h-8 w-8 text-warning" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Wait Time</p>
                <p className="text-2xl font-bold text-foreground">{stats.avgWaitTime}</p>
              </div>
              <Clock className="h-8 w-8 text-success" />
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Satisfaction</p>
                <p className="text-2xl font-bold text-foreground">{stats.satisfaction}/5</p>
              </div>
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="queue" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="queue">Live Queue</TabsTrigger>
            <TabsTrigger value="bookings">All Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Live Queue Tab */}
          <TabsContent value="queue">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Current Queue</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Bell className="mr-2 h-4 w-4" />
                    Notify Next
                  </Button>
                  <Button variant="success" size="sm">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Mark Complete
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                {queueData.map((customer) => (
                  <div key={customer.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        customer.status === 'in-progress' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {customer.position === 0 ? '→' : customer.position}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{customer.customerName}</p>
                        <p className="text-sm text-muted-foreground">{customer.service}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{customer.bookedTime}</p>
                        <Badge 
                          variant={customer.status === 'in-progress' ? 'default' : 'outline'}
                          className={customer.status === 'in-progress' ? 'bg-primary text-primary-foreground' : ''}
                        >
                          {customer.status === 'in-progress' ? 'In Progress' : 'Waiting'}
                        </Badge>
                      </div>
                      
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <CheckCircle className="h-4 w-4 text-success" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <XCircle className="h-4 w-4 text-destructive" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <AlertCircle className="h-4 w-4 text-warning" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">All Bookings</h2>
              <p className="text-muted-foreground">Booking management interface coming soon...</p>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Analytics & Reports</h2>
              <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Business Settings</h2>
              <p className="text-muted-foreground">Settings panel coming soon...</p>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
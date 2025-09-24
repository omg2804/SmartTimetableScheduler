import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  MessageSquare,
  Calendar,
  User,
  MapPin,
  AlertTriangle
} from "lucide-react";

interface ApprovalItem {
  id: string;
  title: string;
  description: string;
  submittedBy: string;
  submittedAt: Date;
  status: "pending" | "approved" | "rejected" | "changes-required";
  priority: "low" | "medium" | "high" | "urgent";
  changes: {
    type: string;
    from: string;
    to: string;
  }[];
  comments: {
    id: string;
    author: string;
    content: string;
    timestamp: Date;
  }[];
}

const mockApprovals: ApprovalItem[] = [
  {
    id: "1",
    title: "Database Lab Schedule Change",
    description: "Request to move Database Lab from Thursday 2-4 PM to Friday 3-5 PM due to equipment maintenance",
    submittedBy: "Prof. Michael Chen",
    submittedAt: new Date("2024-01-15T10:30:00"),
    status: "pending",
    priority: "urgent",
    changes: [
      {
        type: "Time Slot",
        from: "Thursday 2:00 PM - 4:00 PM",
        to: "Friday 3:00 PM - 5:00 PM"
      },
      {
        type: "Room",
        from: "Lab 201",
        to: "Lab 201"
      }
    ],
    comments: [
      {
        id: "1",
        author: "Prof. Michael Chen",
        content: "Lab equipment needs urgent maintenance on Thursday afternoon. This change is critical for next week's practical sessions.",
        timestamp: new Date("2024-01-15T10:30:00")
      }
    ]
  },
  {
    id: "2",
    title: "CSE Batch A - Operating Systems Reschedule",
    description: "Conflict resolution: Dr. Emily Rodriguez has a conference call during scheduled OS class",
    submittedBy: "Dr. Emily Rodriguez",
    submittedAt: new Date("2024-01-14T14:20:00"),
    status: "changes-required",
    priority: "medium",
    changes: [
      {
        type: "Time Slot",
        from: "Tuesday 11:15 AM - 12:15 PM",
        to: "Tuesday 2:15 PM - 3:15 PM"
      },
      {
        type: "Room",
        from: "Room 102",
        to: "Room 103"
      }
    ],
    comments: [
      {
        id: "1",
        author: "Dr. Emily Rodriguez",
        content: "I have an important conference call with international collaborators during the scheduled time.",
        timestamp: new Date("2024-01-14T14:20:00")
      },
      {
        id: "2",
        author: "Dr. Sarah Johnson",
        content: "Room 103 is already booked for that time. Could we consider Room 105 instead?",
        timestamp: new Date("2024-01-14T16:45:00")
      }
    ]
  },
  {
    id: "3",
    title: "Machine Learning Class - Room Change",
    description: "Request for larger classroom due to increased enrollment",
    submittedBy: "Dr. Emily Rodriguez",
    submittedAt: new Date("2024-01-13T09:15:00"),
    status: "approved",
    priority: "low",
    changes: [
      {
        type: "Room",
        from: "Room 105",
        to: "Seminar Hall A"
      }
    ],
    comments: [
      {
        id: "1",
        author: "Dr. Emily Rodriguez",
        content: "Current enrollment is 45 students, Room 105 can only accommodate 35.",
        timestamp: new Date("2024-01-13T09:15:00")
      },
      {
        id: "2",
        author: "Admin Office",
        content: "Approved. Seminar Hall A is available and can accommodate 60 students.",
        timestamp: new Date("2024-01-13T11:30:00")
      }
    ]
  }
];

export function ApprovalWorkflow() {
  const [selectedApproval, setSelectedApproval] = useState<ApprovalItem | null>(null);
  const [comment, setComment] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "approved":
        return "bg-green-100 text-green-800 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-200";
      case "changes-required":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800";
      case "high":
        return "bg-orange-100 text-orange-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleApprove = (id: string) => {
    console.log("Approved:", id);
    // Implementation for approval logic
  };

  const handleReject = (id: string) => {
    console.log("Rejected:", id);
    // Implementation for rejection logic
  };

  const handleRequestChanges = (id: string) => {
    console.log("Request changes:", id);
    // Implementation for requesting changes
  };

  const handleAddComment = (id: string) => {
    if (!comment.trim()) return;
    console.log("Adding comment to:", id, comment);
    setComment("");
    // Implementation for adding comments
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium text-gray-900">Approvals</h1>
          <p className="text-gray-500 mt-1">Review and approve timetable changes</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-yellow-50">
            {mockApprovals.filter(a => a.status === "pending").length} Pending
          </Badge>
          <Badge variant="outline" className="bg-orange-50">
            {mockApprovals.filter(a => a.status === "changes-required").length} Changes Required
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Approval List */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-gray-900">Pending Approvals</h2>
          {mockApprovals.map((approval) => (
            <Card 
              key={approval.id} 
              className={`bg-white border-[#e0e0e0] shadow-sm cursor-pointer hover:shadow-md transition-shadow ${
                selectedApproval?.id === approval.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedApproval(approval)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-base font-medium">{approval.title}</CardTitle>
                    <CardDescription className="mt-1">{approval.description}</CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={getPriorityColor(approval.priority)}>
                      {approval.priority}
                    </Badge>
                    <Badge variant="outline" className={getStatusColor(approval.status)}>
                      {approval.status.replace("-", " ")}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {approval.submittedBy}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {approval.submittedAt.toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {approval.comments.length} comments
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Approval Details */}
        <div className="space-y-4">
          {selectedApproval ? (
            <>
              <Card className="bg-white border-[#e0e0e0] shadow-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{selectedApproval.title}</CardTitle>
                      <CardDescription className="mt-2">{selectedApproval.description}</CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={getPriorityColor(selectedApproval.priority)}>
                        {selectedApproval.priority}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(selectedApproval.status)}>
                        {selectedApproval.status.replace("-", " ")}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      Submitted by {selectedApproval.submittedBy}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {selectedApproval.submittedAt.toLocaleString()}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Proposed Changes</h4>
                    <div className="space-y-3">
                      {selectedApproval.changes.map((change, index) => (
                        <div key={index} className="bg-[#f5f5f5] rounded-lg p-3">
                          <div className="font-medium text-sm text-gray-700 mb-2">{change.type}</div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">From:</span>
                              <div className="text-red-600">{change.from}</div>
                            </div>
                            <div>
                              <span className="text-gray-500">To:</span>
                              <div className="text-green-600">{change.to}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedApproval.status === "pending" && (
                    <>
                      <Separator />
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="bg-green-600 hover:bg-green-700"
                          onClick={() => handleApprove(selectedApproval.id)}
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Approve
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-orange-200 text-orange-700 hover:bg-orange-50"
                          onClick={() => handleRequestChanges(selectedApproval.id)}
                        >
                          <AlertTriangle className="mr-2 h-4 w-4" />
                          Request Changes
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="border-red-200 text-red-700 hover:bg-red-50"
                          onClick={() => handleReject(selectedApproval.id)}
                        >
                          <XCircle className="mr-2 h-4 w-4" />
                          Reject
                        </Button>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Comments */}
              <Card className="bg-white border-[#e0e0e0] shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">Comments & Discussion</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedApproval.comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-gray-100 text-xs">
                          {comment.author.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">{comment.author}</span>
                          <span className="text-xs text-gray-500">
                            {comment.timestamp.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700">{comment.content}</p>
                      </div>
                    </div>
                  ))}

                  <Separator />

                  <div className="space-y-3">
                    <Textarea
                      placeholder="Add your comment or feedback..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="min-h-[80px]"
                    />
                    <Button 
                      size="sm"
                      onClick={() => handleAddComment(selectedApproval.id)}
                      disabled={!comment.trim()}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Add Comment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card className="bg-white border-[#e0e0e0] shadow-sm">
              <CardContent className="flex items-center justify-center h-64">
                <div className="text-center text-gray-500">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Select an approval request to view details</p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
import React from "react";
import NavBar from "../NavBar";
import Sidebar from "../Sidebar";
import TableHeading from "./TableHeading";
import UserDataRow from "./UserDataRow";

const ReportRequests = () => {
  const data = [
    {
      index: 1,
      reportingUserId: "@rohan",
      reportedUserId: "@abc",
      reportedPostId: "post_001",
      postType: "image",
      reason: "Inappropriate content",
      verifiedStatus: "Verified",
    },
    {
      index: 2,
      reportingUserId: "@abc",
      reportedUserId: "@rohan",
      reportedPostId: "post_002",
      postType: "video",
      reason: "Spam",
      verifiedStatus: "Pending",
    },
    {
      index: 3,
      reportingUserId: "@bcd",
      reportedUserId: "@xyz",
      reportedPostId: "post_003",
      postType: "text",
      reason: "Harassment",
      verifiedStatus: "Not Verified",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="w-full flex bg-gray-200 h-screen">
        <Sidebar />
        <div className="p-4 w-full flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">All Report Requests</h1>
          <div className="bg-white shadow-xl rounded-md">
            <TableHeading />
          </div>
          <div className="bg-white flex-1 shadow-2xl rounded-md overflow-hidden">
            {data.map((item, index) => (
              <UserDataRow
                key={index}
                index={item.index}
                reportingUserId={item.reportingUserId}
                reportedUserId={item.reportedUserId}
                reportedPostId={item.reportedPostId}
                postType={item.postType}
                reason={item.reason}
                verifiedStatus={item.verifiedStatus}
                rowColor={index % 2 === 0 ? "bg-blue-100" : "bg-white"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportRequests;

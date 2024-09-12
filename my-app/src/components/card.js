import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

export default function UserCard({ user }) {
  return (
    <Card className="w-[350px] shadow-lg rounded-lg p-4">
      <CardHeader className="text-center">
        <div className="flex justify-center">
          <img
            src="profilePic.png" // using default profile picture
            alt={`${user.first_name} ${user.last_name}`}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <CardTitle className="mt-4 text-xl font-semibold">
          {user.first_name} {user.last_name}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-center">
        <div className="flex items-center justify-center text-gray-500">
          <MapPin size={16} className="mr-1" />
          <span>{user.city}</span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center text-gray-700">
          <Phone size={16} className="mr-2" />
          <div>
            <p className="font-medium">{user.contact_number}</p>
            <p className="text-xs text-gray-400">Available on phone</p>
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-black text-white">Fetch Details</Button>
          </DialogTrigger>
          <DialogContent className="bg-white text-black">
            <DialogHeader>
              <DialogTitle>Fetch Details</DialogTitle>
              <DialogDescription>
                Here are the details of following employee.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col">
              <span>
                Name: {user.first_name} {user.last_name}
              </span>
              <span>Location: {user.city}</span>
              <span>Contact Number: {user.contact_number}</span>
              <span>
                Profile Image:{" "}
                <img src="profilePic.png" alt="Profile Picture" />
              </span>
            </div>
            <DialogFooter>
              <Button type="submit">Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

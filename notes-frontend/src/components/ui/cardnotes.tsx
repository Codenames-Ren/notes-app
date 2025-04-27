import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./textarea";

export default function CardNotes() {
  return (
    <Card className="w-full max-w-sm my-3 mx-12 dark:bg-cyan-700">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/bronya.jpeg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <CardTitle>Create your own notes</CardTitle>
            <CardDescription>
              Enter your Username and your own notes
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="notes">Notes</Label>
              </div>
              <Textarea
                id="notes"
                placeholder="Write your notes here"
                required
                className="dark:bg-white dark:placeholder:text-black"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full dark:bg-cyan-500">
          Save
        </Button>
        <Button
          variant="neutral"
          className="w-full dark:bg-white dark:text-black"
        >
          Update Notes
        </Button>
      </CardFooter>
    </Card>
  );
}

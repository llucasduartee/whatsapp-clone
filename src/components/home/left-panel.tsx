import {
  ListFilter,
  LogOut,
  MessageSquareDiff,
  Search,
  User,
} from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitcher from "./theme-switcher";
import { conversations } from "@/dummy-data/db";
import Conversation from "./conversation";

const LeftPanel = () => {
  return (
    <div className="w-1/4 border-gray-600 border-r">
      <div className="sticky top-0 bg-left-panel z-10">
        <div className="flex justify-between bg-gray-primary p-3 items-center">
          <User size={24} />

          <div className="flex items-center gap-3">
            <MessageSquareDiff size={20} />
            <ThemeSwitcher />
            <LogOut size={20} className="cursor-pointer" />
          </div>
        </div>
        <div className="p-3 flex items-center">
          <div className="relative h-10 mx-3 flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search or start a new chat"
              className="pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent"
            />
          </div>
          <ListFilter className="cursor-pointer" />
        </div>
      </div>

      <div className="my-3 flex flex-col gap-0 max-h-[80%] overflow-auto">
        {conversations.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}

        {conversations?.length === 0 && (
          <>
            <p className="text-center text-gray-500 text-sm mt-3">
              No conversations yet
            </p>
            <p className="text-center text-gray-500 text-sm mt-3 ">
              We understand {"you're"} an introvert, but {"you've"} got to start
              somewhere 😊
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default LeftPanel;

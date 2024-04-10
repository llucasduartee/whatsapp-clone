import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date_ms: number) {
  let date_seconds = date_ms / 1000;

  let date_obj = new Date(date_seconds * 1000);

  let current_date = new Date();
  current_date.setHours(0, 0, 0, 0);
  let current_time = current_date.getTime();

  let provided_date = new Date(date_obj);
  provided_date.setHours(0, 0, 0, 0);

  if (provided_date.getTime() === current_time) {
    return date_obj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  }

  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);
  if (provided_date.getTime() === yesterday.getTime()) {
    return "Yesterday";
  }

  if (provided_date.getDay() < current_date.getDay()) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[provided_date.getDay()];
  }

  return (
    provided_date.getMonth() +
    1 +
    "/" +
    provided_date.getDate() +
    "/" +
    provided_date.getFullYear()
  );
}
